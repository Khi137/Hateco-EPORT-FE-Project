import React, { Component, createRef } from 'react';
import { Row, Col, Typography, Tooltip } from 'antd';
import { InfoCircleOutlined, MailOutlined, LockOutlined } from '@ant-design/icons';
import './styles.scss'

import { Mbutton, Mcheckbox, Winput } from "../../components/BasicUI"
import { withRouter } from '../../utils/withRouter';
import { NavLink } from 'react-router-dom';

class Login extends Component {


    constructor(props) {
        super(props);
        this.state = {
            formData: {
                user: "",
                password: "",
                userError: false,
                passwordError: false,
                remember: false,
            }
        };
        this.mButtonRef = createRef();
    }

    handleInputChange = (e, regex) => {
        const { name, value } = e.target;

        if (value === "") {
            this.setState(prevState => ({
                formData: {
                    ...prevState.formData,
                    [name]: value
                }
            }));
            return value
        }

        if (regex && !regex.test(value)) {
            console.error(`Value does not match the regex: ${regex}`);
            return
        } else {
            this.setState(prevState => ({
                formData: {
                    ...prevState.formData,
                    [name]: value
                }
            }));
        }
        return value
    };

    handleCheckboxChange = (value) => {
        this.setState(prevState => ({
            formData: {
                ...prevState.formData,
                remember: value
            }
        }));
    };

    checkUserError = (value) => {
        switch (true) {
            case (value === ""):
                return "Tên đăng nhập không được để trống"

            default:
                return false
        }
    }

    checkPasswordError = (value) => {
        switch (true) {
            case (value === ""):
                return "Mật khẩu không được để trống";
            case (value.length < 6):
                return "Mật khẩu ít nhất có 6 ký tự";
            default:
                return false;
        }
    }

    handleFormSubmit = () => {
        const formData = this.state.formData
        if (
            !this.checkUserError(formData.user) &&
            !this.checkPasswordError(formData.password)
        ) {
            console.log('Form Data:', {
                user: formData.user,
                password: formData.password,
                remember: formData.remember,
            });
            if (this.mButtonRef.current) {
                this.mButtonRef.current.loading();
            }
            setTimeout(() => {
                if (this.mButtonRef.current) {
                    this.mButtonRef.current.reset();
                    this.props.navigate('/')
                }
            }, 2000);
        }
        this.setState(prevState => ({
            formData: {
                ...prevState.formData,
                userError: this.checkUserError(formData.user),
                passwordError: this.checkPasswordError(formData.password),
            }
        }));
    };

    handleOnblurCheck = (field, checkfunction) => {
        this.setState(prevState => ({
            formData: {
                ...prevState.formData,
                [field]: checkfunction ? checkfunction() : false
            }
        }));
    };

    renderInputField = (item, key) => {
        return (
            <Col className="form_item " key={key}>
                <Row className="item_header">
                    <Col>{item?.title} <span className="item_require">*</span></Col>
                    <Tooltip placement="top" title={item?.tooltip} className="item_tooltip">
                        <InfoCircleOutlined />
                    </Tooltip>
                </Row>
                <Winput
                    name={item?.name}
                    type={item?.type}
                    className={`form_input_field ${item?.error ? 'error_input' : ''}`}
                    prefix={item?.inputIcon}
                    placeholder={item?.placeholder}
                    value={item?.value}
                    onChange={(e) => this.handleInputChange(e, item?.regex)}
                    errorText={item?.error && item?.error}
                    onBlur={(e) => this.handleOnblurCheck(item?.name + "Error", item?.checkFunction)}
                />
            </Col>
        )
    }

    render() {
        const { formData } = this.state;

        const checkboxDataSource = {
            label: <div style={{ userSelect: "none" }}>Ghi nhớ mật khẩu</div>,
            value: formData.remember,
            className: `${formData.remember && "m-checkbox_checked"}`,
        };

        const inputForm = [
            {
                title: "Tên đăng nhập",
                tooltip: "Email, sđt hoặc username",
                placeholder: "Email, sđt hoặc username",
                inputIcon: <MailOutlined />,
                name: "user",
                type: "text",
                value: formData.user,
                error: formData.userError,
                checkFunction: () => this.checkUserError(formData.user)
            },
            {
                title: "Nhập mật khẩu",
                tooltip: "Nhập mật khẩu",
                placeholder: "Nhập mật khẩu",
                inputIcon: <LockOutlined />,
                name: "password",
                type: "password",
                value: formData.password,
                error: formData.passwordError,
                checkFunction: () => this.checkPasswordError(formData.password)
            },
        ]

        return (
            <Col className='login_container' >
                <Row className="login_content">
                    <Col
                        name="login_form"
                        layout="vertical"
                        className="login_form"
                    >
                        <Col className="form_item form_header">
                            <Typography.Title level={3} className="button_text">Đăng nhập</Typography.Title>
                        </Col>

                        {inputForm.map((item, key) => this.renderInputField(item, key))}

                        <Col className="form_item space_margin">
                            <Mcheckbox onChangeValue={(returnValue) => this.handleCheckboxChange(returnValue?.checked)} dataSource={checkboxDataSource} />
                        </Col>

                        <Col className="form_item">
                            <Mbutton
                                className='form_button m_button third'
                                type="primary"
                                htmlType="submit"
                                block
                                onClick={this.handleFormSubmit}
                                ref={this.mButtonRef}
                                dataSource={{ textbutton: "Đăng nhập" }}
                            >
                                Đăng nhập
                            </Mbutton>
                        </Col>

                        <Row justify="space-between" className="form_item bottom_link">
                            <NavLink to="/forgot-password" ></NavLink>
                            <NavLink to="/register">{"Đăng ký >>"}</NavLink>
                        </Row>
                    </Col>
                </Row>
            </Col >
        )
    }
}

export default withRouter(Login)
