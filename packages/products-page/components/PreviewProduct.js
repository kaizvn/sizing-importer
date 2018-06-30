import React from 'react';

import { DIMENSIONS } from '../utils/mocks';
import DimensionList from './DimensionList';

const DisplayInfo = props => (
  <div>
    <div className="info-value">{props.name}</div>
    <div className="info-label">{props.label}</div>
    <span onClick={props.clickHandler}>edit</span>
    <style jsx>{`
      div.info {
        width: 17%;
        display: inline-block;
      }
      .info-label {
        opacity: 0.5;
      }
    `}</style>
  </div>
);

class EditInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
    };
  }

  onInputChange = e => {
    const value = e.currentTarget.value;
    this.setState({ value });
  };

  onEditClick = () => {
    this.props.onSubmit(this.state.value);
  };

  onKeyPress = e => {
    if (e.key === 'Enter') {
      this.onEditClick();
    }
  };

  onCancelClick = () => {
    this.props.onCancel();
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.value}
          onChange={this.onInputChange}
          onKeyPress={this.onKeyPress}
        />
        <span onClick={this.onEditClick}>edit</span>{' '}
        <span onClick={this.onCancelClick}>x</span>
      </div>
    );
  }
}

class TopInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false,
    };
  }

  toggleEditInfo = () => {
    this.setState({ isEdit: !this.state.isEdit });
  };
  open() {
    this.setState({ isEdit: true });
  }
  updateHanlder = value => {
    const field = this.props.field;
    if (this.state.isEdit && value && value != this.props.name) {
      this.props.editInfoHandler(value, field);
    }

    this.toggleEditInfo();
  };
  render() {
    const props = this.props;

    return (
      <div className="info">
        {!this.state.isEdit && (
          <DisplayInfo
            name={props.name}
            label={props.label}
            clickHandler={this.toggleEditInfo}
          />
        )}
        {this.state.isEdit && (
          <EditInfo
            value={props.name}
            onSubmit={this.updateHanlder}
            onCancel={this.toggleEditInfo}
          />
        )}
        <style jsx>{`
          div.info {
            width: 17%;
            display: inline-block;
          }
          .info-label {
            opacity: 0.5;
          }
        `}</style>
      </div>
    );
  }
}

class PreviewProduct extends React.Component {
  constructor() {
    super();
    this.state = DIMENSIONS;
    this.editInfo = this.editInfo.bind(this);
  }

  editInfo(value, field) {
    console.log('edit click', value, field);
    this.setState({ [`${field}`]: value });
  }
  render() {
    const data = this.state;
    return (
      <div>
        <div style={{ width: '100%' }}>
          <div style={{ width: '75%' }}>
            <div className="title">fill file name here</div>
            <TopInfo
              label="Code"
              name={data.code}
              field={'code'}
              editInfoHandler={this.editInfo}
            />
            <TopInfo
              label="Base size"
              name={data.base_size.join(' x ')}
              field={'base_size'}
              editInfoHandler={this.editInfo}
            />
            <TopInfo
              label="Category"
              name={data.category}
              field={'category'}
              editInfoHandler={this.editInfo}
            />
            <TopInfo
              label="Gender"
              name={data.gender}
              field={'gender'}
              editInfoHandler={this.editInfo}
            />
          </div>
          <div style={{ width: '24%' }}>
            <button>
              <span>Look goods</span>
            </button>
          </div>
          <style jsx>{`
            div {
              display: inline-block;
            }
            .title {
              width: 30%;
            }
          `}</style>
        </div>
        <div>
          <div>tab</div>
          <DimensionList data={data.dimensions} />
        </div>
      </div>
    );
  }
}

export default PreviewProduct;
