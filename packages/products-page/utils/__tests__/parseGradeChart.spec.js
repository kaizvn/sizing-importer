import { gradeChartParser, transformRawData } from '../gradeChartParser';

describe('sheet parser: Grade Chart sheet', () => {
  it('should return attributes table', () => {
    const parsedTables = gradeChartParser(sheet);
    expect(parsedTables[0]).toEqual({
      name: 'attributes',
      headers: ['attribute', 'value'],
      rows: [{ attribute: 'Base size', value: '8 x RG' }],
    });
  });

  it('should return SIZE table', () => {
    const tables = gradeChartParser(sheet);
    expect(tables[1].name).toEqual('SIZE');
    expect(tables[1].rows.length).toEqual(6);
    expect(tables[1].rows[0]).toEqual({
      '0': '28 1/2',
      '10': '33 1/2',
      '12': '35',
      '14': '36 1/2',
      '16': '38',
      '18': '40',
      '2': '29 1/2',
      '20': '42',
      '22': '44',
      '24': '46',
      '26': '48',
      '4': '30 1/2',
      '6': '31 1/2',
      '8': '32 1/2',
      'Measurement note': 'measured along curve at top WB',
      SIZE: 'WAIST CIRCUMFERNCE',
      XS: '27 1/2',
    });
  });

  it('should transform raw data correctly', () => {
    const fileName = '[1012] FA WOMEN DRESSWEAR PANT';
    const parsedTables = gradeChartParser(sheet);
    const transformedData = transformRawData(fileName.trim(), parsedTables);

    expect(transformedData.file_name).toEqual(fileName);
    expect(transformedData.code).toEqual('1012');
    expect(transformedData.gender).toEqual('WOMEN');
    expect(transformedData.base_size).toEqual(['8', 'RG']);
    expect(transformedData.dimensions[0].measures).toEqual([
      {
        garment_measure: 'WAIST CIRCUMFERNCE',
        description: 'measured along curve at top WB',
        body_measaure: '',
      },
      {
        garment_measure: 'Hip circumference',
        description: 'AT 3" UP FROM FRONT CROTCH',
        body_measaure: '',
      },
      {
        garment_measure: 'THIGH',
        description: '1"Below crotch',
        body_measaure: '',
      },
      {
        garment_measure: 'KNEE',
        description:
          'measured from crotch 13" for short , 14" for regular , 15" for Tall',
        body_measaure: '',
      },
      {
        garment_measure: 'Front Rise',
        description: 'RG -INC   W/ BAND',
        body_measaure: '',
      },
      {
        garment_measure: 'Back Rise',
        description: 'RG -INC   W/ BAND',
        body_measaure: '',
      },
    ]);

    expect(transformedData.dimensions[1].measures).toEqual([
      {
        garment_measure: 'Front Rise',
        description: 'Size 10',
        body_measaure: '',
      },
      {
        garment_measure: 'Back Rise',
        description: 'Size 10',
        body_measaure: '',
      },
      {
        garment_measure: 'Inseam',
        description: 'Size 10',
        body_measaure: '',
      },
    ]);
  });
});

const sheet = [
  ['attribute', 'value'],
  ['Base size', '8 x RG'],
  [],
  [
    'SIZE ',
    'Measurement note',
    'XS',
    '0    ',
    '2    ',
    '4    ',
    '6    ',
    '8    ',
    '10    ',
    '12    ',
    '14    ',
    '16    ',
    '18    ',
    '20    ',
    '22    ',
    '24    ',
    '26    ',
  ],
  [
    'WAIST CIRCUMFERNCE',
    'measured along curve at top WB',
    '27 1/2',
    '28 1/2',
    '29 1/2',
    '30 1/2',
    '31 1/2',
    '32 1/2',
    '33 1/2',
    '35    ',
    '36 1/2',
    '38    ',
    '40    ',
    '42    ',
    '44    ',
    '46    ',
    '48    ',
  ],
  [
    'Hip circumference',
    'AT 3" UP FROM FRONT CROTCH',
    '37 1/2',
    '38 1/2',
    '39 1/2',
    '40 1/2',
    '41 1/2',
    '42 1/2',
    '43 1/2',
    '45    ',
    '46 1/2',
    '48    ',
    '50    ',
    '52    ',
    '54    ',
    '56    ',
    '58    ',
  ],
  [
    'THIGH',
    '1"Below crotch',
    '23    ',
    '23 1/2',
    '24    ',
    '24 1/2',
    '25    ',
    '25 1/2',
    '26    ',
    '26 3/4',
    '27 1/2',
    '28 1/4',
    '29 1/4',
    '30 1/4',
    '31 1/4',
    '32 1/4',
    '33 1/4',
  ],
  [
    'KNEE',
    'measured from crotch 13" for short , 14" for regular , 15" for Tall',
    '16 1/8',
    '16 1/2',
    '16 7/8',
    '17 1/4',
    '17 5/8',
    '18    ',
    '18 3/8',
    '18 3/4',
    '19 1/8',
    '19 1/2',
    '19 7/8',
    '20 1/4',
    '20 5/8',
    '21    ',
    '21 3/8',
  ],
  [
    'Front Rise',
    'RG -INC   W/ BAND',
    '9 1/2',
    '9 3/4',
    '10    ',
    '10 1/4',
    '10 1/2',
    '10 3/4',
    '11    ',
    '11 3/8',
    '11 3/4',
    '12 1/8',
    '12 1/2',
    '12 7/8',
    '13 1/4',
    '13 5/8',
    '14    ',
  ],
  [
    'Back Rise',
    'RG -INC   W/ BAND',
    '14 1/2',
    '14 3/4',
    '15    ',
    '15 1/4',
    '15 1/2',
    '15 3/4',
    '16    ',
    '16 1/4',
    '16 5/8',
    '17    ',
    '17 3/8',
    '17 3/4',
    '18 1/8',
    '18 1/2',
    '18 7/8',
  ],
  [],
  ['INSEAM', 'Measurement note', 'PT', 'RG', 'TL'],
  ['Front Rise', 'Size 10', '10 1/2', '11    ', '12    '],
  ['Back Rise', 'Size 10', '15 1/2', '16    ', '17    '],
  ['Inseam', 'Size 10', '33    ', '34    ', '35    '],
  [],
  [],
  [],
  [],
  [],
  [],
];
