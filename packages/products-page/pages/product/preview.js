import { withRouter } from 'next/router';
import React from 'react';

import Header from '../../components/Header';
import PreviewProduct from '../../components/PreviewProduct';

const PreviewPage = props => {
  const data = {};
  return (
    <div>
      <Header title={`Import new product | ${props.router.query.project}`} />
      <PreviewProduct data={data} />
      <style jsx>{`
        div {
          width: 70%;
          margin: 0 auto;
        }
      `}</style>
    </div>
  );
};

export default withRouter(PreviewPage);
