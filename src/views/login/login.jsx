import React, { Component } from 'react';
import { Row, Col, Typography, Tooltip } from 'antd';
import { InfoCircleOutlined, MailOutlined, LockOutlined } from '@ant-design/icons';
import './styles.scss'

import { Mbutton, Mcheckbox, Winput } from "../../components/BasicUI"
import { withRouter } from '../../utils/withRouter';

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
        if (
            !this.checkUserError(this.state.formData.user) &&
            !this.checkPasswordError(this.state.formData.password)
        ) {
            console.log('Form Data:', this.state.formData);
            this.props.navigate('/home')
        }
        this.setState(prevState => ({
            formData: {
                ...prevState.formData,
                userError: this.checkUserError(this.state.formData.user),
                passwordError: this.checkPasswordError(this.state.formData.password),
            }
        }));
    };

    renderInputField = (item) => {
        return (
            <Col className="form_item ">
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
                    onChange={this.handleInputChange}
                />
                <Row className="item_bottom">{item?.error && item?.error}</Row>
            </Col>
        )
    }

    render() {
        const { formData } = this.state;

        const checkboxDataSource = {
            span: 12,
            label: "Ghi nhớ mật khẩu",
            value: formData.remember,
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

                        {inputForm.map((item) => this.renderInputField(item))}

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
            </Col >
        )
    }
}

export default withRouter(Login)
