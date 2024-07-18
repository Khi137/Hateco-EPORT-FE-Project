import React, { Component } from "react";
import { Col, Modal, Row } from "antd";
import { Mbutton, Mcheckbox, Minput, Winput } from "../../components/BasicUI/BasicUI";

export default class UpdateContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.submitButtonRef = React.createRef();
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState((prevState) => ({
            formData: {
                ...prevState.formData,
                [name]: value,
            },
        }));
        return value;
    };

    handleSubmit = () => {
        if (this.submitButtonRef.current) {
            this.submitButtonRef.current.loading();
        }

        setTimeout(() => {
            if (this.submitButtonRef.current) {
                this.submitButtonRef.current.reset();
                // this.props.handleSubmit()
            }
        }, 1000);
    }

    renderInputField = (item, key) => {
        return (
            <Row key={key + item?.name}>
                <Winput
                    title={item?.title}
                    value={item.value}
                    tooltip={item.tooltip}
                    onChange={(e) => this.handleInputChange(e)}
                    checkError={(error) =>
                        this.setState((prevState) => ({
                            formData: {
                                ...prevState.formData,
                                [item?.name + "Error"]: error,
                            },
                        }))
                    }
                    require={item.require}
                    inputRegex={item.regex}
                    minLength={item.minLength}
                    name={item?.name}
                    type={item?.type}
                    className={`form_input_field ${item?.error ? "error_item" : ""}`}
                    prefix={item?.inputIcon}
                    placeholder={item?.placeholder}
                    defaultValue={item?.value}
                    error={typeof item?.error === "string" ? item?.error : false}
                    ref={item.ref}
                />
            </Row>
        );
    };

    renderModalFooter = () => {
        return (
            <Row gutter={[12, 12]} justify={"end"}>
                <Col span={6}>
                    <Mbutton color=""
                        className="m_button third_border"
                        type="primary"
                        htmlType="submit"
                        block
                        onClick={this.props.onCancle}
                        size={"12"}
                        dataSource={{
                            textbutton: `Huỷ`,
                        }}
                    />
                </Col>
                <Col span={8}>
                    <Mbutton color=""
                        className="m_button third"
                        type="primary"
                        htmlType="submit"
                        block
                        onClick={this.handleSubmit}
                        ref={this.submitButtonRef}
                        size={"12"}
                        dataSource={{
                            textbutton: `Cập nhật`,
                        }}
                    />
                </Col>
            </Row>
        )
    }

    renderFormInput = (inputData) => {
        switch (inputData.type) {
            case "text":
                return (
                    <Col span={inputData.span} >
                        <Minput
                            dataSource={{
                                label: inputData.name,
                                inputType: "text",
                                value: inputData.value,
                                placeholder: inputData.placeholder,
                                disable: true
                            }}
                        />
                    </Col>
                )
            case "checkbox":
                return (
                    <Col span={inputData.span} >
                        <Mcheckbox dataSource={{
                            span: 12,
                            label: inputData.label,
                            // value: item.value,
                            // className: `${item.value && "m-checkbox_checked"}`,
                            name: inputData.name
                        }}
                        // onClick={() => this.handleCheckboxChange(item.value, item.name)}
                        />
                    </Col>
                )
            default:
                break;
        }
    }

    render() {

        const formInput = [
            {
                name: "Số container",
                placeholder: "Số container",
                value: "",
                disable: true,
                type: "text",
                span: 8,
            },
            {
                name: "PT giao nhận",
                placeholder: "PT giao nhận",
                value: "",
                disable: true,
                type: "text",
                span: 8,
            },
            {
                name: "Hạn lệnh",
                placeholder: "Hạn lệnh",
                value: "",
                disable: true,
                type: "text",
                span: 8,
            },
            {
                name: "Hạn lưu container",
                placeholder: "Hạn lưu container",
                value: "",
                disable: true,
                type: "text",
                span: 8,
            },
            {
                name: "Chọn tàu / Nhập / Xuất (Mã  chuyến)",
                placeholder: "Chọn tàu / Nhập / Xuất (Mã  chuyến)",
                value: "",
                disable: true,
                type: "text",
                span: 8,
            },
            {
                name: "Đối tượng thanh toán",
                placeholder: "Đối tượng thanh toán",
                value: "",
                disable: true,
                type: "text",
                span: 8,
            },
            {
                name: "Chủ hàng",
                placeholder: "Chủ hàng",
                value: "",
                disable: true,
                type: "text",
                span: 8,
            },
            {
                name: "Số vận đơn",
                placeholder: "Số vận đơn",
                value: "",
                disable: true,
                type: "text",
                span: 8,
            },
            {
                name: "F/E",
                placeholder: "F/E",
                value: "",
                disable: true,
                type: "text",
                span: 8,
            },
            {
                name: "Loại hàng",
                placeholder: "F/E",
                value: "",
                disable: true,
                type: "text",
                span: 8,
            },
            {
                name: "Số hoá đơn",
                placeholder: "Số hoá đơn",
                value: "",
                disable: true,
                type: "text",
                span: 16,
            },
            {
                name: "Người đại diện",
                placeholder: "Người đại diện",
                value: "",
                disable: true,
                type: "text",
                span: 8,
            },
            {
                name: "Số điện thoại",
                placeholder: "Số điện thoại",
                value: "",
                disable: true,
                type: "text",
                span: 10,
            },
            {
                name: "Hàng quá cảnh",
                placeholder: "Hàng quá cảnh",
                value: "",
                label: <Row><Row style={{ userSelect: "none" }}>Hàng quá cảnh</Row></Row>,
                disable: true,
                type: "checkbox",
                span: 6,
            },
            {
                name: "Số điện thoại",
                placeholder: "Số điện thoại",
                value: "",
                disable: true,
                type: "text",
                span: 12,
            },
            {
                name: "Số điện thoại",
                placeholder: "Số điện thoại",
                value: "",
                disable: true,
                type: "text",
                span: 12,
            },
            {
                name: "Số điện thoại",
                placeholder: "Số điện thoại",
                value: "",
                disable: true,
                type: "text",
                span: 8,
            },
            {
                name: "Số điện thoại",
                placeholder: "Số điện thoại",
                value: "",
                disable: true,
                type: "text",
                span: 8,
            },
            {
                name: "Số điện thoại",
                placeholder: "Số điện thoại",
                value: "",
                disable: true,
                type: "text",
                span: 8,
            },
            {
                name: "Số điện thoại",
                placeholder: "Số điện thoại",
                value: "",
                disable: true,
                type: "text",
                span: 6,
            },
            {
                name: "Số điện thoại",
                placeholder: "Số điện thoại",
                value: "",
                disable: true,
                type: "text",
                span: 6,
            },
            {
                name: "Số điện thoại",
                placeholder: "Số điện thoại",
                value: "",
                disable: true,
                type: "text",
                span: 6,
            },
            {
                name: "Số điện thoại",
                placeholder: "Số điện thoại",
                value: "",
                disable: true,
                type: "text",
                span: 6,
            },
        ]

        return (
            <Modal
                title={"Chỉnh sửa thông tin lệnh"}
                footer={this.renderModalFooter()}
                // loading={loading}
                open={this.props.visible}
                onCancel={this.props.onCancle}
                width={"70%"}
            >
                <Minput
                    dataSource={{
                        label: "Mã PinCode",
                        inputType: "text",
                        placeholder: "Mã PinCode",
                        disable: true
                    }}
                />
                <Row className="horizontal-line" >Chi tiết lệnh</Row>
                <Row gutter={[2, 0]} justify={"space-between"} align={"middle"}>
                    {
                        formInput.map(item => {
                            return this.renderFormInput(item)
                        })
                    }
                </Row>
            </Modal>
        );
    }
}