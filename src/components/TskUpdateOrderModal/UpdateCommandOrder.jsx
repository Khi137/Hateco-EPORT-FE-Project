import React, { Component } from "react";
import { Col, Modal, Row } from "antd";
import { Mbutton, Minput, Winput } from "../../components/BasicUI/BasicUI";
import ChooseShipRoute from "./ChooseShipRoute";

export default class UpdateCommandOrder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisibe: {
                chooseShipRoute: false
            }
        };
        this.submitButtonRef = React.createRef();
        this.chooseShipInput = React.createRef();
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState((prevState) => ({
            formData: {
                ...prevState.formData,
                [name]: value,
            }
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

    hanldeChangeVisible = (modalName) => {
        this.setState((prevState) => ({
            modalVisibe: {
                ...prevState.modalVisibe,
                [modalName]: !prevState.modalVisibe[modalName],
            },
        }));
    }

    handleChooseShip = (data) => {
        const e = {
            target: {
                value: data
            }
        }
        this.chooseShipInput.current?.handleChange(e)
        this.hanldeChangeVisible("chooseShipRoute")
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

    render() {
        return (
            <Modal
                title={"Chỉnh sửa thông tin lệnh"}
                footer={this.renderModalFooter()}
                // loading={loading}
                open={this.props.visible}
                onCancel={this.props.onCancle}
            >
                <Minput
                    dataSource={{
                        label: "Mã PinCode",
                        inputType: "text",
                        placeholder: "Mã PinCode",
                        // disable: true
                    }}

                />
                <Row className="horizontal-line" ></Row>
                <Row gutter={[2, 0]} justify={"space-between"}>
                    <Col span={12}>
                        <Minput
                            dataSource={{
                                label: "Tác nghiệp",
                                inputType: "text",
                                placeholder: "Tác nghiệp",
                                // disable: true
                            }}
                        />
                    </Col>
                    <Col span={12}>
                        <Minput
                            dataSource={{
                                label: "PT giao nhận",
                                inputType: "text",
                                placeholder: "PT giao nhận",
                                // disable: true
                            }}
                        />
                    </Col>
                    <Col span={12}>
                        <Minput
                            dataSource={{
                                label: "Hạn lệnh",
                                inputType: "text",
                                placeholder: "Hạn lệnh",
                                // disable: true
                            }}
                        />
                    </Col>
                    <Col span={12}>
                        <Minput
                            dataSource={{
                                label: "Hạn lưu container",
                                inputType: "text",
                                placeholder: "Hạn lưu container",
                                // disable: true
                            }}
                        />
                    </Col>
                    <Col span={24} onClick={() => this.hanldeChangeVisible("chooseShipRoute")}>
                        <Minput
                            dataSource={{
                                label: "Chọn tàu / Nhập / Xuất (Mã  chuyến)",
                                inputType: "text",
                                placeholder: "Chọn tàu / Nhập / Xuất (Mã  chuyến)",
                                // disable: true
                            }}
                            ref={this.chooseShipInput}
                        />
                    </Col>
                    <Col span={24}>
                        <Minput
                            dataSource={{
                                label: "Đối tượng thanh toán",
                                inputType: "text",
                                placeholder: "Đối tượng thanh toán",
                            }}
                        />
                    </Col>
                    <Col span={12}>
                        <Minput
                            dataSource={{
                                label: "Chủ hàng",
                                inputType: "text",
                                placeholder: "Chủ hàng",
                            }}
                        />
                    </Col>
                    <Col span={12}>
                        <Minput
                            dataSource={{
                                label: "Số hoá đơn",
                                inputType: "text",
                                placeholder: "Số hoá đơn",
                            }}
                        />
                    </Col>
                    <Col span={12}>
                        <Minput
                            dataSource={{
                                label: "Người đại diện",
                                inputType: "text",
                                placeholder: "Người đại diện",
                            }}
                        />
                    </Col>
                    <Col span={12}>
                        <Minput
                            dataSource={{
                                label: "Số điện thoại",
                                inputType: "text",
                                placeholder: "Số điện thoại",
                            }}
                        />
                    </Col>
                    <Col span={24}>
                        <Minput
                            dataSource={{
                                label: "Ghi chú",
                                inputType: "text",
                                placeholder: "Ghi chú",
                            }}
                        />
                    </Col>
                </Row>
                <ChooseShipRoute
                    visible={this.state.modalVisibe.chooseShipRoute}
                    onCancle={() => this.hanldeChangeVisible("chooseShipRoute")}
                    onSubmit={this.handleChooseShip}
                />
            </Modal>
        );
    }
}