import React from 'react';

import Header from '../../components/Header';
import ProductPage from '../../components/ProductPage';

const state = {
  currentPage: 'ProductPage',
  project: 'Air Canada 2017',
  dateFrom: 'Feb 2017',
  dateTo: 'Jul 2017',
};

const IndexPage = props => (
  <div>
    <Header title="Product dashboard" />
    <ProductPage
      project={state.project}
      dateFrom={state.dateFrom}
      dateTo={state.dateTo}
    />
    <style jsx>{`
      div {
        width: 70%;
        margin: 0 auto;
      }
    `}</style>
  </div>
);

export default IndexPage;
