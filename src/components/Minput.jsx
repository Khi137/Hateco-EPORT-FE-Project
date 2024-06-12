import React from 'react';
import { Col } from 'antd';
import * as LOL from 'path/to/icons';

class Minput extends React.Component {
    constructor(props) {
        super(props);

        this.inputRef = React.createRef();
        this.state = {
            value: this.props.value || this.props.dataSource?.value || '',
            passVisible: false,
            passVisibleIcon: "EyeInvisibleOutlined",
            status: "",
            responsive: { span: 24 },
            validatevalue: false,
            isValidate: false
        }

        this.trimvalue = "";

    }

    componentDidMount() {
        const id = this.props.id || this.props.ref || this.props.dataSource.id || this.props.dataSource.ref;
        const element = document.getElementById(id);
        if (element) {
            element.dataset.component = this;
        }

        if (typeof this.props.dataSource.onLoaded === "function") {
            this.props.dataSource.onLoaded(this.state.value, this);
        }

        if (!window.component) {
            window.component = {};
        }
        window.component[id] = this;
    }

    UNSAFE_componentWillMount() {
        this.setState({
            value: (this.props?.trim ? this.props.value?.trim() : this.props.value) || (this.props?.trim ? this.props.dataSource?.value?.trim() : this.props.dataSource?.value) || ""
        });
    }

    numberWithCommas(x) {
        return x.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
    }

    handleChange(event) {
        if ((this.props.dataSource || {}).uppercase) {
            event.target.value = event.target.value.toUpperCase();
        }

        if (this.props.dataSource?.onChangeValue) {
            let continues = this.props.dataSource?.onChangeValue(event);
            if (continues !== undefined && continues === false) {
                return;
            }
        }

        if (this.props?.onChangeValue) {
            let continues = this.props?.onChangeValue({ [this.props.dataSource?.ref]: event.target.value });
            if (continues !== undefined && continues === false) {
                return;
            }
        }

        var exp;
        if ((this.props.dataSource || {}).exp) {
            exp = (this.props.dataSource || {}).exp || '';
        }

        if (typeof this.props.dataSource?.onChange === "function") {
            this.props.dataSource?.onChange(event.target.value, this);
        }

        if (this.props.dataSource?.format) {
            if (event.target.value?.length > 2 && !event.target.value?.includes("/")) {
                event.target.value = event.target.value.slice(0, 2) + "/" + event.target.value?.slice(2);
            }
        }

        if (this.props.dataSource?.trim) {
            event.target.value = event.target.value?.trim();
        }

        if (this.props.dataSource?.maxLength) {
            event.target.value = event.target.value.substring(0, this.props.dataSource?.maxLength);
        }

        if (this.props.dataSource?.inputType === "number") {
            if (this.props.dataSource.notde) {
                event.target.value = event.target.value.replace(/\-/gi, '');
            }
            if (typeof this.props.dataSource.maxNumber === "number") {
                if (parseFloat(event.target.value) > parseFloat(this.props.dataSource.maxNumber)) {
                    event.target.value = this.inputRef.current.getAttribute("value") ? this.inputRef.current.getAttribute("value") : this.props.dataSource.maxNumber;
                }
            }
            if (typeof this.props.dataSource.minNumber === "number") {
                if (parseFloat(event.target.value) < parseFloat(this.props.dataSource.minNumber)) {
                    event.target.value = this.inputRef.current.getAttribute("value") ? this.inputRef.current.getAttribute("value") : this.props.dataSource.minNumber;
                }
            }
        }

        this.setState({
            value: this.props.dataSource?.decimal ? parseInt(this.numberWithCommas(event.target.value)) : event.target.value
        });

        if ((this.props.dataSource || {}).input_type === 'ContainerNo') {
            var that = this;
            let checksps = new RegExp('[^a-zA-Z0-9]', 'g');
            var str = (event.target.value + '').normalize().replace(checksps, '');
            var str = removespc(event.target.value, exp);
            setvalthat(str, that);
        }

        if ((this.props.dataSource || {}).safeString) {
            var that = this;
            var str = removespc(event.target.value, exp);
            setvalthat(str, that);
        }
    }

    onKeyPress(e) {
        if (this.props.dataSource?.config && this.props.dataSource?.config.onKeypress) {
            this.props.dataSource?.config.onKeypress(e);
        }

        if ((this.props.dataSource || {}).safeString) {
            this.handleKeyPress(e);
        }

        if (typeof (this.props.dataSource || {}).onEnter === "function") {
            var char = e.which || e.keyCode;
            if (char === 13) {
                (this.props.dataSource || {}).onEnter(this)
            }
        }
    }

    checkBlur(e) {
        if (!e.target.value) {
            e.target.parentElement.parentElement.getElementsByTagName('label')[0].classList.remove('m-form__label--focus');
        }

        let tempvalue = e.target.value;

        if (tempvalue.length !== 0 && this.props.dataSource?.minLength && this.props.dataSource?.inputType === "number") {
            if (parseInt(e.target.value).toString().length < parseInt(this.props.dataSource?.minLength)) {
                tempvalue = parseFloat(e.target.value) * 1000;
            }
        }

        let returnvalue = {};
        returnvalue[this.props.dataSource?.ref] = tempvalue;
        this.setState({ value: tempvalue });

        if (this.props.validateValue) {
            this.setState({
                isValidate: true
            });
        }

        if (typeof (this.props.dataSource || {}).onBlur === "function") {
            (this.props.dataSource || {}).onBlur(tempvalue)
        }
    }

