import React, { Component, createRef } from 'react';
import './styles.scss'
import { Col, Row, Tooltip } from 'antd';
import { BoldOutlined, DatabaseOutlined, InfoCircleOutlined, NumberOutlined } from '@ant-design/icons';
import { Mbutton, Mdatepicker, Mselect, Winput } from '../../../components/BasicUI';
import moment from 'moment';

class TrackingHouseBill extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                houseBillNumber: "",
                DOCode: "",
                // fromDate: moment('2024-06-27').startOf('day').toDate(),
                // toDate: moment('2024-06-27').endOf('day').toDate(),
                fromDate: new Date('2024-06-27T00:00:00'),
                toDate: new Date('2024-06-27T23:59:59'),


            }
        };
        this.submitButtonRef = createRef();
    }

    handleInputChange = (e, dataForm) => {
        const { name, value } = e.target;
        this.setState(prevState => ({
            [dataForm]: {
                ...prevState[dataForm],
                [name]: value
            }
        }));
        return value
    };

    handleSelect = (e) => {
        console.log(e);
    };

    handleLoadData = () => {
        console.log(this.state.houseBillNumber);
    }

    renderInputField = (item, key) => {
        return (
            <Col className="input_item" key={key + item?.name}>
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
                    onChange={(e) => this.handleInputChange(e, "formData")}
                    errorText={item?.error && item?.error}
                />
            </Col>
        )
    }

    render() {

        const { formData } = this.state
        const inputForm = [
            {
                title: "Mã lệnh (D/O)",
                tooltip: "Nhập Mã lệnh (D/O)",
                placeholder: "Nhập Mã lệnh (D/O)",
                inputIcon: <NumberOutlined />,
                name: "DOCode",
                type: "text",
                value: formData.DOCode,
            },
            {
                title: "Số Housebill",
                tooltip: "Số Housebill",
                placeholder: "nhập số Housebill",
                inputIcon: <BoldOutlined />,
                name: "houseBillNumber",
                type: "text",
                value: formData.houseBillNumber,
            }
        ]

        return (
            <Row className='tracking-house-bill_container'>
                <div className='content'>
                    <div className="input_content">
                        <Row className='header body-md-normal'>
                            Tra cứu thông tin HouseBill
                        </Row>
                        <div className="input_container">
                            <Row className="input_item date_input_container">
                                <Col className="date_input">
                                    <Row className="body-lg-normal">
                                        Từ ngày
                                    </Row>
                                    <Mdatepicker
                                        dataSource={{
                                            id: "fromDate",
                                            value: formData.fromDate,
                                            defaultValue: formData.fromDate,
                                            className: "date_input"
                                        }}
                                    />
                                </Col>
                                <Col className="date_input">
                                    <Row className="body-lg-normal">
                                        Đến ngày
                                    </Row>
                                    <Mdatepicker
                                        dataSource={{
                                            id: "toDate",
                                            value: formData.toDate,
                                            defaultValue: formData.toDate,
                                            className: "date_input"
                                        }}
                                        value={formData.toDate}
                                        defaultValue={formData.toDate}
                                    />
                                </Col>
                            </Row>
                            <Row className="input_item">
                                <Mselect
                                    dataSource={{
                                        id: "miningCompany",
                                        ref: "miningCompany",
                                        name: "miningCompany",
                                        label: "Chọn Hãng Khai Thác",
                                        value: this.state.formData.miningCompany,
                                        options: [
                                            { label: "Option 1", value: "option1" },
                                            { label: "Option 2", value: "option2" },
                                            { label: "Option 3", value: "option3" },
                                        ],
                                    }}
                                    onChangeValue={(e) => this.handleSelect(e)}
                                />
                            </Row>
                            {inputForm.map((item, key) => this.renderInputField(item, key))}
                        </div>
                        <div className="input_button">
                            <Mbutton
                                color=""
                                className="m_button second"
                                type="primary"
                                htmlType="submit"
                                block
                                onClick={this.handleLoadData}
                                ref={this.submitButtonRef}
                                size={"12"}
                                dataSource={{ textbutton: "Nạp dữ liệu" }}
                            />
                        </div>
                    </div>
                    <div className="container_list">
                        <Row className='header body-md-normal'>
                            Danh sách container
                        </Row>
                        <div className="table_content">
                            <div className="no_data">
                                <DatabaseOutlined style={{ fontSize: '64px' }} />
                                <p>Nhập số booking để nạp dữ liệu container...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Row>
        )
    }
}

export default TrackingHouseBill
