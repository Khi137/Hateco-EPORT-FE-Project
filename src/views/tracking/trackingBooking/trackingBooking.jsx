import React, { Component, createRef } from 'react';
import './styles.scss'
import { Col, Row, Tooltip } from 'antd';
import { DatabaseOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { Mbutton, Winput } from '../../../components/BasicUI';

class TrackingBooking extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                bookingNumber: ""
            },
            generalInformation: {
                bookingType: "",
                miningType: "",
                isoSize: "",
                requestAmount: "",
                providedAmount: ""
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

    handleLoadData = () => {
        console.log(this.state.formData);
        console.log(this.state);
    }

    render() {
        const { formData, generalInformation } = this.state;

        const generalInformationList = [
            {
                title: "Loại booking",
                value: generalInformation.bookingType
            },
            {
                title: "Hãng khai thác",
                value: generalInformation.miningType
            },
            {
                title: "Kích cỡ ISO",
                value: generalInformation.isoSize
            },
            {
                title: "Số lượng cấp",
                value: generalInformation.requestAmount
            },
            {
                title: "Đã cấp",
                value: generalInformation.providedAmount
            },
        ]

        return (
            <Row className='tracking-booking_container'>
                <div className='content'>
                    <div className="input_content">
                        <Row className='header body-md-normal'>
                            Tra cứu số booking
                        </Row>
                        <div className="input_container">
                            <Col className="input_item">
                                <Row className="item_header">
                                    <Col>Số booking <span className="item_require">*</span></Col>
                                    <Tooltip placement="top" title={"Nhập số booking"} className="item_tooltip">
                                        <InfoCircleOutlined />
                                    </Tooltip>
                                </Row>
                                <Winput
                                    name={"bookingNumber"}
                                    className={`form_input_field`}
                                    // prefix={item?.inputIcon}
                                    placeholder={"Nhập số booking"}
                                    value={formData.bookingNumber}
                                    onChange={(e) => this.handleInputChange(e, 'formData')}
                                />
                            </Col>
                        </div>
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
                        <div className="information_header">
                            <div className="information_header_text"><p>Thông tin chung</p></div>
                            <div className="header_dash_line"></div>
                        </div>
                        <div className="general_information_content">
                            {
                                generalInformationList.map((item, index) => {
                                    return (
                                        <div className="information_content_item" key={index}>
                                            <div className="item_title">{item.title}:</div>
                                            <div className="item_value">{item.value}</div>
                                        </div>
                                    )
                                })
                            }

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

export default TrackingBooking
