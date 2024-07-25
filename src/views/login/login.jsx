import React, { Component, createRef } from 'react';
import { Row, Col, Typography } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import './styles.scss';

import { Mbutton, Mcheckbox, Winput } from "../../components/BasicUI/BasicUI";
import { withRouter } from '../../utils/withRouter';
import { NavLink } from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                user: "",
                password: "",
                userError: true,
                passwordError: true,
                remember: false,
            }
        };
        this.mButtonRef = createRef();

        this.userRef = createRef();
        this.passwordRef = createRef();
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState(prevState => ({
            formData: {
                ...prevState.formData,
                [name]: value
            }
        }));
    };

    handleCheckboxChange = (value) => {
        this.setState(prevState => ({
            formData: {
                ...prevState.formData,
                remember: value
            }
        }));
    };

    handleFormSubmit = () => {
        const formData = this.state.formData;
        if (formData.userError || formData.passwordError) {
            this.userRef.current.handleCheckError()
            this.passwordRef.current.handleCheckError()
            return
        }

        if (this.mButtonRef.current) {
            this.mButtonRef.current.loading();
        }
        setTimeout(() => {
            if (this.mButtonRef.current) {
                this.mButtonRef.current.reset();
                this.props.navigate('/')
            }
        }, 2000);
    };

    renderInputField = (item, key) => {
        return (
            <Col className="form_item" key={key}>
                <Winput
                    title={item?.title}
                    value={item.value}
                    tooltip={item.tooltip}
                    onChange={(e) => this.handleInputChange(e)}
                    checkError={(error) => this.setState(prevState => ({
                        formData: {
                            ...prevState.formData,
                            [item?.name + "Error"]: error
                        }
                    }))}
                    require={item.require}
                    inputRegex={item.regex}
                    minLength={item.minLength}

                    name={item?.name}
                    type={item?.type}
                    className={`form_input_field`}
                    prefix={item?.inputIcon}
                    placeholder={item?.placeholder}
                    ref={item.ref}
                />
            </Col>
        );
    };

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
                value: formData.user,
                require: true,

                tooltip: "Email, sđt hoặc username",
                placeholder: "Email, sđt hoặc username",
                inputIcon: <MailOutlined />,
                name: "user",
                type: "text",
                ref: this.userRef
            },
            {
                title: "Nhập mật khẩu",
                value: formData.password,
                require: true,
                minLength: 6,

                tooltip: "Nhập mật khẩu",
                placeholder: "Nhập mật khẩu",
                inputIcon: <LockOutlined />,
                name: "password",
                type: "password",
                ref: this.passwordRef
            },
        ];

        return (
            <Col className='login_container'>
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
            </Col>
        );
    }
}

export default withRouter(Login);
