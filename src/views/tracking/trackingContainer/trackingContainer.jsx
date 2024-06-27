import React, { Component, createRef } from 'react';
import './styles.scss'
import { Col, Row, Tooltip } from 'antd';
import { Mbutton, Winput } from '../../../components/BasicUI';
import { DatabaseOutlined, FieldNumberOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { formatDateTime } from '../../../utils/util';

const defaultData = [
    {
        "Area": null,
        "BLNo": "HLC",
        "BargeExVoy": null,
        "BargeImVoy": null,
        "BargeKey": null,
        "Bay": "14",
        "Block": "KVP",
        "BookingNo": "B",
        "CallSign": null,
        "CargoTypeCode": "MT",
        "CargoTypeName": "Empty",
        "Class": null,
        "ClassCode": "2",
        "ClassName": "Storage Empty",
        "Commodity": null,
        "ContainerCondition": null,
        "ContainerConditionName": null,
        "ContainerNo": "TCNU6715223",
        "ContainerStatusCode": "S",
        "ContainerStatusName": "Stacking",
        "CreatedBy": "catos_ndv",
        "CreatedTime": "2021-07-26T20:21:01.000Z",
        "CusHold": true,
        "DateIn": "2021-07-27T00:36:50.000Z",
        "DateOut": null,
        "DeliveryOrder": null,
        "DraftNo": "NDV/2024/060000097",
        "ETB": null,
        "ETD": null,
        "EirInNo": null,
        "EirOutNo": "240613001489",
        "FE": "E",
        "FPOD": null,
        "HousebillNo": null,
        "ID_TOS": "0000000755214",
        "InvoiceNo": null,
        "IsLocalForeign": "F",
        "IsReturnBack": false,
        "IsSpecialWarning": false,
        "IsTruckBarge": null,
        "IsoSizetype": "45G0",
        "JobModeCodeIn": "DS",
        "JobModeCodeOut": "CAPR",
        "JobModeNameIn": "NHẬP TÀU",
        "JobModeNameOut": "CẤP RỖNG",
        "LocalSizetype": "4500",
        "MCWeight": 4000,
        "MaxGrossWeight": null,
        "MethodCodeIn": "V",
        "MethodCodeOut": "BAI-XE",
        "MethodNameIn": null,
        "MethodNameOut": "BÃI <-> XE",
        "ModifiedBy": "catos_ndv",
        "ModifiedTime": "2021-07-28T15:23:03.000Z",
        "Note": "DA CAP CHO BK 42982133 NGAY 27/06/2021 THAO 0969878190 ..",
        "OogBack": null,
        "OogFront": null,
        "OogLeft": null,
        "OogRight": null,
        "OogTop": null,
        "OperationCode": "HLC",
        "OperationName": "CÔNG TY TNHH HAPAG- LLOYD (VIET NAM)",
        "POD": "VNHPH",
        "POL": "MYPKG",
        "RemoocNo": null,
        "Row": "05",
        "Rowguid": "11F15127-E569-457A-859A-33395C70B91D",
        "RowguidCntrDetails": "11F15127-E569-457A-859A-33395C70B91D",
        "Sealno": null,
        "Sealno1": null,
        "Sealno2": null,
        "ServiceNo": null,
        "SpecialWarning": null,
        "StuffNo": null,
        "TareWeight": null,
        "Temperature": null,
        "TerHold": false,
        "TerHoldReason": null,
        "TerminalCode": null,
        "Tier": "2",
        "TransitCode": null,
        "TransitPort": null,
        "TruckNo": null,
        "Unno": null,
        "UnstuffNo": null,
        "VETB": "2017-02-01T00:00:00.000Z",
        "VETD": "2017-02-01T00:00:00.000Z",
        "VExVoy": null,
        "VGM": true,
        "VImVoy": null,
        "Vent": null,
        "VentUnit": null,
        "VesselExVoy": null,
        "VesselImVoy": null,
        "VesselKey": "EMTY",
        "VesselName": "Storage Empty",
        "XuatNeo": null,
        "XuatPhao": null
    }
]

class TrackingContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                containerNumber: ""
            },
            containerList: defaultData
        };
        this.submitButtonRef = createRef();
    }

    handleInputChange = (e) => {
        const { value } = e.target;
        this.setState({
            formData: {
                containerNumber: value
            }
        });
        return value
    };

    handleLoadData = () => {
        console.log(this.state.containerNumber);
    }

    getDataForm = (container) => {
        const dataList = [
            {
                title: "Hãng khai thác",
                value: container.OperationCode
            },
            {
                title: "Tàu / Chuyến",
                value: container.ClassName
            },
            {
                title: "Kích cỡ ISO",
                value: container.IsoSizetype
            },
            {
                title: "ETB/ETD",
                value: formatDateTime(container.VETB) + " / " + formatDateTime(container.VETD)
            },
            {
                title: "Full/Empty",
                value: container.CargoTypeName
            },
            {
                title: "Booking No",
                value: container.BookingNo
            },
            {
                title: "Hướng",
                value: container.ClassName
            },
            {
                title: "BL No",
                value: container.BLNo
            },
            {
                title: "Trạng thái",
                value: container.ContainerStatusName
            },
            {
                title: "Ngày vào bãi",
                value: formatDateTime(container.DateIn)
            },
            {
                title: "Vị trí",
                value: container.Block + "-" + container.Bay + "-" + container.Row + "-" + container.Tier,
                className: "location"
            },
            {
                title: "Ngày ra bãi",
                value: formatDateTime(container.DateOut)
            },
            {
                title: "Trọng lượng",
                value: container.MCWeight
            },
            {
                title: "Phương án vào",
                value: container.JobModeNameIn
            },
            {
                title: "Loại hàng",
                value: container.CargoTypeName
            },
            {
                title: "Phương án ra",
                value: container.JobModeNameOut
            },
            {
                title: "Số chì",
                value: container.Sealno
            },
            {
                title: "POD",
                value: container.POD
            },
            {
                title: "Nội / Ngoại",
                value: container.OperationCode
            },
            {
                title: "FPOD",
                value: container.FPOD
            },
            {
                title: "Nhiệt độ",
                value: ""
            },
            {
                title: "Class / Unno",
                value: "/"
            },
            {
                title: "Thanh lý hải quan",
                value: container.VGM ? "Đã Thanh Lý" : "",
                className: "liquidation"
            },
            {
                title: "Quá khổ",
                value: "////"
            },
        ]
        return dataList
    }

    renderTableColumn = ({ item, index }) => {
        return (
            <Row className="data_table_row" key={index}>
                <Col className="data_table_row_column left_column">
                    {item.title}
                </Col>
                <Col className={`data_table_row_column ${item.className}`}>
                    {item.value}
                </Col>
            </Row>
        )
    }

    renderDataTable = (container) => {
        const dataList = this.getDataForm(container[0])

        return (
            <Row className="data_table">
                <Col className="data_table_column">
                    {
                        dataList?.map((item, index) => {
                            if (index % 2 === 0) {
                                return (
                                    this.renderTableColumn({
                                        item: item,
                                        index: index
                                    })
                                )
                            }
                        })
                    }
                </Col>
                <Col className="data_table_column">
                    {
                        dataList?.map((item, index) => {
                            if (index % 2 === 1) {
                                return (
                                    this.renderTableColumn({
                                        item: item,
                                        index: index
                                    })
                                )
                            }
                        })
                    }
                </Col>
            </Row >
        )
    }

    render() {

        const { containerList } = this.state

        return (
            <Row className='tracking-container_container'>
                <div className='content'>
                    <Row className='header body-md-normal'>
                        Tra cứu số container
                    </Row>
                    <div className="input_container">
                        <Col className="input_item">
                            <Row className="item_header">
                                <Col>Nhập số container <span className="item_require">*</span></Col>
                                <Tooltip placement="top" title={"Nhập số container"} className="item_tooltip">
                                    <InfoCircleOutlined />
                                </Tooltip>
                            </Row>
                            <Winput
                                name={"containerNumber"}
                                className={`form_input_field`}
                                prefix={<FieldNumberOutlined />}
                                placeholder={"Nhập số container"}
                                value={this.state.formData.containerNumber}
                                onChange={(e) => this.handleInputChange(e)}
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
                    <div className={`table_content ${containerList.length !== 0 && "table_exist_data"}`}>
                        {
                            !containerList.length === 0 ?
                                <div className="no_data">
                                    <DatabaseOutlined style={{ fontSize: '64px' }} />
                                    <p>Nhập số container để nạp dữ liệu container...</p>
                                </div>
                                :
                                this.renderDataTable(containerList)
                        }
                    </div>
                </div>
            </Row>
        )
    }
}

export default TrackingContainer
