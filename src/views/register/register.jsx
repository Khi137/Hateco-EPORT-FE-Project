import React, { Component, createRef } from 'react';
import { Row, Col, Typography, Tooltip, Modal, message, Select } from 'antd';
import { InfoCircleOutlined, MailOutlined, LockOutlined, NumberOutlined, PhoneOutlined, EnvironmentOutlined, BoldOutlined, DownOutlined, BarcodeOutlined } from '@ant-design/icons';
import './styles.scss'

import { Mbutton, Mcapcha, Mcheckbox, Winput } from "../../components/BasicUI/BasicUI"
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
                selectedService: [],
                termsAgreed: false,
                captchaVerify: false,

                taxNumberError: false,
                companyNameError: false,
                addressError: false,
                businessNumberError: false,
                phoneNumberError: false,
                emailError: false,
                passwordError: false,
                rePasswordError: false,
                selectedServiceError: false
            },
            termsAgreedModal: false
        };
        this.mButtonRef = createRef();
        this.dropdownRef = createRef();

        this.taxNumberRef = createRef();
        this.companyNameRef = createRef();
        this.addressRef = createRef();
        this.businessNumberRef = createRef();
        this.phoneNumberRef = createRef();
        this.emailRef = createRef();
        this.passwordRef = createRef();
        this.rePasswordRef = createRef();
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

    handleSelectService = (value) => {
        this.setState(prevState => ({
            formData: {
                ...prevState.formData,
                selectedService: value
            }
        }));
    };

    handleVerifyCaptcha = (value) => {
        this.setState(prevState => ({
            formData: {
                ...prevState.formData,
                captchaVerify: value
            }
        }));
    };

    checkSelectedServiceError = (value) => {
        switch (true) {
            case (value.length === 0):
                return "Vui lòng chọn dịch vụ"

            default:
                return false
        }
    }

    handleCaptchaVerify = (isVerified) => {
        this.setState({
            isCaptchaVerified: isVerified,
        });
    };

    handleFormSubmit = () => {
        const formData = this.state.formData
        if (
            formData.taxNumberError ||
            formData.companyNameError ||
            formData.addressError ||
            formData.businessNumberError ||
            formData.phoneNumberError ||
            formData.emailError ||
            formData.passwordError ||
            formData.rePasswordError ||
            this.checkSelectedServiceError(formData.selectedService)
        ) {
            this.taxNumberRef.current.handleCheckError()
            this.companyNameRef.current.handleCheckError()
            this.addressRef.current.handleCheckError()
            this.businessNumberRef.current.handleCheckError()
            this.phoneNumberRef.current.handleCheckError()
            this.emailRef.current.handleCheckError()
            this.passwordRef.current.handleCheckError()
            this.rePasswordRef.current.handleCheckError()

            this.setState(prevState => ({
                formData: {
                    ...prevState.formData,
                    selectedServiceError: this.checkSelectedServiceError(formData.selectedService)
                }
            }));

            return
        }

        if (formData.password !== formData.rePassword) {
            this.rePasswordRef.current.handleSetError("Mật khẩu không khớp")
            return
        }

        if (
            !this.checkSelectedServiceError(formData.selectedService) &&
            this.state.isCaptchaVerified
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
                selectedService: formData.selectedService
            });

            setTimeout(() => {
                if (this.mButtonRef.current) {
                    message.success("Đăng ký thành công")
                    this.mButtonRef.current.reset();
                    this.props.navigate('/login')
                }
            }, 2000);

        } else {
            !this.state.isCaptchaVerified && message.error("Chưa xác nhận CAPTCHA")
        }
    };

    renderInputField = (item, key) => {
        return (
            <Col className="form_item gutter-row responsive-col" key={key}>
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
                    inputRegex={item.inputRegex}
                    submitRegex={item.submitRegex}
                    minLength={item.minLength}

                    name={item?.name}
                    type={item?.type}
                    className={`form_input_field`}
                    prefix={item?.inputIcon}
                    placeholder={item?.placeholder}
                    ref={item.ref}
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
                title: "Mã số thuế",
                value: formData.taxNumber,
                require: true,

                tooltip: "Nhập mã số thuế có khoảng 10 đến 13 số vd: 0101234567-001",
                placeholder: "Nhập mã số thuế",
                inputIcon: <NumberOutlined />,
                name: "taxNumber",
                type: "text",
                ref: this.taxNumberRef
            },
            {
                title: "Tên doanh nghiệp",
                value: formData.companyName,
                require: true,

                tooltip: "Nhập tên doanh nghiệp của bạn/tổ chức",
                placeholder: "Nhập tên doanh nghiệp",
                inputIcon: <BoldOutlined />,
                name: "companyName",
                type: "text",
                ref: this.companyNameRef
            },
            {
                title: "Địa chỉ",
                value: formData.address,
                require: true,

                tooltip: "Nhập địa chỉ",
                placeholder: "Nhập địa chỉ",
                inputIcon: <EnvironmentOutlined />,
                name: "address",
                type: "text",
                ref: this.addressRef
            },
            {
                title: "Số đăng ký kinh doanh",
                value: formData.businessNumber,
                require: true,

                tooltip: "Số đăng ký kinh doanh có khoảng 10 đến 13 số vd: 0101234567890",
                placeholder: "Nhập số đăng ký kinh doanh",
                inputIcon: <BarcodeOutlined />,
                name: "businessNumber",
                type: "text",
                ref: this.businessNumberRef
            },
            {
                title: "Số điện thoại",
                value: formData.phoneNumber,
                inputRegex: /^[0-9\-\+]{0,15}$/,
                require: true,

                tooltip: "Nhập số điện thoại",
                placeholder: "Nhập số điện thoại",
                inputIcon: <PhoneOutlined />,
                name: "phoneNumber",
                type: "text",
                ref: this.phoneNumberRef
            },

            {
                title: "Email",
                value: formData.email,
                require: true,
                submitRegex: /^([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4})$/,

                tooltip: "Nhập email theo format mail@example.com",
                placeholder: "Nhập email",
                inputIcon: <MailOutlined />,
                name: "email",
                type: "text",
                ref: this.emailRef
            },
            {
                title: "Mật khẩu",
                value: formData.password,
                require: true,
                minLength: 6,

                tooltip: "Nhập mật khẩu",
                placeholder: "Nhập mật khẩu phải nhiều hơn 6 ký tự",
                inputIcon: <LockOutlined />,
                name: "password",
                type: "password",
                ref: this.passwordRef
            },
            {
                title: "Nhập lại mật khẩu",
                value: formData.rePassword,
                require: true,

                tooltip: "Nhập lại mật khẩu phải tùng với mật khẩu đã nhập",
                placeholder: "Nhập lại mật khẩu",
                inputIcon: <LockOutlined />,
                name: "rePassword",
                type: "password",
                ref: this.rePasswordRef
            },
        ]
        const options = [
            { value: 'option1', label: 'Lựa chọn 1' },
            { value: 'option2', label: 'Lựa chọn 2' },
            { value: 'option3', label: 'Lựa chọn 3' },
            { value: 'option4', label: 'Lựa chọn 4' },
            { value: 'option5', label: 'Lựa chọn 5' },
            { value: 'option6', label: 'Lựa chọn 6' },
            { value: 'option8', label: 'Lựa chọn 7' },
        ];
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
                                    <Select
                                        mode="multiple"
                                        options={options}
                                        placeholder="Chọn dich vụ"
                                        onChange={this.handleSelectService}
                                        className='form_item gutter-row responsive-col select_services'
                                        dataSource={options}
                                        suffixIcon={<DownOutlined />}
                                    />
                                    <Row className="error_text">{formData.selectedServiceError && formData.selectedServiceError}</Row>
                                </Col>
                                <Col className="form_item gutter-row responsive-col">
                                    <Mcapcha
                                        onVerify={this.handleCaptchaVerify}
                                    />
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
                                    dataSource={{ textbutton: "Đăng ký" }}
                                >
                                    Đăng ký
                                </Mbutton>
                            </Col>
                            <Row justify="space-between" className="form_item bottom_link">
                                <NavLink to="/login">{"<< Đăng nhập"}</NavLink>
                                <NavLink to="/forgot-password" ></NavLink>
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
                        <Typography.Title level={5} className="button_text">Điều Kiện 2</Typography.Title>
                    </Col>
                    <Col>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum inventore ad odio vitae! Quisquam nesciunt repellendus a iure, saepe vero incidunt repellat ipsum non architecto minima quos facilis qui accusantium?</Col>
                    <Col className="form_item form_header">
                        <Typography.Title level={5} className="button_text">Điều Kiện 3</Typography.Title>
                    </Col>
                    <Col>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptatem amet sed, hic velit, accusamus perspiciatis recusandae reprehenderit, tempora deserunt a saepe aut fuga omnis molestias repellat veniam minima ab.</Col>
                    <Col className="form_item form_header">
                        <Typography.Title level={5} className="button_text">Điều Kiện 4</Typography.Title>
                    </Col>
                    <Col>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam delectus minus quibusdam. Earum id hic et, quos cum, blanditiis sapiente, neque nisi vero obcaecati eligendi minus eveniet minima ea nemo.</Col>
                    <Col className="form_item form_header">
                        <Typography.Title level={5} className="button_text">Điều Kiện 5</Typography.Title>
                    </Col>
                    <Col>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos deserunt similique corrupti possimus, iste laborum nostrum, modi ut, distinctio animi velit eveniet debitis asperiores sequi maxime? Mollitia veritatis ad rerum?</Col>
                    <Col className="form_item form_header">
                        <Typography.Title level={5} className="button_text">Điều Kiện 6</Typography.Title>
                    </Col>
                    <Col>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium ut necessitatibus pariatur sapiente, perspiciatis dolore doloremque ipsa sit architecto suscipit doloribus ducimus id autem, iusto aliquid obcaecati ea, modi corrupti!</Col>
                </Modal>
            </>

        )
    }
}

export default withRouter(Register)
