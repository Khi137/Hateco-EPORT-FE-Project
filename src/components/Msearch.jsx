import React, { Component } from 'react';
import { Col, Input } from 'antd';

class Msearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value || '',
    };
    this.searchRef = React.createRef();
  }

  componentDidMount() {
    const { id, ref, dataSource } = this.props;
    const componentId = id || ref || (dataSource && (dataSource.id || dataSource.ref));
    if (componentId) {
      window.component = { ...window.component, [componentId]: this };
      if (typeof (dataSource && dataSource.onLoaded) === 'function') {
        dataSource.onLoaded(this.state.value, this);
      }
    }
  }

  componentWillUnmount() {
    const { id, ref, dataSource } = this.props;
    const componentId = id || ref || (dataSource && (dataSource.id || dataSource.ref));
    if (componentId && window.component) {
      delete window.component[componentId];
    }
  }

  handleChange = (e) => {
    const { value } = e.target;
    const { dataSource, config, onChangeValue } = this.props;
    const newValue = (dataSource && dataSource.uppercase) ? value.toUpperCase() : (dataSource && dataSource.safeString) ? removespc(value) : value;
    this.setState({ value: newValue });
    if (config && config.onLiveSearch) {
      config.onLiveSearch(newValue);
    }
    if (onChangeValue) {
      onChangeValue({ [dataSource.ref]: newValue });
    }
  };

  handleBlur = () => {
    const { value } = this.state;
    const { onChangeValue } = this.props;
    if (!value) {
      const inputLabel = this.searchRef.current.parentElement.querySelector('.m-form__label');
      if (inputLabel) {
        inputLabel.classList.remove('m-form__label--focus');
      }
    }
    if (onChangeValue) {
      onChangeValue({ [this.props.dataSource.ref]: value });
    }
  };

  handleFocus = () => {
    const inputLabel = this.searchRef.current.parentElement.querySelector('.m-form__label');
    if (inputLabel) {
      inputLabel.classList.add('m-form__label--focus');
    }
  };

  handleKeyPress = (e) => {
    const char = e.which || e.keyCode;
    const strchar = (String.fromCharCode(char) || '').replace(checkPrSps, '');
    if (!strchar) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  render() {
    const { dataSource, config } = this.props;
    const data = config && config.icon ? config : dataSource;
    const icon = data.icon ? (
      <i className={`m-form__icon ${LOL[data.icon] ? '' : 'material-' + data.icon}`} />
    ) : (
      <i className={`m-form__icon ${LOL['AlignLeftOutlined'] ? '' : 'material-' + data.icon}`} />
    );
    const span = (data && data.span) || 24;

    return (
      <Col
        className="m-form__box"
        xs={span.xs || span}
        sm={span.sm || span}
        md={span.md || span}
        lg={span.lg || span}
        style={{ display: data.isHide === true ? 'none' : 'block' }}
      >
        <div className="m-form__input">
          <label className="m-form__label">{data.label || 'sample text...'}</label>
          <Input.Search
            ref={this.searchRef}
            value={this.state.value}
            onChange={this.handleChange}
            onBlur={this.handleBlur}
            onFocus={this.handleFocus}
            className={`inputUppercase ${data.className || ''}`}
            {...(data.safeString ? { onKeyPress: this.handleKeyPress } : {})}
            {...config}
          />
          {icon}
        </div>
      </Col>
    );
  }
}

export default Msearch;
