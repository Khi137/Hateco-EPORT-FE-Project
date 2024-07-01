import React, { Component, createRef } from 'react';
import './styles.scss'
import { Col, Row, Tooltip } from 'antd';
import { DatabaseOutlined, InfoCircleOutlined, SearchOutlined } from '@ant-design/icons';
import { Mbutton, Winput } from '../../../components/BasicUI';
import { ReactGrid } from '@silevis/reactgrid';
import { formatDateTime, handleColumnsReorder, handleRowsReorder } from '../../../utils/util';

const rowData = [
    {
        "Area": null,
        "BLNo": "HDMUSELA06055400",
        "BargeExVoy": null,
        "BargeImVoy": null,
        "BargeKey": null,
        "Bay": "06",
        "Block": "KT",
        "BookingAmount": 1,
        "BookingDate": "2022-01-06T17:22:52.000Z",
        "BookingNo": "ABC",
        "BookingReleaseDate": null,
        "BookingStatus": 2,
        "BookingType": true,
        "CO2": null,
        "CallSign": null,
        "CargoTypeCode": "MT",
        "CargoTypeName": "Empty",
        "Class": null,
        "ClassCode": "2",
        "ClassName": "Storage Empty",
        "Commodity": null,
        "ContainerCondition": null,
        "ContainerNo": "HDMU7603991",
        "ContainerStatusCode": "S",
        "ContainerStatusName": "Stacking",
        "CreatedBy": "trammtm",
        "CreatedTime": "2022-01-06T17:22:52.000Z",
        "CusHold": false,
        "DateIn": "2021-03-07T03:14:41.000Z",
        "DateOut": null,
        "DeliveryOrder": null,
        "DraftNo": null,
        "ETB": null,
        "ETD": null,
        "EirInNo": null,
        "EirOutNo": null,
        "ExpDate": "2022-01-29T23:59:59.000Z",
        "FE": "E",
        "FPOD": "",
        "HousebillNo": null,
        "Humidity": null,
        "ID_TOS": "0000000639599",
        "InvoiceNo": null,
        "IsLocalForeign": "F",
        "IsReturnBack": false,
        "IsSpecialWarning": false,
        "IsTruckBarge": null,
        "IsoSizetype": "42P0",
        "JobModeCodeIn": "CI",
        "JobModeCodeOut": null,
        "LocalSizetype": "40FR",
        "MCWeight": null,
        "MaxGrossWeight": null,
        "MethodCodeIn": "C",
        "MethodCodeOut": null,
        "ModifiedBy": "trammtm",
        "ModifiedTime": "2022-01-06T17:23:19.000Z",
        "Note": " / ",
        "O2": null,
        "OogBack": null,
        "OogFront": null,
        "OogLeft": null,
        "OogRight": null,
        "OogTop": null,
        "OperationCode": "HMM",
        "OperationName": "HYUNDAI MERCHANT MARINE CO;LTD",
        "POD": "",
        "POL": "",
        "RemoocNo": null,
        "Row": "05",
        "Rowguid": "F246A4EA-EB54-468A-8C74-646F5E20CA8A",
        "Sealno": null,
        "Sealno1": null,
        "Sealno2": null,
        "ServiceNo": null,
        "ShipperName": "abc",
        "SpecialWarning": null,
        "StackingAmount": 0,
        "StuffNo": null,
        "TareWeight": null,
        "Temperature": null,
        "TerHold": false,
        "TerHoldReason": null,
        "TerminalCode": "f9a0050f-04d4-4184-96ae-d462382de6f2",
        "Tier": "3",
        "TransitCode": null,
        "TransitPort": "VNHPH",
        "TruckNo": null,
        "Unno": null,
        "UnstuffNo": null,
        "UserGroupRank": null,
        "VETB": null,
        "VETD": null,
        "VExVoy": null,
        "VGM": false,
        "VImVoy": null,
        "Vent": null,
        "VentUnit": null,
        "VesselExVoy": null,
        "VesselImVoy": null,
        "VesselKey": null,
        "VesselName": null,
        "XuatNeo": null,
        "XuatPhao": null
    }
]

function generateRandomContainerNo() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < 10; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

