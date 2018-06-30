import React from 'react';

import { DIMENSIONS } from '../utils/mocks';
import DimensionItem from './DimensionItem';

const generateBodyMeasures = garmentMeasure => {
  switch (garmentMeasure) {
  }
};

const transformData = rawData => {
  return rawData.map(item => {
    return {
      name: item.name,
      size_names: item.sizes,
      measures: item.measures,
    };
  });
};

class DimensionList extends React.Component {
  constructor(props) {
    super(props);
  }

  getInitialProps() {
    return {
      data: [],
    };
  }

  changeHandler() {
    console.log('changeHandler');
  }

  render() {
    const dimensions = this.props.data;
    const transformedData = transformData(dimensions);
    return (
      <div>
        <ul>
          <li>
            <div>name</div>
            <div>size names</div>
            <div>garment measure</div>
            <div>body measuare</div>
          </li>
          {transformedData.map((item, index) => (
            <DimensionItem
              key={index}
              data={item}
              changeHandler={this.changeHandler}
            />
          ))}
        </ul>

        <style jsx>{`
          li div {
            display: inline-block;
            width: 25%;
            fontweight: bold;
          }
          li {
            list-style: none;
            margin: 5px 0;
          }
        `}</style>
      </div>
    );
  }
}
export default DimensionList;
