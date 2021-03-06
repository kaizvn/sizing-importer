const PRODUCTS = [
  {
    name: 'TEST 01',
    code: 'D1234',
    dimensions: ['Waist', 'Inseam ', 'Build'],
    number_combinations: 127,
    last_sync: '3 days ago',
    last_sync_from: 'UniSync',
    audit_coverage: 0.8,
    number_tried: 15,
  },
  {
    name: 'TEST 02',
    code: 'D1235',
    dimensions: ['Waist', 'Inseam ', 'Build'],
    number_combinations: 111,
    last_sync: '3 days ago',
    last_sync_from: 'UniSync',
    audit_coverage: 0.5,
    number_tried: 12,
  },
  {
    name: 'TEST 03',
    code: 'D1236',
    dimensions: ['Waist', 'Inseam ', 'Build'],
    number_combinations: 20,
    last_sync: '3 days ago',
    last_sync_from: 'UniSync',
    audit_coverage: 0.85,
    number_tried: 1,
  },
  {
    name: 'TEST 04',
    code: 'D1237',
    dimensions: ['Waist'],
    number_combinations: 44,
    last_sync: 'May 28th',
    last_sync_from: 'UniSync',
    audit_coverage: 0.9,
    number_tried: 12,
  },
  {
    name: 'TEST 05',
    code: 'D1239',
    dimensions: ['Waist'],
    number_combinations: 69,
    last_sync: 'last week',
    last_sync_from: 'UniSync',
    audit_coverage: 0.6,
    number_tried: 11,
  },
];

const DIMENSIONS = {
  file_name: '[1012] FA WOMEN DRESSWEAR PANT',
  code: '1012',
  category: '',
  gender: 'WOMEN',
  base_size: ['8', 'RG'],
  dimensions: [
    {
      name: 'SIZE',
      headers: [
        'SIZE',
        'Measurement note',
        'XS',
        '0',
        '2',
        '4',
        '6',
        '8',
        '10',
        '12',
        '14',
        '16',
        '18',
        '20',
        '22',
        '24',
        '26',
      ],
      rows: [
        {
          '0': 28.5,
          '2': 29.5,
          '4': 30.5,
          '6': 31.5,
          '8': 32.5,
          '10': 33.5,
          '12': 35,
          '14': 36.5,
          '16': 38,
          '18': 40,
          '20': 42,
          '22': 44,
          '24': 46,
          '26': 48,
          SIZE: 'WAIST CIRCUMFERNCE',
          'Measurement note': 'measured along curve at top WB',
          XS: 27.5,
        },
        {
          '0': 38.5,
          '2': 39.5,
          '4': 40.5,
          '6': 41.5,
          '8': 42.5,
          '10': 43.5,
          '12': 45,
          '14': 46.5,
          '16': 48,
          '18': 50,
          '20': 52,
          '22': 54,
          '24': 56,
          '26': 58,
          SIZE: 'Hip circumference',
          'Measurement note': 'AT 3" UP FROM FRONT CROTCH',
          XS: 37.5,
        },
        {
          '0': 23.5,
          '2': 24,
          '4': 24.5,
          '6': 25,
          '8': 25.5,
          '10': 26,
          '12': 26.75,
          '14': 27.5,
          '16': 28.25,
          '18': 29.25,
          '20': 30.25,
          '22': 31.25,
          '24': 32.25,
          '26': 33.25,
          SIZE: 'THIGH',
          'Measurement note': '1"Below crotch',
          XS: 23,
        },
        {
          '0': 16.5,
          '2': 16.875,
          '4': 17.25,
          '6': 17.625,
          '8': 18,
          '10': 18.375,
          '12': 18.75,
          '14': 19.125,
          '16': 19.5,
          '18': 19.875,
          '20': 20.25,
          '22': 20.625,
          '24': 21,
          '26': 21.375,
          SIZE: 'KNEE',
          'Measurement note':
            'measured from crotch 13" for short , 14" for regular , 15" for Tall',
          XS: 16.125,
        },
        {
          '0': 9.75,
          '2': 10,
          '4': 10.25,
          '6': 10.5,
          '8': 10.75,
          '10': 11,
          '12': 11.375,
          '14': 11.75,
          '16': 12.125,
          '18': 12.5,
          '20': 12.875,
          '22': 13.25,
          '24': 13.625,
          '26': 14,
          SIZE: 'Front Rise',
          'Measurement note': 'RG -INC   W/ BAND',
          XS: 9.5,
        },
        {
          '0': 14.75,
          '2': 15,
          '4': 15.25,
          '6': 15.5,
          '8': 15.75,
          '10': 16,
          '12': 16.25,
          '14': 16.625,
          '16': 17,
          '18': 17.375,
          '20': 17.75,
          '22': 18.125,
          '24': 18.5,
          '26': 18.875,
          SIZE: 'Back Rise',
          'Measurement note': 'RG -INC   W/ BAND',
          XS: 14.5,
        },
      ],
      sizes: [
        'XS',
        '0',
        '2',
        '4',
        '6',
        '8',
        '10',
        '12',
        '14',
        '16',
        '18',
        '20',
        '22',
        '24',
        '26',
      ],
      measures: [
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
      ],
      base_size: '8',
    },
    {
      name: 'INSEAM',
      headers: ['INSEAM', 'Measurement note', 'PT', 'RG', 'TL'],
      rows: [
        {
          INSEAM: 'Front Rise',
          'Measurement note': 'Size 10',
          PT: 10.5,
          RG: 11,
          TL: 12,
        },
        {
          INSEAM: 'Back Rise',
          'Measurement note': 'Size 10',
          PT: 15.5,
          RG: 16,
          TL: 17,
        },
        {
          INSEAM: 'Inseam',
          'Measurement note': 'Size 10',
          PT: 33,
          RG: 34,
          TL: 35,
        },
      ],
      sizes: ['PT', 'RG', 'TL'],
      measures: [
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
      ],
      base_size: 'RG',
    },
  ],
};

