import { withRouter } from 'next/router';
import React from 'react';

import AddProductLayout from '../../components/AddProductLayout';
import PreviewImportedProductLayout from '../../components/PreviewImportedProductLayout';

class Product extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: this.props.router.query.action,
      project: this.props.router.query.project,
    };
  }

  updateStateHandler = stateObj => {
    this.setState(stateObj);
  };

  render() {
    switch (this.state.currentPage) {
      case 'add':
        return (
          <AddProductLayout
            title="Import new product"
            project={this.state.project}
            updateStateHandler={this.updateStateHandler}
          />
        );
      case 'preview':
        return <PreviewImportedProductLayout data={this.state.data} />;
      default: {
        return <div />;
      }
    }
  }
}

export default withRouter(Product);
