import React from 'react';

import AddProductPage from './AddProductPage';
import Header from './Header'

export default (props) => (
  <div style={{  width: '70%', margin: '0 auto' }}>
    <Header title={`${props.title} | ${props.project}`} />
    <AddProductPage />
  </div>
)
