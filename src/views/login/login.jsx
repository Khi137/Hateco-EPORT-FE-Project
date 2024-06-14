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
        switch (value) {
            case "":
                return "Tên đăng nhập không được để trống"

            default:
                return false
        }
    }

    checkPasswordError = (value) => {
        switch (value) {
            case "":
                return "Mật khẩu không được để trống"

            default:
                return false
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
                    this.props.navigate('/home')
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
                    className={`form_input_field ${item?.error ? 'error_item' : ''}`}
                    prefix={item?.inputIcon}
                    placeholder={item?.placeholder}
                    value={item?.value}
                    onChange={(e) => this.handleInputChange(e, item?.regex)}
                />
                <Row className="item_bottom">{item?.error && item?.error}</Row>
            </Col>
        )
    }

    render() {
        const { formData } = this.state;

        const checkboxDataSource = {
            label: "Ghi nhớ mật khẩu",
            value: formData.remember,
            dataSource: {
                span: 12,
                value: formData.remember,
            }
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
                error: formData.userError
            },
            {
                title: "Nhập mật khẩu",
                tooltip: "Nhập mật khẩu",
                placeholder: "Nhập mật khẩu",
                inputIcon: <LockOutlined />,
                name: "password",
                type: "password",
                value: formData.password,
                error: formData.passwordError
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
                            <Mcheckbox dataSource={checkboxDataSource} onClick={() => this.handleCheckboxChange(!formData.remember)} />
                        </Col>

                        <Col className="form_item">
                            <Mbutton
                                className='form_button'
                                type="primary"
                                htmlType="submit"
                                block
                                onClick={this.handleFormSubmit}
                                ref={this.mButtonRef}
                            >
                                Đăng nhập
                            </Mbutton>
                        </Col>

                        <Row justify="space-between" className="form_item bottom_link">
                            <NavLink to="/register">Đăng ký</NavLink>
                            <NavLink to="/forgot-password" >Quên mật khẩu?</NavLink>
                        </Row>
                    </Col>
                </Row>
            </Col >
        )
    }
}

export default withRouter(Login)