    checkFocus(e) {
        e.target.parentElement.parentElement.getElementsByTagName('label')[0].classList.add('m-form__label--focus');
    }

    togglePassword() {
        this.setState({
            passVisible: !this.state.passVisible
        },
            () => {
                if (this.state.passVisible) {
                    this.inputRef.current.type = "text";
                    this.setState({ passVisibleIcon: "EyeOutlined" });
                } else {
                    this.inputRef.current.type = "password";
                    this.setState({ passVisibleIcon: "EyeInvisibleOutlined" });
                }
            }
        );
    }

    responsive(value) {
        this.setState({
            responsive: value
        });
    }

    checkRequire(value) {
        let status = "";
        if (value) {
            status = "m-input-success";
        } else {
            status = "m-input-error";
        }
        this.setState({
            status: status
        });
    }

    handleKeyPress(e) {
        if ((this.props.dataSource || {}).safeString) {
            var char = e.which || e.keyCode;
            var strchar = (((String.fromCharCode(char) || '') + '').normalize()).replace(checkPrSps, "") + '';
            if (strchar === '' || char === 183) {
                e.preventDefault();
                e.stopPropagation();
            } else {
                // Do nothing
            }
        }
    }

    trimHandler(e) {
        if (this.props.dataSource?.trim) {
            this.trimvalue = e.clipboardData.getData('text/plain').trim();
        }
    }

    render() {
        let data = this.props.dataSource;
        let icon = "";
        let span = (data?.span || 24);
        let passvisible = "";

        if (data?.icon) {
            icon = React.createElement(
                LOL[data?.icon] || "i",
                { className: "m-form__icon " + (!LOL[data?.icon] ? "material-" + data?.icon : "") }
            );
        } else {
            icon = React.createElement(
                LOL["AlignLeftOutlined"] || "i",
                { className: "m-form__icon " + (!LOL[data?.icon] ? "material-" + data?.icon : "") }
            );
        }

        if (data?.inputType === "password") {
            passvisible = React.createElement(
                LOL[this.state.passVisibleIcon],
                {
                    className: "m-password-toggle",
                    onClick: this.togglePassword.bind(this),
                }
            );
        }

        const { value } = this.state;
        var readonly = (this.state?.readonly === undefined ? data?.readonly : this.state?.readonly) ? true : false;
        if (data?.followProps) {
            this.state.value = data.value;
        }

        if (data?.propReadonly) {
            this.state.readonly = data.propReadonly;
            readonly = this.state?.readonly;
        }

        return (
            <Col
                xs={span.xs || span}
                sm={span.sm || span}
                md={span.md || span}
                lg={span.lg || span}
                xl={span.xl || span}
                className="m-form__box" style={{ display: (data?.isHide === true) ? "none" : "block" }}>
                <div className={"m-form__input " + this.state.status + ' ' + (readonly ? 'readonly' : '')}>
                    <label className={(typeof this.state.value === "undefined" || this.state.value === null ? '' : this.state.value + '').length > 0 ? "m-form__label m-form__label--focus" : "m-form__label"}>{data?.label || ""}</label>
                    <span className="ant-input-search ant-input-affix-wrapper">
                        <input
                            type={data?.inputType || "text"}
                            lang={data?.inputType === 'number' ? "en-150" : undefined}
                            ref={this.inputRef} id={data?.ref || ""}
                            key={data?.ref || ""}
                            value={this.state.value || ""}
                            onChange={this.handleChange.bind(this)}
                            onBlur={this.checkBlur.bind(this)}
                            onFocus={this.checkFocus.bind(this)}
                            onKeyPress={this.onKeyPress.bind(this)}
                            onClick={data?.onClick}
                            readOnly={readonly}
                            autoComplete="off"
                            className={(data?.className || '')}
                            tabIndex={data?.tabindex || 1}
                            pattern={data?.format || ""}
                        ></input>
                        {icon}
                        {data?.clearBtn && (this.state.value || '').length > 0 ? (
                            <span className="ant-input-suffix">
                                <LOL.CloseCircleOutlined
                                    className="ant-input-search-icon"
                                    onClick={() => {
                                        if (!readonly) {
                                            this.setState({ value: '' });
                                            this.handleChange({ target: { value: '' } });
                                        }
                                        if (data.onClear && typeof data.onClear === 'function') {
                                            data.onClear();
                                            if (data?.onChange && typeof data?.onChange === 'function') {
                                                data?.onChange('');
                                            }
                                        }
                                    }}
                                />
                            </span>
                        ) : ""}
                        {data?.inputType === "search" && (
                            (this.state.value || data.value || "") ? (
                                <span className="ant-input-suffix">
                                    <LOL.CloseCircleOutlined
                                        className="ant-input-search-icon"
                                        onClick={() => {
                                            if (!readonly) {
                                                this.setState({ value: '' });
                                                this.handleChange({ target: { value: '' } });
                                            }
                                        }}
                                    />
                                </span>
                            ) : (
                                <span className="ant-input-suffix">
                                    <LOL.SearchOutlined
                                        className="ant-input-search-icon"
                                        onClick={() => {
                                            if (typeof (this.props.dataSource || {}).onEnter === "function") {
                                                (this.props.dataSource || {}).onEnter(this)
                                            }
                                        }}
                                    />
                                </span>
                            )
                        )}
                        {passvisible}
                    </span>
                </div>
            </Col>
        );
    }
}

export default Minput;
