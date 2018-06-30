import DropToUpload from 'react-drop-to-upload';
import React from 'react';
import Router from 'next/router';
import XLSX from 'xlsx';
import { CATEGORY } from '../utils/mocks';
import { parser } from '../utils/parseSheet';
import gradeChartParser from '../utils/gradeChartParser';
import _ from 'lodash';
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

const transformDataNew = (fileName, rawTables) => {
  const file_name = fileName.replace('.xlsx', '');
  const [, code] = fileName.match(/\[(.*)\]/i);
  const [gender] = fileName.match(/WOMEN|MEN|UNISEX/i) || [''];
  const category = '';
  console.log('file', code, gender, category);

  const parsedTables = gradeChartParser(rawData);
  const attributesIndex = _.indexOf(
    parsedTables,
    table => name !== 'attributes'
  );

  const transformedData = {
    code,
    category,
    gender,
    dimensions: [],
    base_size: '',
  };

  //todo : split base_size and add into each dimensions
};

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

const transformRawToData = (fileName, rawData) => {
  //remember to replace size with waist
  const baseDemensions = ['size', 'inseam', 'build'];
  const file_name = fileName.replace('.xlsx', '');
  const [, code] = fileName.match(/\[(.*)\]/i),
    [gender] = fileName.match(/WOMEN|MEN|UNISEX/i) || [''];
  const category = '';
  console.log('file', code, gender, category);
  const parsedTables = gradeChartParser(rawData);

  const attributeTbl = _.find(parsedTables, { name: 'attributes' });
  console.log('attributeTbl', attributeTbl);

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

  /*
  let currentDemension;

  rawData.forEach(row => {
    if (!row || row.length === 0) {
      return;
    }

    const firstItem = String(row[0])
      .trim()
      .toLowerCase();
    if (firstItem === 'base size') {
      transformedData.base_size = row[1].trim();
      return;
    }

    // check if row is demension row, and collect label
    //todo: fix logic to detect label
    if (baseDemensions.includes(firstItem)) {
      // found currentDemension: push completed previous demension into array
      if (currentDemension) {
        transformedData.dimensions.push(currentDemension);
        currentDemension = null;
      }

      const name = firstItem;
      const sizes = row.slice(2);

      currentDemension = {
        file_name,
        name,
        sizes,
        label: row,
        data: [],
        measures: [],
      };
      // data row
      return;
    }

    if (currentDemension) {
      const measures = {
        garment_measure: row[0] && row[0].trim(),
        description: row[1] && row[1].trim(),
        body_measuare: '', //  did not select yet
      };

      currentDemension.measures.push(measures);
      currentDemension.data.push(row);
      return;
    }
  });
  */

  return transformedData;
};

class ImportProduct extends React.Component {
  constructor(props) {
    super(props);
    console.log('proj', this.props.project);
  }

  handleFile(file) {
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
      const rawData = XLSX.utils.sheet_to_json(ws, { header: 1, raw: true });

      console.log('rawData', rawData);
      const transformedData = transformRawToData(fileName.trim(), rawData);
      console.log('transformedData', JSON.stringify(transformedData));
      this.props.updateStateHandler({ data: transformedData });

      return Router.push(`/product/preview?project=${this.props.project}`);
      //console.log({ data: data, cols: make_cols(ws['!ref']) });
    };
    rABS ? reader.readAsBinaryString(file) : reader.readAsArrayBuffer(file);
  }

  handleDrop(files) {
    try {
      const file = files[0];
      if (file.name.match(/\.xlsx$/i)) {
        this.handleFile(file);
      } else {
        console.error(`input isn't excel file format`);
      }
    } catch (e) {
      throw e;
    }
  }

  render() {
    return (
      <div>
        <div style={{ margin: '30px 0' }}>
          <div>Import from google Drive</div>
          <input type="text" style={{ width: '100%' }} />
        </div>
        <div>
          <div>From your computer</div>
          <DropToUpload
            style={wrapperStyle}
            onDrop={this.handleDrop.bind(this)}
          >
            <label htmlFor="fileUpload">
              <a>File picker</a>
            </label>
            <input
              id="fileUpload"
              onChange={e => this.handleDrop(e.target.files)}
              style={{ visibility: 'hidden' }}
              type="file"
            />
            <style jsx>{`
              input:focus {
                outline: 0;
              }
              label {
                background-color: #6458f5;
                color: #fff;
                font-size: 15px;
                cursor: pointer;
                padding: 10px;
                position: absolute;
              }
              button {
                padding: 5px;
                text-decoration: none;
              }
            `}</style>
          </DropToUpload>
        </div>
      </div>
    );
  }
}

export default ImportProduct;
