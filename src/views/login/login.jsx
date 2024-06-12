import React, { Component } from 'react';
import { Row, Col, Typography, Tooltip } from 'antd';
import { InfoCircleOutlined, MailOutlined, LockOutlined } from '@ant-design/icons';
import './styles.scss'

import { Mbutton, Mcheckbox, Winput } from "../../components/BasicUI"
import UnAuthHeader from '../../components/UnAuthHeader/UnAuthHeader';
import Footer from '../../components/Footer/Footer';

const { Link } = Typography;
class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            formData: {
                user: "",
                password: "",
                userError: false,
                passwordError: false,
                remember: false
            }
        };
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

    checkUserError = (value) => {
        switch (value) {
            case "":
                return "Tên đăng nhập không hợp lệ"

            default:
                return false
        }
    }

    checkPasswordError = (value) => {
        switch (value) {
            case "":
                return "Mật khẩu không hợp lệ không hợp lệ"

            default:
                return false
        }
    }

    handleFormSubmit = () => {
        this.setState(prevState => ({
            formData: {
                ...prevState.formData,
                userError: this.checkUserError(this.state.formData.user),
                passwordError: this.checkPasswordError(this.state.formData.password),
            }
        }));
        console.log('Form Data:', this.state.formData);
    };

    render() {
        const { formData } = this.state;

        const checkboxDataSource = {
            span: 12,
            label: "Ghi nhớ mật khẩu",
            value: formData.remember,
        };

        return (
            <Col className='login_container' >
                <Row className='header'>
                    <UnAuthHeader />
                </Row>
                <Row className="login_content">
                    <Col
                        name="login_form"
                        layout="vertical"
                        className="login_form"
                    >
                        <Col className="form_item form_header">
                            <Typography.Title level={3} className="button_text">Đăng nhập</Typography.Title>
                        </Col>

                        <Col className="form_item ">
                            <Row className="item_header">
                                <Col>Tên đăng nhập <span className="item_require">*</span></Col>
                                <Tooltip placement="top" title={"Email, sđt hoặc username"} className="item_tooltip">
                                    <InfoCircleOutlined />
                                </Tooltip>
                            </Row>
                            <Winput
                                name="user"
                                className={`form_input_field ${formData.userError ? 'error_item' : ''}`}
                                prefix={<MailOutlined />}
                                placeholder="Email, sđt hoặc username"
                                value={formData.user}
                                onChange={this.handleInputChange}
                            />
                            <Row className="item_bottom">{formData.userError && formData.userError}</Row>
                        </Col>

                        <Col className="form_item">
                            <Row className="item_header">
                                <Col>Nhập mật khẩu <span className="item_require">*</span></Col>
                                <Tooltip placement="top" title={"Nhập mật khẩu"} className="item_tooltip">
                                    <InfoCircleOutlined />
                                </Tooltip>
                            </Row>
                            <Winput
                                name="password"
                                type="password"
                                className={`form_input_field ${formData.passwordError ? 'error_item' : ''}`}
                                prefix={<LockOutlined />}
                                placeholder="Nhập mật khẩu"
                                visibilityToggle={true}
                                onChange={this.handleInputChange}
                            />
                            <Row className="item_bottom">{formData.passwordError && formData.passwordError}</Row>
                        </Col>

                        <Col className="form_item space_margin">
                            <Mcheckbox dataSource={checkboxDataSource} onClick={() => this.handleCheckboxChange(!formData.remember)} />
                        </Col>

                        <Col className="form_item">
                            <Mbutton className='form_button' type="primary" htmlType="submit" block onClick={this.handleFormSubmit}>
                                Đăng nhập
                            </Mbutton>
                        </Col>

                        <Row justify="space-between" className="form_item bottom_link">
                            <Link href="/register">Đăng ký</Link>
                            <Link href="/forgot-password">Quên mật khẩu?</Link>
                        </Row>
                    </Col>
                </Row>
                <Row className='footer'>
                    <Footer />
                </Row>
            </Col >
        )
    }
}

export default Login