const BODY_MEASURE_OPTIONS = [
  { value: 'across_back_shoulder', label: 'Across back shoulder' },
  { value: 'arm_length', label: 'Arm length' },
  { value: 'bicep_circumference', label: 'Bicep circumference' },
  { value: 'bust_chest_circumference', label: 'Bust/Chest circumference' },
  { value: 'bust_chest_elevation', label: 'Bust chest elevation' },
  { value: 'calf_circumference', label: 'Calf circumference' },
  { value: 'center_back_length', label: 'Center back length' },
  { value: 'coat_length', label: 'Coat length' },
  { value: 'height', label: 'Height' },
  { value: 'high_hip_circumference', label: 'High hip circumference' },
  { value: 'high_hip_elevation', label: 'High hip elevation' },
  { value: 'inseam', label: 'Inseam' },
  { value: 'knee_elevation', label: 'Knee elevation' },
  { value: 'low_hip_circumference', label: 'Low hip circumference' },
  { value: 'low_hip_elevation', label: 'Low hip elevation' },
  { value: 'lower_torso_length', label: 'Lower torso length' },
  { value: 'nape_of_neck_elevation', label: 'Nape of neck elevation' },
  { value: 'neck_circumference', label: 'Neck circumference' },
  { value: 'pant_waist_circumference', label: 'Pant waist circumference' },
  { value: 'seat_circumference', label: 'Seat circumference' },
  { value: 'seat_elevation', label: 'Seat elevation' },
  { value: 'shirt_length', label: 'Shirt length' },
  { value: 'shoulder_elevation', label: 'Shoulder elevation' },
  { value: 'skirt_length', label: 'Skirt length' },
  { value: 'sleeve_length', label: 'Sleeve length' },
  { value: 'thigh_circumference', label: 'Thigh circumference' },
  { value: 'torso_length', label: 'Torso length' },
  { value: 'waist_circumference', label: 'Waist circumference' },
  { value: 'waist_elevation', label: 'Waist elevation' },
  { value: 'weight', label: 'Weight' },
];

const CATEGORY = [
  { value: 'Shirts', label: 'Shirts' },
  { value: 'Jackets', label: 'Jackets' },
  { value: 'Outerwear', label: 'Outerwear' },
  { value: 'Pants', label: 'Pants' },
  { value: 'Sweaters', label: 'Sweaters' },
  { value: 'Accessories', label: 'Accessories' },
  { value: 'Shorts', label: 'Shorts' },
  { value: 'Capris', label: 'Capris' },
  { value: 'Basics', label: 'Basics' },
  { value: 'Skirts', label: 'Skirts' },
  { value: 'Dresses', label: 'Dresses' },
  { value: 'Jeans', label: 'Jeans' },
  { value: 'Jumpsuit', label: 'Jumpsuit' },
  { value: 'Vest', label: 'Vest' },
  { value: 'Coats', label: 'Coats' },
  { value: 'Intimates', label: 'Intimates' },
];

export { PRODUCTS, DIMENSIONS, BODY_MEASURE_OPTIONS, CATEGORY };
