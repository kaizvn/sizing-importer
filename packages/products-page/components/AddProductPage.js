import DropToUpload from 'react-drop-to-upload';
import React from 'react';
import XLSX from 'xlsx';

let importData;

const buttonStyle = {
  backgroundColor: '#6458f5',
  color: '#fff',
  fontSize: '15px',
  cursor: 'pointer',
  height: '2em',
};

const wrapperStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'solid 1px',
  height: '500px',
  margin: '0 auto',
};

/* generate an array of column objects */
const make_cols = refstr => {
  let o = [],
    C = XLSX.utils.decode_range(refstr).e.c + 1;
  for (var i = 0; i < C; ++i) o[i] = { name: XLSX.utils.encode_col(i), key: i };
  return o;
};

const handleFile = file => {
  /* Boilerplate to set up FileReader */
  const reader = new FileReader();
  const rABS = !!reader.readAsBinaryString;
  const fileName = file.name;
  reader.onload = e => {
    /* Parse data */
    const bstr = e.target.result;
    const wb = XLSX.read(bstr, { type: rABS ? 'binary' : 'array' });
    /* Get first worksheet */
    const wsname = wb.SheetNames[0];
    const ws = wb.Sheets[wsname];
    /* Convert array of arrays */
    const rawData = XLSX.utils.sheet_to_json(ws, { header: 1 });
    importData = transformRawToData(fileName.trim(), rawData);

    console.log('importData:', importData);
    //console.log({ data: data, cols: make_cols(ws['!ref']) });
  };

  rABS ? reader.readAsBinaryString(file) : reader.readAsArrayBuffer(file);
};

const transformRawToData = (fileName, rawData) => {
  // proposed format :
  // output = {  table : {data: [], label: []}, dimensions :  [{name: '', size_name: '', measure: '' , body_measuare: '' }], code: '', base_size: '', category: '', gender: '' }
  //remember to replace size with waist
  const baseDemensions = ['size', 'inseam', 'build'];
  const [x, code, gender, category] = fileName.match(
    /\[(.*)\] (.* WOMEN|MEN|UNISEX) (.*)\.xlsx$/i
  ) || ['', '', '', ''];

  const transformedData = {
    code,
    category,
    gender,
    dimensions: [],
    base_size: '',
  };

  let currentDemension;
  rawData.forEach(row => {
    if (row && row.length) {
      const firstItem = (row[0] + '').trim().toLowerCase();
      if (firstItem === 'base size') {
        transformedData.base_size = row[1].trim();
      }
      // check if row is demension row, and collect label
      else if (baseDemensions.includes(firstItem)) {
        // found currentDemension: push completed previous demension into array
        if (currentDemension) {
          transformedData.dimensions.push(currentDemension);
          currentDemension = null;
        }

        const name = firstItem;
        const sizes = row.slice(2);

        currentDemension = {
          name,
          sizes,
          label: row,
          data: [],
          measures: [],
        };
        // data row
      } else if (currentDemension) {
        const measures = {
          garment_measure: row[0] && row[0].trim(),
          description: row[1] && row[1].trim(),
          body_measuare: '', //  did not select yet
        };

        currentDemension.measures.push(measures);
        currentDemension.data.push(row);
      }
    }
  });

  return transformedData;
};

const handleDrop = files => {
  try {
    const file = files[0];
    handleFile(file);
  } catch (e) {
    throw e;
  }
};

export default props => (
  <div>
    <div style={{ margin: '30px 0' }}>
      <div>Import from google Drive</div>
      <input type="text" />
    </div>
    <div>
      <div>From your computer</div>
      <DropToUpload style={wrapperStyle} onDrop={handleDrop}>
        <label style={buttonStyle} htmlFor="fileUpload">
          <a>File picker</a>
        </label>
        <input
          id="fileUpload"
          onChange={e => handleDrop(e.target.files)}
          style={{ visibility: 'hidden' }}
          type="file"
        />
        <style jsx>
          {`
            button:focus {
              outline: 0;
            }
            button a {
              padding: 5px;
              text-decoration: none;
            }
          `}
        </style>
      </DropToUpload>
    </div>
  </div>
);