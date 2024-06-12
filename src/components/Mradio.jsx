import React from 'react';
import { Col, Radio } from 'antd';

class Mradio extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: this.props.dataSource?.value || '',
            readonly: false 
        }

        this.radioGroupRef = React.createRef();
    }

    componentDidMount() {
        const refKey = this.props.id || this.props.dataSource?.id || this.props.dataSource?.ref;
        if (this.radioGroupRef.current) {
            this.radioGroupRef.current.dataset.component = this;
        }
        if (!window.component) window.component = {};
        window.component[refKey] = this;
    }

    handleChange(e) {
        this.setState({
            value: e.target?.value
        });

        let returnvalue = {};
        returnvalue[this.props.dataSource.ref] = e.target?.value;

        if (this.props.onChangeValue) {
            this.props.onChangeValue(returnvalue);
        }
        if (typeof this.props.onChanged == "function") {
            this.props.onChanged(e.target?.value);
        }

        if (this.props.config && this.props.config.returnValue) {
            this.props.config.returnValue(e.target?.value);
        }

        if (this.props.switchContent) {
            let contentref = e.target?.value;
            this.props.switchContent(contentref);
        }
    }

    render() {
        let data = this.props.dataSource;
        let colStyle = data?.colStyle;
        let radioStyle = data?.radioStyle || {};
        let span = data?.span || 24;
        return (
            <Col
                xs={span.xs || span}
                sm={span.sm || span}
                md={span.md || span}
                lg={span.lg || span}
                style={colStyle}
            >
                <Radio.Group
                    style={radioStyle}
                    ref={this.radioGroupRef}
                    key={data?.ref || ""}
                    name={data?.name}
                    defaultValue={data?.defaultValue || ''}
                    value={this.state?.value || data?.value || data?.defaultValue || ''}
                    className={(this.props.dataSource || {}).className + " " + (this.state.readonly ? 'readonly' : '')}
                    options={data?.options}
                    disabled={this.state.readonly ? true : false}
                    onChange={this.handleChange.bind(this)}
                >
                </Radio.Group>
            </Col>
        );
    }
}

export default Mradio;
