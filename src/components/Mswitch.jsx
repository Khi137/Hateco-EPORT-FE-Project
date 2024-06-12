import React from 'react';
import { Switch, Col } from 'antd';

class Mswitch extends React.Component {
  constructor(props) {
    super(props);
    this.switchRef = React.createRef();
    this.state = {
      value: this.props.dataSource.value || false,
    };
  }

  componentDidMount() {
    const id = this.props.id || this.props.ref || this.props.dataSource.id || this.props.dataSource.ref;
    if (this.switchRef.current) {
      this.switchRef.current.setAttribute('data-component', this);
    }
    if (!window.component) window.component = {};
    window.component[id] = this;
  }

  handleChange = (e) => {
    const value = e.target.checked;
    this.setState({ value });
    if (this.props.onChangeValue) {
      let returnvalue = {};
      returnvalue[this.props.dataSource.ref] = value;
      this.props.onChangeValue(returnvalue);
    }
  }

  render() {
    let data = this.props.dataSource;
    let span = data?.span || 24;
    return (
      <Col
        xs={span.xs || span}
        sm={span.sm || span}
        md={span.md || span}
        lg={span.lg || span}
      >
        <Switch
          {...this.props}
          ref={this.switchRef}
          checked={this.state.value}
          onChange={this.handleChange}
        />
      </Col>
    );
  }
}

export default Mswitch;
