import React, { Component } from 'react';
import { Row, Col, Typography, Tooltip } from 'antd';
import { InfoCircleOutlined, MailOutlined, LockOutlined } from '@ant-design/icons';
import './styles.scss'

import { Mbutton, Mcheckbox, Winput } from "../../components/BasicUI"
import { withRouter } from '../../utils/withRouter';
import { NavLink } from 'react-router-dom';

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            formData: {

                taxNumber: "",
                companyName: "",
                address: "",
                businessNumber: "",
                phoneNumber: "",
                email: "",
                password: "",
                rePassword: "",
                taxNumberError: false,
                companyNameError: false,
                addressError: false,
                businessNumberError: false,
                phoneNumberError: false,
                emailError: false,
                passwordError: false,
                rePasswordError: false,
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
        // const formData = this.state.formData
        // if (
        //     !this.checkUserError(formData.user) &&
        //     !this.checkPasswordError(formData.password)
        // ) {
        //     console.log('Form Data:', {
        //         user: formData.user,
        //         password: formData.password,
        //         remember: formData.remember,
        //     });
        // this.props.navigate('/login')
        // }
        // this.setState(prevState => ({
        //     formData: {
        //         ...prevState.formData,
        //         userError: this.checkUserError(formData.user),
        //         passwordError: this.checkPasswordError(formData.password),
        //     }
        // }));
    };

    renderInputField = (item) => {
        return (
            <Col className="form_item gutter-row" span={12}>
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
            label: "Tôi đồng ý với điều khoản thỏa thuận.",
            value: formData.remember,
        };

        const inputForm = [
            {
                title: "Mã số thuế:",
                tooltip: "Nhập mã số thuế",
                placeholder: "Nhập mã số thuế",
                // inputIcon: <MailOutlined />,
                name: "taxNumber",
                type: "text",
                value: formData.taxNumber,
                error: formData.taxNumberError
            },
            {
                title: "Tên doanh nghiệp:",
                tooltip: "Nhập tên doanh nghiệp",
                placeholder: "Nhập tên doanh nghiệp",
                // inputIcon: <LockOutlined />,
                name: "companyName",
                type: "text",
                value: formData.companyName,
                error: formData.companyNameError
            },
            {
                title: "Địa chỉ:",
                tooltip: "Nhập địa chỉ",
                placeholder: "Nhập địa chỉ",
                // inputIcon: <LockOutlined />,
                name: "address",
                type: "text",
                value: formData.address,
                error: formData.addressError
            },
            {
                title: "Số đăng ký kinh doanh:",
                tooltip: "Nhập số đăng ký kinh doanh",
                placeholder: "Nhập số đăng ký kinh doanh",
                // inputIcon: <LockOutlined />,
                name: "businessNumber",
                type: "text",
                value: formData.businessNumber,
                error: formData.businessNumberError
            },
            {
                title: "Số điện thoại:",
                tooltip: "Nhập số điện thoại",
                placeholder: "Nhập số điện thoại",
                // inputIcon: <LockOutlined />,
                name: "phoneNumber",
                type: "text",
                value: formData.phoneNumber,
                error: formData.phoneNumberError
            },
            {
                title: "Mật khẩu:",
                tooltip: "Nhập mật khẩu",
                placeholder: "Nhập mật khẩu",
                // inputIcon: <LockOutlined />,
                name: "password",
                type: "password",
                value: formData.password,
                error: formData.passwordError
            },
            {
                title: "Email:",
                tooltip: "Nhập email",
                placeholder: "Nhập email",
                // inputIcon: <LockOutlined />,
                name: "email",
                type: "text",
                value: formData.email,
                error: formData.emailError
            },
            {
                title: "Nhập lại mật khẩu:",
                tooltip: "Nhập lại mật khẩu",
                placeholder: "Nhập lại mật khẩu",
                // inputIcon: <LockOutlined />,
                name: "password",
                type: "password",
                value: formData.rePassword,
                error: formData.rePasswordError
            },
        ]

        return (
            <Col className='register_container' >
                <Row className="register_content">
                    <Col
                        name="register_form"
                        layout="vertical"
                        className="register_form"
                    >
                        <Col className="form_item form_header">
                            <Typography.Title level={3} className="button_text">Đăng ký</Typography.Title>
                        </Col>
                        <Row gutter={[16]}>
                            {inputForm.map((item) => this.renderInputField(item))}
                        </Row>


                        <Col className="form_item space_margin">
                            <Mcheckbox dataSource={checkboxDataSource} onClick={() => this.handleCheckboxChange(!formData.remember)} />
                        </Col>

                        <Col className="form_item">
                            <Mbutton className='form_button' type="primary" htmlType="submit" block onClick={this.handleFormSubmit}>
                                Đăng ký
                            </Mbutton>
                        </Col>
                    </Col>
                </Row>
            </Col >
        )
    }
}

export default withRouter(Register)
