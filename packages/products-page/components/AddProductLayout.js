import React from 'react';

import AddProductPage from './AddProductPage';
import Header from './Header'

const state = {
    currentPage: 'ProductPage',
    title: 'Air Canada 2017',
    dateFrom: 'Feb 2017',
    dateTo: 'Jul 2017'
}

export default (props) => (
  <div style={{  width: '70%', margin: '0 auto' }}>
    <Header title={`${props.title} | ${props.project}`} />
    <AddProductPage />
  </div>
)