for (let index = 0; index < 20; index++) {
    const duplicatedData = { ...rowData[0] };
    duplicatedData.ContainerNo = generateRandomContainerNo();
    rowData.push(duplicatedData);
}

class TrackingBooking extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                bookingNumber: "",
                searchData: "",
                bookingNumberError: ""
            },
            generalInformation: {},
            tableData: {
                reactGridColumns: [],
                reactGridRows: [
                    {
                        rowId: "header",
                        cells: [
                            { type: "header", text: "STT" },
                            { type: "header", text: "Số Container" },
                            { type: "header", text: "Hãng Tàu" },
                            { type: "header", text: "Kích cỡ" },
                            { type: "header", text: "Full/Empty" },
                            { type: "header", text: "Hướng" },
                            { type: "header", text: "Hạn Booking" },
                            { type: "header", text: "Vị trí bãi" },
                            { type: "header", text: "Ngày vào bãi" },
                            { type: "header", text: "Ngày ra bãi" },
                            { type: "header", text: "Tình trạng cont" },
                        ]
                    },

                ],
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
        const bookingNumberError = this.checkBookingNumberError(this.state.formData.bookingNumber)
        if (bookingNumberError) {
            this.setState(prevState => ({
                formData: {
                    ...prevState.formData,
                    bookingNumberError: bookingNumberError
                }
            }));
        } else {
            if (this.submitButtonRef.current) {
                this.submitButtonRef.current.loading();
            }
            setTimeout(() => {
                if (this.submitButtonRef.current) {
                    this.submitButtonRef.current.reset();
                    this.setState(prevState => ({
                        generalInformation: rowData[0] ? rowData[0] : {},
                        tableData: {
                            ...prevState.tableData,
                            reactGridColumns: [...this.generateColumnsData()],
                            reactGridRows: [
                                ...prevState.tableData.reactGridRows,
                                ...this.generateTableData(rowData)
                            ],
                        },
                        formData: {
                            ...prevState.formData,
                            bookingNumberError: false
                        }
                    }));
                }
            }, 1000);
        }
    }

    handleExportExel = () => {
        console.log(this.state.formData);
    }

    checkBookingNumberError = (value) => {
        switch (true) {
            case (value === ""):
                return "Số booking không được để trống";
            default:
                return false;
        }
    }

    generateColumnsData = () => {
        return ([
            { columnId: 'STT', width: 50, resizable: true, header: 'STT' },
            { columnId: 'ContainerNumber', width: 150, resizable: true, reorderable: true, header: 'Số Container' },
            { columnId: 'OperationCode', width: 150, resizable: true, reorderable: true, header: 'Hãng Tàu' },
            { columnId: 'IsoSizetype', width: 150, resizable: true, reorderable: true, header: 'Kích cỡ' },
            { columnId: 'CargoTypeName', width: 150, resizable: true, reorderable: true, header: 'Full/Empty' },
            { columnId: 'ClassName', width: 150, resizable: true, reorderable: true, header: 'Hướng' },
            { columnId: 'ExpDate', width: 150, resizable: true, reorderable: true, header: 'Hạn Booking' },
            { columnId: 'Position', width: 150, resizable: true, reorderable: true, header: 'Vị trí bãi' },
            { columnId: 'DateIn', width: 150, resizable: true, reorderable: true, header: 'Ngày vào bãi' },
            { columnId: 'DateOut', width: 150, resizable: true, reorderable: true, header: 'Ngày ra bãi' },
            { columnId: 'ContainerStatusName', width: 150, resizable: true, reorderable: true, header: 'Tình trạng cont' }
        ])
    };

    generateRowData = (container, index) => {
        return (
            {
                rowId: String(index + 1),
                reorderable: true,
                cells: [
                    { type: 'text', nonEditable: true, text: String(index + 1) },
                    { type: 'text', nonEditable: true, text: container?.ContainerNo || "" },
                    { type: 'text', nonEditable: true, text: container?.OperationCode || "" },
                    { type: 'text', nonEditable: true, text: container?.IsoSizetype || "" },
                    { type: 'text', nonEditable: true, text: container?.CargoTypeName || "" },
                    { type: 'text', nonEditable: true, text: container?.ClassName || "" },
                    { type: 'text', nonEditable: true, text: container?.ExpDate ? formatDateTime(container?.ExpDate) : "" },
                    { type: 'text', nonEditable: true, text: (container?.Block || "") + "-" + (container?.Bay || "") + "-" + (container?.Row || "") + "-" + (container?.Tier || "") },
                    { type: 'text', nonEditable: true, text: container?.DateIn ? formatDateTime(container?.DateIn) : "" },
                    { type: 'text', nonEditable: true, text: container?.DateOut ? formatDateTime(container?.DateOut) : "" },
                    { type: 'text', nonEditable: true, text: container?.ContainerStatusName || "" }
                ]
            }
        )
    }

    generateTableData = (dataList) => {
        const generateData = dataList.map((container, index) => this.generateRowData(container, index));
        return generateData;
    };

    handleColumnsReorder = (targetColumnId, columnIds) => {
        const { tableData } = this.state;
        const updatedTableData = handleColumnsReorder(tableData, targetColumnId, columnIds);
        this.setState({ tableData: updatedTableData });
    }

    handleRowsReorder = (targetRowId, rowIds) => {
        const { tableData } = this.state;
        const updatedTableData = handleRowsReorder(tableData, targetRowId, rowIds);
        this.setState({ tableData: updatedTableData });
    }

    handleCanReorderRows = (targetRowId, rowIds) => {
        return targetRowId !== 'header';
    }

    handleRowsSearch = (reactGridRows, searchValue) => {
        if (!searchValue) return reactGridRows;
        const searchLower = searchValue.toLowerCase();
        const filteredRows = reactGridRows.slice(1).filter(row => {
            const containerNo = row.cells[1]?.text.toLowerCase();
            const operationCode = row.cells[2]?.text.toLowerCase();
            const isoSizetype = row.cells[3]?.text.toLowerCase();
            return (
                containerNo.includes(searchLower) ||
                operationCode.includes(searchLower) ||
                isoSizetype.includes(searchLower)
            );
        });
        return [reactGridRows[0], ...filteredRows];
    }

    render() {
        const { formData, generalInformation } = this.state;

        const generalInformationList = [
            {
                title: "Loại booking",
                value: generalInformation.OperationCode ? "Booking chỉ định" : ""
            },
            {
                title: "Hãng khai thác",
                value: generalInformation.OperationCode
            },
            {
                title: "Kích cỡ ISO",
                value: generalInformation.IsoSizetype
            },
            {
                title: "Số lượng cấp",
                value: generalInformation.BookingAmount
            },
            {
                title: "Đã cấp",
                value: generalInformation.StackingAmount
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
                                    errorText={formData?.bookingNumberError || true}
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
                        {
                            this.state.tableData?.reactGridRows[1] &&
                            <Row className='table_feature'>
                                <Col className="search_bar">
                                    <Winput
                                        name={"searchData"}
                                        className={`form_input_field`}
                                        prefix={<SearchOutlined />}
                                        placeholder={"Tìm kiếm..."}
                                        value={formData.searchData}
                                        onChange={(e) => this.handleInputChange(e, 'formData')}
                                    />
                                </Col>
                            </Row>
                        }
                        <div className="table_content">
                            {
                                !this.state.tableData?.reactGridRows[1] ?
                                    <div className="no_data">
                                        <DatabaseOutlined style={{ fontSize: '64px' }} />
                                        <p>Nhập số booking để nạp dữ liệu container...</p>
                                    </div>
                                    :
                                    <div className="react_grid_table">
                                        <ReactGrid
                                            rows={this.handleRowsSearch(this.state.tableData.reactGridRows, formData.searchData)}
                                            columns={this.state.tableData.reactGridColumns}
                                            stickyTopRows={1}
                                            stickyLeftColumns={1}
                                            onColumnsReordered={this.handleColumnsReorder}
                                            onRowsReordered={this.handleRowsReorder}
                                            canReorderRows={this.handleCanReorderRows}
                                            enableRowSelection
                                            enableColumnSelection
                                        />
                                    </div>
                            }
                        </div>
                    </div>
                </div>
            </Row>
        )
    }
}

export default TrackingBooking
