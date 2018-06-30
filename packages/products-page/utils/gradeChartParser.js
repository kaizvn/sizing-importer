import always from 'lodash/fp/always';

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

const gradeChartParser = parser(
  skipUntil(row => row.length),
  startTable(always('attributes')),
  header,
  appendRow,
  endTable,
  ...dimensionParsers,
  ...dimensionParsers,
  ...dimensionParsers
);

export default gradeChartParser;
