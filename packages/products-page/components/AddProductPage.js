import DropToUpload from 'react-drop-to-upload';
import React from 'react';
import XLSX from 'xlsx';

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
	let o = [], C = XLSX.utils.decode_range(refstr).e.c + 1;
	for(var i = 0; i < C; ++i) o[i] = {name:XLSX.utils.encode_col(i), key:i}
	return o;
};

const handleFile = (file) => {
		/* Boilerplate to set up FileReader */
		const reader = new FileReader();
		const rABS = !!reader.readAsBinaryString;
		reader.onload = (e) => {
			/* Parse data */
			const bstr = e.target.result;
			const wb = XLSX.read(bstr, {type:rABS ? 'binary' : 'array'});
			/* Get first worksheet */
			const wsname = wb.SheetNames[0];
			const ws = wb.Sheets[wsname];
			/* Convert array of arrays */
			const data = XLSX.utils.sheet_to_json(ws, {header:1});
			/* Update state */
			console.log({ data: data, cols: make_cols(ws['!ref']) });
		};
		if(rABS) reader.readAsBinaryString(file); else reader.readAsArrayBuffer(file);
	};

const handleDrop = files => {
  console.log('drop!', files);
  const file = files[0];
  handleFile(file);
  // for(let i = 0; i < files.length; i++) {
  //
  // }
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
