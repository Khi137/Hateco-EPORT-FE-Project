import React, { Component } from 'react';
import { Row, Col, Typography, Tooltip } from 'antd';
import { InfoCircleOutlined, MailOutlined, LockOutlined } from '@ant-design/icons';
import './styles.scss'

import { Winput } from "../../components/BasicUI"
import { withRouter } from '../../utils/withRouter';

class ForgotPassword extends Component {


    constructor(props) {
        super(props);
        this.state = {
            formData: {
                companyName: "",
                businessNumber: "",
                phoneNumber: "",
                email: "",
                companyNameError: false,
                businessNumberError: false,
                phoneNumberError: false,
                emailError: false,
            }
        };
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
        //     this.props.navigate('/')
        // }
        // this.setState(prevState => ({
        //     formData: {
        //         ...prevState.formData,
        //         userError: this.checkUserError(formData.user),
        //         passwordError: this.checkPasswordError(formData.password),
        //     }
        // }));
    };

    renderInputField = (item, key) => {
        return (
            <Col className="form_item " key={key}>
                <Row className="item_header">
                    <Col>{item?.title || "tên"} <span className="item_require">*</span></Col>
                    <Tooltip placement="top" title={item?.tooltip} className="item_tooltip">
                        <InfoCircleOutlined />
                    </Tooltip>
                </Row>
                <Winput
                    name={item?.name}
                    type={item?.type || "text"}
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

        const inputForm = [
            {
                title: "Tên doanh nghiệp:",
                tooltip: "Tên doanh nghiệp",
                placeholder: "Nhập tên doanh nghiệp",
                inputIcon: <MailOutlined />,
                name: "companyName",
                type: "text",
                value: formData.companyName,
                error: formData.companyNameError
            },
            {
                title: "Số đăng ký kinh doanh:",
                tooltip: "Số đăng ký kinh doanh",
                placeholder: "Nhập số đăng ký kinh doanh",
                inputIcon: <LockOutlined />,
                name: "businessNumber",
                type: "text",
                value: formData.businessNumber,
                error: formData.businessNumberError
            },
            {
                title: "Số điện thoại:",
                tooltip: "Số điện thoại",
                placeholder: "Nhập số điện thoại",
                inputIcon: <LockOutlined />,
                name: "phoneNumber",
                type: "text",
                value: formData.phoneNumber,
                error: formData.phoneNumberError
            },
            {
                title: "Email:",
                tooltip: "Nhập email đăng ký doanh nghiệp",
                placeholder: "Nhập email",
                inputIcon: <LockOutlined />,
                name: "email",
                type: "text",
                value: formData.email,
                error: formData.emailError
            },
        ]

        return (
            <Col className='forgot-password_container' >
                <Row className="forgot-password_content">
                    <Col
                        name="forgot-password_form"
                        layout="vertical"
                        className="forgot-password_form"
                    >
                        <Col className="form_item form_header">
                            <Typography.Title level={3} className="button_text">Quên mật khẩu</Typography.Title>
                        </Col>

                        {inputForm.map((item, key) => this.renderInputField(item, key))}

                        <Row justify="space-between" className="form_item bottom_link">
                            {/* <Link href="/register">Đăng ký</Link>
                            <Link href="/forgot-password">Quên mật khẩu?</Link> */}
                            {"Chọn phương thức xác nhận >>"}
                        </Row>
                    </Col>
                </Row>
            </Col >
        )
    }
}

export default withRouter(ForgotPassword)
