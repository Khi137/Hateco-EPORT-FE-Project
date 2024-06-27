import React, { Component, createRef } from 'react';
import './styles.scss'
import { Col, Row, Tooltip } from 'antd';
import { BarcodeOutlined, BoldOutlined, DatabaseOutlined, EnvironmentOutlined, InfoCircleOutlined, NumberOutlined } from '@ant-design/icons';
import { Mbutton, Mradio, Winput } from '../../../components/BasicUI';

class TrackingBill extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                pinCode: "",

                taxCode: "",
                billForm: "",
                billSymbol: "",
                billNumber: "",
            },
            radioValue: "pincode"
        };
        this.submitButtonRef = createRef();
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState(prevState => ({
            formData: {
                ...prevState.formData,
                [name]: value
            }
        }));
        return value
    };

    handleRadioChange = (returnValue) => {
        this.setState({
            radioValue: returnValue,
        });
        console.log(returnValue);
    };

    handleLoadData = () => {
        console.log(this.state.formData);
    }

    renderInputField = (item, key) => {
        return (
            <Col className="input_item" key={key}>
                <Row className="item_header">
                    <Col>{item?.title} {item.require && <span className="item_require">*</span>}</Col>
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
                    onBlur={(e) => this.handleOnblurCheck(item?.name + "Error", item?.checkFunction)}
                />
            </Col>
        )
    }

    render() {
        const { formData } = this.state;

        const inputForm = [
            {
                title: "Mã số thuế",
                tooltip: "Nhập mã số thuế có khoảng 10 đến 13 số vd: 0101234567-001",
                placeholder: "Nhập mã số thuế",
                inputIcon: <NumberOutlined />,
                name: "taxCode",
                type: "text",
                value: formData.taxCode,
            },
            {
                title: "Mẫu hoá đơn",
                tooltip: "Mẫu hoá đơn",
                placeholder: "Mẫu hoá đơn",
                inputIcon: <BoldOutlined />,
                name: "billForm",
                type: "text",
                value: formData.billForm,
            },
            {
                title: "Ký hiệu hoá đơn",
                tooltip: "Ký hiệu hoá đơn",
                placeholder: "Ký hiệu hoá đơn",
                inputIcon: <EnvironmentOutlined />,
                name: "billSymbol",
                type: "text",
                value: formData.billSymbol,
            },
            {
                title: "Số hoá đơn",
                tooltip: "Số hoá đơn",
                placeholder: "Số hoá đơn",
                inputIcon: <BarcodeOutlined />,
                name: "billNumber",
                type: "text",
                value: formData.billNumber,
            },
        ]

        const pincodeForm = [
            {
                title: "Mã tra cứu",
                tooltip: "Nhập Mã tra cứu",
                placeholder: "Mã tra cứu",
                inputIcon: <NumberOutlined />,
                name: "pinCode",
                type: "text",
                value: formData.pinCode,
                require: true
            },
        ]

        return (
            <div className='tracking-bill_container'>
                <div className='content'>
                    <Row className='header body-md-normal'>
                        Tra cứu số container
                    </Row>
                    <Row className='radio_form'>
                        <Mradio
                            dataSource={{
                                value: this.state.radioValue,
                                label: "Select an option",
                                options: [
                                    { label: "Mã tra cứu", value: "pincode" },
                                    { label: "Thông tin hóa đơn", value: "infor" },
                                ],
                            }}
                            onChangeValue={(returnValue) => this.handleRadioChange(returnValue.undefined)}
                        />
                    </Row>
                    <Row className="input_container">
                        {(this.state.radioValue === "pincode" ?
                            pincodeForm
                            :
                            inputForm
                        ).map((item, key) => this.renderInputField(item, key))}
                    </Row>
                    <div className="input_button">
                        <Mbutton
                            color=""
                            className="m_button third"
                            type="primary"
                            htmlType="submit"
                            block
                            onClick={this.handleLoadData}
                            ref={this.submitButtonRef}
                            size={"12"}
                            dataSource={{ textbutton: "Nạp dữ liệu" }}
                        />
                    </div>
                    <div className="table_content">
                        <div className="no_data">
                            <DatabaseOutlined style={{ fontSize: '64px' }} />
                            <p>Truy vấn thông tin lệnh để nạp dữ liệu hóa đơn...</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TrackingBill
