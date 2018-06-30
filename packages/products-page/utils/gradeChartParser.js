import always from 'lodash/fp/always';
import _ from 'lodash';

import parser, {
  appendRow,
  endTable,
  header,
  skipUntil,
  startTable,
  takeUntil,
} from '../utils/parseSheet';

const dimensionParsers = [
  skipUntil(row => row.length),
  startTable(row => row[0]),
  header,
  takeUntil(row => row.length, appendRow),
  endTable,
];

export const gradeChartParser = parser(
  skipUntil(row => row.length),
  startTable(always('attributes')),
  header,
  appendRow,
  endTable,
  ...dimensionParsers,
  ...dimensionParsers,
  ...dimensionParsers
);

const dimensionTableParser = rawTable => {
  const garment = rawTable.headers[0];
  const description = rawTable.headers[1];
  rawTable.sizes = rawTable.headers.slice(2);

  rawTable.measures = rawTable.rows.map(row => {
    return {
      garment_measure: row[garment],
      description: row[description],
      body_measaure: '',
    };
  });

  return rawTable;
};

export const transformRawData = (fileName, parsedTables) => {
  //remember to replace size with waist
  const baseDemensions = ['size', 'inseam', 'build'];
  const file_name = fileName.replace('.xlsx', '');
  const [code] = fileName.match(/\d+/i) || [''],
    [gender] = fileName.match(/WOMEN|MEN|UNISEX/i) || [''];
  //todo: map the category
  const category = '';

  const attributeTbl = _.find(parsedTables, { name: 'attributes' });

  const baseSizeAttr = _.find(
    attributeTbl.rows,
    attr => attr.attribute.toLowerCase() === 'base size'
  );
  const base_size = baseSizeAttr.value.split(' x ');

  const dimensionTables = _
    .filter(parsedTables, table => table.name !== 'attributes')
    .map(tbl => dimensionTableParser(tbl));

  base_size.forEach((val, index) => {
    dimensionTables[index].base_size = val;
  });

  const transformedData = {
    file_name,
    code,
    category,
    gender,
    base_size,
    dimensions: dimensionTables,
  };

  return transformedData;
};
