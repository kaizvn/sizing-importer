import React from 'react';

import { PRODUCTS } from '../utils/mocks';
import MyTab from './MyTab';
import ProductList from './ProductList';

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
        <button>
          <a href="#"> + Audit section</a>
        </button>
        <button>
          <a href={`/product/import?project=${props.project}`}>+ Product</a>
        </button>
        <style jsx>
          {`
            button {
              background-color: #6458f5;
              font-size: 15px;
              cursor: pointer;
              padding: 10px;
              margin: 2px;
            }
            button a {
              color: #fff;
            }
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
