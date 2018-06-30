/* global WeakMap */
import always from 'lodash/fp/always';
import map from 'lodash/fp/map';
import negate from 'lodash/fp/negate';
import takeWhile from 'lodash/fp/takeWhile';
import trim from 'lodash/fp/trim';
import zipObject from 'lodash/fp/zipObject';

const leftOverMap = new WeakMap();

const parser = (...handlers) => {
  return raw => {
    const ts = [];
    let handlerIndex = 0;
    let currentTableIndex = -1;
    let index = 0;
    for (; index < raw.length; ++index) {
      if (handlerIndex >= handlers.length) {
        break;
      }
      const eventOrFunction = handlers[handlerIndex](
        ...raw.slice(index, index + 5)
      );

      if (typeof eventOrFunction === 'function') {
        // handling sub ranges
        const subRange = raw.slice(index);
        const { tables, consumedRows } = eventOrFunction(subRange);

        handlerIndex++;
        index += consumedRows - 1;
        ts.push(...tables);
        currentTableIndex += tables.length;
        continue;
      }

      const event = eventOrFunction;

      if (event.finished) {
        handlerIndex++;
      }

      if (event.revert) {
        index--;
      }

      switch (event.type) {
        case 'START_TABLE': {
          currentTableIndex++;
          ts[currentTableIndex] = {
            name: trim(event.payload),
            headers: [],
            rows: [],
          };
          break;
        }

        case 'HEADER': {
          ts[currentTableIndex].headers = event.payload.map(trim);
          break;
        }

        case 'ROW': {
          const row = zipObject(
            ts[currentTableIndex].headers,
            event.payload.map(v => (typeof v === 'string' ? trim(v) : v))
          );
          ts[currentTableIndex].rows.push(row);
          break;
        }
      }
    }

    const leftOver = raw.slice(index);
    if (leftOver.length) {
      leftOverMap.set(ts, leftOver);
    }
    return ts;
  };
};

export const skipRow = always({
  type: 'SKIP_ROW',
  finished: true,
});

export const takeUntil = (predicate, eventCreator) => (row, nextRow) => {
  const event = eventCreator(row);
  const finished = !nextRow || !predicate(nextRow);

  return {
    ...event,
    finished,
  };
};

export const skipUntil = predicate => (row, nextRow) => {
  const match = predicate(row);
  const finished = !nextRow || predicate(nextRow);

  return {
    type: 'SKIP_ROW',
    finished: match || finished,
    revert: match,
  };
};

export const startTable = getName => row => ({
  type: 'START_TABLE',
  payload: getName(row),
  finished: true,
  revert: true,
});

export const header = row => ({
  type: 'HEADER',
  payload: row,
  finished: true,
});

export const appendRow = row => ({
  type: 'ROW',
  payload: row,
  finished: true,
});

export const endTable = always({
  type: 'END_TABLE',
  finished: true,
});

export const repeatUntil = (predicate, subParser) => {
  const createTable = takeWhile(negate(predicate));

  return () => rawTable => {
    let subTable = createTable(rawTable);
    const consumedRows = subTable.length;
    const tables = [];

    while (subTable) {
      const parseResult = subParser(subTable);
      subTable = leftOverMap.get(parseResult);
      tables.push(...parseResult);
    }

    return {
      tables,
      consumedRows,
    };
  };
};
export default parser;
