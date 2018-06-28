import React from 'react';

import { PRODUCTS } from '../utils/mocks';
import MyTab from './MyTab';
import ProductList from './ProductList';

const buttonStyle = {
  backgroundColor: '#6458f5',
  color: '#fff',
  fontSize: '15px',
  cursor: 'pointer',
  height: '2em',
};

const addProduct = e => {
  alert('click!');
};

const ProductPage = props => (
  <div>
    <div>
      <div style={{ float: 'left' }}>
        <h2>{props.project}</h2>
        <div style={{ opacity: 0.7 }}>
          {props.dateFrom} - {props.dateTo}
        </div>
      </div>
      <div style={{ float: 'right', margin: '30px 20px' }}>
        <button style={buttonStyle}>
          <a href="#"> + Audit section</a>
        </button>
        <button style={buttonStyle}>
          <a href={`/products/Product?action=add&project=${props.project}`}>
            + Product
          </a>
        </button>
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
      </div>
    </div>
    <div style={{ clear: 'both' }}>
      <div>
        <MyTab tabs={props.tabs} />
        <ProductList data={PRODUCTS} />
      </div>
    </div>
  </div>
);

export default ProductPage;
