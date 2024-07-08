import React, { Component, createRef } from 'react';
import '../tracking.scss'
import './styles.scss'
import { Col, Row } from 'antd';
import { BarcodeOutlined, BoldOutlined, DatabaseOutlined, EnvironmentOutlined, LoadingOutlined, NumberOutlined, SearchOutlined } from '@ant-design/icons';
import { Mbutton, Mradio, Mtable, Winput } from '../../../components/BasicUI';
import { formatDateTime } from '../../../utils/util';

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

for (let index = 0; index < 100; index++) {
    const duplicatedData = { ...rowData[0] };
    duplicatedData.ContainerNo = generateRandomContainerNo();
    rowData.push(duplicatedData);
}

class TrackingBill extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                pinCode: "",
                pinCodeError: true,

                taxCode: "",
                billForm: "",
                billSymbol: "",
                billNumber: "",

                searchData: ""
            },
            radioValue: "pincode",
            tableData: [],
            isLoading: false,
        };
        this.submitButtonRef = createRef();
        this.pinCodeRef = createRef();
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
    };

    handleLoadData = () => {
        this.setState({ isLoading: true })
        const pinCodeError = this.state.formData.pinCodeError
        if (pinCodeError) {
            this.pinCodeRef?.current?.handleCheckError()
            return
        }
        if (this.submitButtonRef.current) {
            this.submitButtonRef.current.loading();
        }
        setTimeout(() => {
            if (this.submitButtonRef.current) {
                this.submitButtonRef.current.reset();
                this.setState(prevState => ({
                    tableData: rowData,
                    formData: {
                        ...prevState.formData,
                        pinCodeError: false
                    },
                    isLoading: false
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
                    error={typeof item?.error === "string" ? item?.error : false}
                    ref={item.ref}
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
                require: true,
                ref: this.pinCodeRef,
                error: formData.pinCodeError,
            },
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
                    { type: 'text', nonEditable: false, text: container?.ContainerStatusName || "" }
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
        ]

        return (
            <div className='tracking-bill_container tracking_container'>
                <div className='content'>
                    <div className="input_content">
                        <Row className='header body-md-normal'>
                            Truy vấn thông tin hóa đơn
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
                        <div className="input_container">
                            {(this.state.radioValue === "pincode" ?
                                pincodeForm
                                :
                                inputForm
                            ).map((item, key) => this.renderInputField(item, key))}
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
                                dataSource={{
                                    textbutton: `Nạp dữ liệu`,
                                    icon: "CloudDownloadOutlined"
                                }}
                            />
                        </div>
                    </div>
                    <div className="container_list">
                        <Row className='header body-md-normal'>
                            Danh sách container
                        </Row>
                        {
                            !this.state.isLoading ?
                                !this.state.tableData[0] ?
                                    <div className="no_data">
                                        <div>
                                            <DatabaseOutlined style={{ fontSize: '64px' }} />
                                            <p>Nhập thông tin HouseBill để nạp dữ liệu container...</p>
                                        </div>
                                    </div>
                                    :
                                    <Mtable
                                        config={{
                                            defaultData: this.state.tableData,
                                            columnsFormat: columnsFormat,
                                            rowsFormat: rowsFormat,
                                            rowsHeader: rowsHeader,
                                            reoderRow: true,
                                        }}
                                        functionRequire={{
                                            addcolumn: true,
                                            deleteColumn: true,
                                            exportExel: true,
                                            // saveData: () => { this.saveData() },
                                            searchField: ["ContainerNumber", "OperationCode", "IsoSizetype"],
                                        }}
                                    />
                                :
                                <div className="loading_container">
                                    <LoadingOutlined style={{ fontSize: '64px' }} />
                                </div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default TrackingBill
