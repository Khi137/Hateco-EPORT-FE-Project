import React, { Component, createRef } from 'react';
import './styles.scss'
import { Col, Row, Tooltip } from 'antd';
import { BoldOutlined, DatabaseOutlined, InfoCircleOutlined, NumberOutlined, SearchOutlined } from '@ant-design/icons';
import { Mbutton, Mdatepicker, Mselect, Mtable, Winput } from '../../../components/BasicUI';
import moment from 'moment';
import { formatDateTime, handleColumnsReorder, handleRowsReorder, handleRowsSearch } from '../../../utils/util';
import { ReactGrid } from '@silevis/reactgrid';

const rowData = [
    {
        "status": false,
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
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < 10; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

for (let index = 0; index < 100; index++) {
    const duplicatedData = { ...rowData[0] };
    duplicatedData.ContainerNo = generateRandomContainerNo();
    rowData.push(duplicatedData);
}

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
                houseBillNumberError: true,
                DOCodeError: true,
            },
            tableData: []
        };
        this.submitButtonRef = createRef();

        this.houseBillNumberRef = createRef();
        this.DOCodeRef = createRef();
    }

  handleInputChange = (e, dataForm) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      [dataForm]: {
        ...prevState[dataForm],
        [name]: value,
      },
    }));
    return value;
  };

  handleSelect = (e) => {
    console.log(e);
  };

    handleLoadData = () => {
        const { houseBillNumberError, DOCodeError } = this.state.formData
        if (houseBillNumberError || DOCodeError) {
            this.houseBillNumberRef.current.handleCheckError()
            this.DOCodeRef.current.handleCheckError()
            return
        }
        if (this.submitButtonRef.current) {
            this.submitButtonRef.current.loading();
        }
        setTimeout(() => {
            if (this.submitButtonRef.current) {
                this.submitButtonRef.current.reset();
                this.setState(prevState => ({
                    generalInformation: rowData[0] ? rowData[0] : {},
                    tableData: rowData,
                    formData: {
                        ...prevState.formData,
                        bookingNumberError: false
                    }
                }));
            }
        }, 1000);
    }

    renderInputField = (item, key) => {
        return (
            <Col className="input_item" key={key + item?.name}>
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
                    inputRegex={item.regex}
                    minLength={item.minLength}

                    name={item?.name}
                    type={item?.type}
                    className={`form_input_field ${item?.error ? 'error_item' : ''}`}
                    prefix={item?.inputIcon}
                    placeholder={item?.placeholder}
                    defaultValue={item?.value}
                    errorText={item?.error && item?.error}
                    ref={item.ref}
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
                require: true,
                ref: this.DOCodeRef
            },
            {
                title: "Số Housebill",
                tooltip: "Số Housebill",
                placeholder: "nhập số Housebill",
                inputIcon: <BoldOutlined />,
                name: "houseBillNumber",
                type: "text",
                value: formData.houseBillNumber,
                require: true,
                ref: this.houseBillNumberRef
            }
        ]

        const columnsFormat = [
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
            { columnId: 'ContainerStatusName', width: 150, resizable: true, reorderable: true, header: 'Tình trạng cont' },
            { columnId: 'Status', width: 150, resizable: true, reorderable: true, header: 'Trạng thái' }
        ]

        const rowsFormat = (container, index) => {
            return (
                [
                    { type: 'text', nonEditable: true, text: String(index + 1) },
                    { type: 'text', nonEditable: false, text: container?.ContainerNo || "" },
                    { type: 'text', nonEditable: false, text: container?.OperationCode || "" },
                    { type: 'text', nonEditable: false, text: container?.IsoSizetype || "" },
                    { type: 'text', nonEditable: false, text: container?.CargoTypeName || "" },
                    { type: 'text', nonEditable: false, text: container?.ClassName || "" },
                    { type: 'text', nonEditable: false, text: container?.ExpDate ? formatDateTime(container?.ExpDate) : "" },
                    { type: 'text', nonEditable: false, text: (container?.Block || "") + "-" + (container?.Bay || "") + "-" + (container?.Row || "") + "-" + (container?.Tier || "") },
                    { type: 'text', nonEditable: false, text: container?.DateIn ? formatDateTime(container?.DateIn) : "" },
                    { type: 'text', nonEditable: false, text: container?.DateOut ? formatDateTime(container?.DateOut) : "" },
                    { type: 'text', nonEditable: false, text: container?.ContainerStatusName || "" },
                    { type: 'checkbox', nonEditable: false, checked: container?.status }
                ]
            )
        }

        const rowsHeader = [
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
            { type: "header", text: "Trạng Tình" },
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
                                <Row className="item_header">
                                    <Col>Chọn hãng khai thác <span className="item_require">*</span></Col>
                                    <Tooltip placement="top" title={"Chọn hãng khai thác"} className="item_tooltip">
                                        <InfoCircleOutlined />
                                    </Tooltip>
                                </Row>
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
                                <Row className="Winput_error_text">{this.miningCompanyError}</Row>
                            </Row>
                            {inputForm.map((item, key) => this.renderInputField(item, key))}
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
                    </div>
                    <div className="container_list">
                        <Row className='header body-md-normal'>
                            Danh sách container
                        </Row>
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
                            <Col className="exel_export">
                                <Mbutton
                                    color=""
                                    className="m_button third"
                                    type="primary"
                                    htmlType="submit"
                                    block
                                    size={"12"}
                                    dataSource={{ textbutton: "Xuất File Exel", color: "second" }}
                                />
                            </Col>
                        </Row>
                        <div className="table_content">
                            {
                                !this.state.tableData[0] ?
                                    <div className="no_data">
                                        <DatabaseOutlined style={{ fontSize: '64px' }} />
                                        <p>Nhập thông tin HouseBill để nạp dữ liệu container...</p>
                                    </div>
                                    :
                                    <div className="react_grid_table">
                                        <Mtable
                                            tableData={this.state.tableData}
                                            columnsFormat={columnsFormat}
                                            rowsFormat={rowsFormat}
                                            rowsHeader={rowsHeader}
                                            reoderRow={true}
                                            onSearch={(tableData, searchValue) => handleRowsSearch(tableData, searchValue)}
                                            searchValue={formData.searchData}
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

export default TrackingHouseBill;
