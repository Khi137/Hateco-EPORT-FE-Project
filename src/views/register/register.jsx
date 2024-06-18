import React, { Component, createRef } from 'react';
import { Row, Col, Typography, Tooltip, Modal, message } from 'antd';
import { InfoCircleOutlined, MailOutlined, LockOutlined, NumberOutlined, PhoneOutlined, EnvironmentOutlined, BoldOutlined } from '@ant-design/icons';
import './styles.scss'

import { Mbutton, Mcheckbox, Mdropdown, Winput } from "../../components/BasicUI"
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
                service: "",
                termsAgreed: false,

                taxNumberError: false,
                companyNameError: false,
                addressError: false,
                businessNumberError: false,
                phoneNumberError: false,
                emailError: false,
                passwordError: false,
                rePasswordError: false,
            },
            termsAgreedModal: false
        };
        this.mButtonRef = createRef();
        this.dropdownRef = createRef();
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
                termsAgreed: value
            }
        }));
    };

    handleChange = (event) => {
        this.setState({ service: event.target.textContent });
    };

    checkTaxNumberError = (value) => {
        switch (value) {
            case "":
                return "Mã số thuế không được để trống"

            default:
                return false
        }
    }

    checkCompanyNameError = (value) => {
        switch (value) {
            case "":
                return "Tên doanh nghiệp không được để trống"

            default:
                return false
        }
    }

    checkAddressError = (value) => {
        switch (value) {
            case "":
                return "Địa chỉ không được để trống"

            default:
                return false
        }
    }

    checkBusinessNumberError = (value) => {
        switch (value) {
            case "":
                return "Số đăng ký kinh doanh không được để trống"

            default:
                return false
        }
    }

    checkPhoneNumberError = (value) => {
        switch (value) {
            case "":
                return "Số điện thoại không được để trống"

            default:
                return false
        }
    }

    checkEmailError = (value) => {
        const mailRegex = /^([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4})$/
        switch (true) {
            case (value === ""):
                return "Email không được để trống"
            case (!mailRegex?.test(value)):
                return "Email không đúng định dạng"

            default:
                return false
        }
    }

    checkPasswordError = (value) => {
        switch (true) {
            case (value === ""):
                return "Mật khẩu không được để trống"
            case (value.length < 6):
                return "Mật khẩu ít nhất có 6 ký tự";
            default:
                return false
        }
    }

    checkRePasswordError = (value) => {
        switch (true) {
            case (value === ""):
                return "Mật khẩu không được để trống"
            case (value !== this.state.formData.password):
                return "Mật khẩu nhập lại phải trùng khớp"
            case (value.length < 6):
                return "Mật khẩu ít nhất có 6 ký tự";

            default:
                return false
        }
    }

    // taxNumber: "",
    // companyName: "",
    // address: "",
    // businessNumber: "",
    // phoneNumber: "",
    // email: "",
    // password: "",
    // rePassword: "",

    handleFormSubmit = () => {
        const formData = this.state.formData
        if (
            !this.checkTaxNumberError(formData.taxNumber) &&
            !this.checkCompanyNameError(formData.companyName) &&
            !this.checkAddressError(formData.address) &&
            !this.checkBusinessNumberError(formData.businessNumber) &&
            !this.checkPhoneNumberError(formData.phoneNumber) &&
            !this.checkEmailError(formData.email) &&
            !this.checkPasswordError(formData.password) &&
            !this.checkRePasswordError(formData.rePassword)
            // true
        ) {
            if (this.mButtonRef.current) {
                this.mButtonRef.current.loading();
            }

            console.log('Form Data:', {
                taxNumber: formData.taxNumber,
                companyName: formData.companyName,
                address: formData.address,
                businessNumber: formData.businessNumber,
                phoneNumber: formData.phoneNumber,
                email: formData.email,
                password: formData.password,
                rePassword: formData.rePassword,
                termsAgreed: formData.termsAgreed,
            });

            setTimeout(() => {
                if (this.mButtonRef.current) {
                    message.success("Đăng ký thành công")
                    this.mButtonRef.current.reset();
                    this.props.navigate('/login')
                }
            }, 2000);

        }
        this.setState(prevState => ({
            formData: {
                ...prevState.formData,
                taxNumberError: this.checkTaxNumberError(formData.taxNumber),
                companyNameError: this.checkCompanyNameError(formData.companyName),
                addressError: this.checkAddressError(formData.address),
                businessNumberError: this.checkBusinessNumberError(formData.businessNumber),
                phoneNumberError: this.checkPhoneNumberError(formData.phoneNumber),
                emailError: this.checkEmailError(formData.email),
                passwordError: this.checkPasswordError(formData.password),
                rePasswordError: this.checkRePasswordError(formData.rePassword),
            }
        }));
    };

    renderInputField = (item, key) => {
        return (
            <Col className="form_item gutter-row responsive-col" key={key}>
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
                    defaultValue={item?.value}
                    onChange={(e) => this.handleInputChange(e, item?.regex)}
                    errorText={item?.error && item?.error}
                />
            </Col>
        )
    }

    hanldeSetVisibleTermsagreeModal = (value) => {
        this.setState(prevState => ({
            formData: {
                ...prevState.formData,
            },
            termsAgreedModal: value
        }));
    }

    render() {
        const { formData } = this.state;

        const checkboxDataSource = {
            span: 12,
            label: <div><p style={{ userSelect: "none" }}>Tôi đồng ý với <span onClick={() => this.hanldeSetVisibleTermsagreeModal(true)} className='terms_agreed' >điều khoản thỏa thuận</span></p></div>,
            value: formData.termsAgreed,
            className: `${formData.termsAgreed && "m-checkbox_checked"}`,
        };

        const inputForm = [
            {
                title: "Mã số thuế:",
                tooltip: "Nhập mã số thuế có khoảng 10 đến 13 số vd: 0101234567-001",
                placeholder: "Nhập mã số thuế",
                inputIcon: <NumberOutlined />,
                name: "taxNumber",
                type: "text",
                value: formData.taxNumber,
                error: formData.taxNumberError
            },
            {
                title: "Tên doanh nghiệp:",
                tooltip: "Nhập tên doanh nghiệp của bạn/tổ chức",
                placeholder: "Nhập tên doanh nghiệp",
                inputIcon: <BoldOutlined />,
                name: "companyName",
                type: "text",
                value: formData.companyName,
                error: formData.companyNameError
            },
            {
                title: "Địa chỉ:",
                tooltip: "Nhập địa chỉ",
                placeholder: "Nhập địa chỉ",
                inputIcon: <EnvironmentOutlined />,
                name: "address",
                type: "text",
                value: formData.address,
                error: formData.addressError
            },
            {
                title: "Số đăng ký kinh doanh:",
                tooltip: "Số đăng ký kinh doanh có khoảng 10 đến 13 số vd: 0101234567890",
                placeholder: "Nhập số đăng ký kinh doanh",
                inputIcon: <NumberOutlined />,
                name: "businessNumber",
                type: "text",
                value: formData.businessNumber,
                error: formData.businessNumberError
            },
            {
                title: "Số điện thoại:",
                tooltip: "Nhập số điện thoại",
                placeholder: "Nhập số điện thoại",
                inputIcon: <PhoneOutlined />,
                name: "phoneNumber",
                type: "text",
                value: formData.phoneNumber,
                error: formData.phoneNumberError,
                regex: /^[0-9\-\+]{0,15}$/
            },

            {
                title: "Email:",
                tooltip: "Nhập email theo format mail@example.com",
                placeholder: "Nhập email",
                inputIcon: <MailOutlined />,
                name: "email",
                type: "text",
                value: formData.email,
                error: formData.emailError,
                // regex: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
            },
            {
                title: "Mật khẩu:",
                tooltip: "Nhập mật khẩu",
                placeholder: "Nhập mật khẩu phải nhiều hơn 6 ký tự",
                inputIcon: <LockOutlined />,
                name: "password",
                type: "password",
                value: formData.password,
                error: formData.passwordError
            },
            {
                title: "Nhập lại mật khẩu:",
                tooltip: "Nhập lại mật khẩu phải tùng với mật khẩu đã nhập",
                placeholder: "Nhập lại mật khẩu",
                inputIcon: <LockOutlined />,
                name: "rePassword",
                type: "password",
                value: formData.rePassword,
                error: formData.rePasswordError
            },
        ]
        const items = ['Option 1', 'Option 2', 'Option 3'];
        return (
            <>
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
                            <Row>
                                {inputForm.map((item, key) => this.renderInputField(item, key))}
                                <Col className="form_item gutter-row responsive-col">
                                    <Row className="item_header">
                                        <Col>Dịch vụ (có thể chọn nhiều dịch vụ): <span className="item_require">*</span></Col>
                                        <Tooltip placement="top" title={"Dịch vụ"} className="item_tooltip">
                                            <InfoCircleOutlined />
                                        </Tooltip>
                                    </Row>
                                    {/* <Mdropdown
                                    dataSource={{
                                        id: 'myDropdown',
                                        options: items
                                    }}
                                    id={'myDropdown'}
                                    items={items}
                                    onChange={this.handleChange}
                                    ref={this.dropdownRef}
                                >
                                    {this.state.selectedValue || 'Select an option'}
                                </Mdropdown> */}
                                    {/* <Row className="item_bottom">{item?.error && item?.error}</Row> */}
                                </Col>

                            </Row>


                            <Col className="form_item space_margin">
                                <Mcheckbox dataSource={checkboxDataSource} onClick={() => this.handleCheckboxChange(!formData.termsAgreed)} />
                            </Col>

                            <Col className="form_item">
                                <Mbutton
                                    className={`form_button ${!formData.termsAgreed && "disable_button"}`}
                                    type="primary"
                                    htmlType="submit"
                                    block
                                    onClick={this.handleFormSubmit}
                                    ref={this.mButtonRef}
                                >
                                    Đăng ký
                                </Mbutton>
                            </Col>
                            <Row justify="space-between" className="form_item bottom_link">
                                <NavLink to="/forgot-password" ></NavLink>
                                <NavLink to="/login">{"Đăng nhập >>"}</NavLink>
                            </Row>
                        </Col>
                    </Row >
                </Col >
                <Modal
                    title="Điều Kiện thoả thuận"
                    open={this.state.termsAgreedModal}
                    onClose={() => this.hanldeSetVisibleTermsagreeModal(false)}
                    onOk={() => this.hanldeSetVisibleTermsagreeModal(false)}
                    onCancel={() => this.hanldeSetVisibleTermsagreeModal(false)}
                    footer={[]}
                    centered={true}
                    classNames={"register_terms_agree_modal"}
                >
                    <Col className="form_item form_header">
                        <Typography.Title level={5} className="button_text">Điều Kiện 1</Typography.Title>
                    </Col>
                    <Col>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore provident, autem illum voluptatem neque officia, labore reprehenderit quo consequuntur, quos eaque porro obcaecati? Deserunt rem libero fuga velit, omnis asperiores.</Col>
                    <Col className="form_item form_header">
                        <Typography.Title level={5} className="button_text">Điều Kiện 1</Typography.Title>
                    </Col>
                    <Col>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore provident, autem illum voluptatem neque officia, labore reprehenderit quo consequuntur, quos eaque porro obcaecati? Deserunt rem libero fuga velit, omnis asperiores.</Col>
                    <Col className="form_item form_header">
                        <Typography.Title level={5} className="button_text">Điều Kiện 1</Typography.Title>
                    </Col>
                    <Col>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore provident, autem illum voluptatem neque officia, labore reprehenderit quo consequuntur, quos eaque porro obcaecati? Deserunt rem libero fuga velit, omnis asperiores.</Col>
                    <Col className="form_item form_header">
                        <Typography.Title level={5} className="button_text">Điều Kiện 1</Typography.Title>
                    </Col>
                    <Col>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore provident, autem illum voluptatem neque officia, labore reprehenderit quo consequuntur, quos eaque porro obcaecati? Deserunt rem libero fuga velit, omnis asperiores.</Col>
                    <Col className="form_item form_header">
                        <Typography.Title level={5} className="button_text">Điều Kiện 1</Typography.Title>
                    </Col>
                    <Col>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore provident, autem illum voluptatem neque officia, labore reprehenderit quo consequuntur, quos eaque porro obcaecati? Deserunt rem libero fuga velit, omnis asperiores.</Col>
                    <Col className="form_item form_header">
                        <Typography.Title level={5} className="button_text">Điều Kiện 1</Typography.Title>
                    </Col>
                    <Col>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore provident, autem illum voluptatem neque officia, labore reprehenderit quo consequuntur, quos eaque porro obcaecati? Deserunt rem libero fuga velit, omnis asperiores.</Col>
                </Modal>
            </>

        )
    }
}

export default withRouter(Register)
