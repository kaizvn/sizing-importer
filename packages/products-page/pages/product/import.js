import { withRouter } from 'next/router';
import React from 'react';

import Header from '../../components/Header';
import ImportProduct from '../../components/ImportProduct';

class ImportPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      project: this.props.router.query.project,
    };
  }

  updateStateHandler = stateObj => {
    console.log('state', stateObj);
    localStorage.setItem('data', JSON.stringify(stateObj));
    this.setState(stateObj);
  };

  render() {
    return (
      <div>
        <Header title={`Import new product | ${this.state.project}`} />
        <ImportProduct
          updateStateHandler={this.updateStateHandler}
          project={this.state.project}
        />
        <style jsx>{`
          div {
            width: 70%;
            margin: 0 auto;
          }
        `}</style>
      </div>
    );
  }
}

export default withRouter(ImportPage);
