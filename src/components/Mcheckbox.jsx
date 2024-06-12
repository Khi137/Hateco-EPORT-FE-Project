import React from 'react';
import { Checkbox, Col } from 'antd';

class Mcheckbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props?.value || false
        };
        this.checkboxRef = React.createRef();
    }

    componentDidMount() {
        const id = this.props.id || this.props.ref || this.props.dataSource?.id || this.props.dataSource?.ref;
        if (id && this.checkboxRef.current) {
            this.checkboxRef.current.dataset.component = this;
            if (!window.component) window.component = {};
            window.component[id] = this;
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.value !== this.props.value) {
            this.setState({ value: nextProps.value });
        }
    }

    handleChange = (e) => {
        this.setState({ value: e.target.checked });
        if (this.props.onChangeValue) {
            let returnvalue = {
                key: e.target.dataset.key,
                checked: e.target.checked
            };
            this.props.onChangeValue(returnvalue, this);
        }
        if (this.props.dataSource && this.props.dataSource.onChange) {
            this.props.dataSource.onChange(e.target.checked, this);
        }
    }

    render() {
        let data = this.props.dataSource;
        let span = data?.span || 24;
        if (typeof data?.value !== 'undefined' && typeof this.props?.value === 'undefined') {
            this.props.value = data.value;
        }
        return (
            <Col
                xs={span.xs || span}
                sm={span.sm || span}
                md={span.md || span}
                lg={span.lg || span}
                style={data?.style}
                className={"m-form__box " + (data?.className || '')}
            >
                <div className="m-form__input">
                    <Checkbox
                        id={data?.ref}
                        ref={this.checkboxRef}
                        checked={this.props.dataSource?.value}
                        onChange={this.handleChange}
                        {...this.props}
                    >
                        {data?.label}
                    </Checkbox>
                </div>
            </Col>
        );
    }
}

export default Mcheckbox;
