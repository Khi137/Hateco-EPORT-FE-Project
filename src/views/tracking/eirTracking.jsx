import React, { Component, createRef } from "react";
import { Col, Row, Tooltip } from "antd";
import {
    BoldOutlined,
    DatabaseOutlined,
    EnvironmentOutlined,
    InfoCircleOutlined,
    LoadingOutlined,
    NumberOutlined,
} from "@ant-design/icons";
import { Mbutton, Mcard, Mdatepicker, Mselect, Mtable, Winput } from "../../components/BasicUI/BasicUI";
import { formatDateTime } from "../../utils/util";
import { Content } from "antd/es/layout/layout";
import moment from "moment";

const rowData = [
    {
        Area: null,
        BLNo: "HDMUSELA06055400",
        BargeExVoy: null,
        BargeImVoy: null,
        BargeKey: null,
        Bay: "06",
        Block: "KT",
        BookingAmount: 1,
        BookingDate: "2022-01-06T17:22:52.000Z",
        BookingNo: "ABC",
        BookingReleaseDate: null,
        BookingStatus: 2,
        BookingType: true,
        CO2: null,
        CallSign: null,
        CargoTypeCode: "MT",
        CargoTypeName: "Empty",
        Class: null,
        ClassCode: "2",
        ClassName: "Storage Empty",
        Commodity: null,
        ContainerCondition: null,
        ContainerNo: "HDMU7603991",
        ContainerStatusCode: "S",
        ContainerStatusName: "Stacking",
        CreatedBy: "trammtm",
        CreatedTime: "2022-01-06T17:22:52.000Z",
        CusHold: false,
        DateIn: "2021-03-07T03:14:41.000Z",
        DateOut: null,
        DeliveryOrder: null,
        DraftNo: null,
        ETB: null,
        ETD: null,
        EirInNo: null,
        EirOutNo: null,
        ExpDate: "2022-01-29T23:59:59.000Z",
        FE: "E",
        FPOD: "",
        HousebillNo: null,
        Humidity: null,
        ID_TOS: "0000000639599",
        InvoiceNo: null,
        IsLocalForeign: "F",
        IsReturnBack: false,
        IsSpecialWarning: false,
        IsTruckBarge: null,
        IsoSizetype: "42P0",
        JobModeCodeIn: "CI",
        JobModeCodeOut: null,
        LocalSizetype: "40FR",
        MCWeight: null,
        MaxGrossWeight: null,
        MethodCodeIn: "C",
        MethodCodeOut: null,
        ModifiedBy: "trammtm",
        ModifiedTime: "2022-01-06T17:23:19.000Z",
        Note: " / ",
        O2: null,
        OogBack: null,
        OogFront: null,
        OogLeft: null,
        OogRight: null,
        OogTop: null,
        OperationCode: "HMM",
        OperationName: "HYUNDAI MERCHANT MARINE CO;LTD",
        POD: "",
        POL: "",
        RemoocNo: null,
        Row: "05",
        Rowguid: "F246A4EA-EB54-468A-8C74-646F5E20CA8A",
        Sealno: null,
        Sealno1: null,
        Sealno2: null,
        ServiceNo: null,
        ShipperName: "abc",
        SpecialWarning: null,
        StackingAmount: 0,
        StuffNo: null,
        TareWeight: null,
        Temperature: null,
        TerHold: false,
        TerHoldReason: null,
        TerminalCode: "f9a0050f-04d4-4184-96ae-d462382de6f2",
        Tier: "3",
        TransitCode: null,
        TransitPort: "VNHPH",
        TruckNo: null,
        Unno: null,
        UnstuffNo: null,
        UserGroupRank: null,
        VETB: null,
        VETD: null,
        VExVoy: null,
        VGM: false,
        VImVoy: null,
        Vent: null,
        VentUnit: null,
        VesselExVoy: null,
        VesselImVoy: null,
        VesselKey: null,
        VesselName: null,
        XuatNeo: null,
        XuatPhao: null,
    },
];

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

class EirTracking extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                edoCode: "",
                bookingNumber: "",
                pinCode: "",

                fromDate: moment(new Date()).startOf("day").toDate(),
                toDate: moment(new Date()).endOf("day").toDate(),
                edoCodeError: true,
                bookingNumberError: true,
            },
            tableData: [],
        };
        this.submitButtonRef = createRef();
        this.pinCodeRef = createRef();
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

    handleSelect = (e) => {
        console.log(e);
    };

    handleLoadData = () => {
        // const pinCodeError = this.state.formData.pinCodeError;
        // if (pinCodeError) {
        //     this.pinCodeRef?.current?.handleCheckError();
        //     return;
        // }
        this.setState({ isLoading: true });
        if (this.submitButtonRef.current) {
            this.submitButtonRef.current.loading();
        }
        setTimeout(() => {
            if (this.submitButtonRef.current) {
                this.submitButtonRef.current.reset();
                this.setState((prevState) => ({
                    tableData: rowData,
                    formData: {
                        ...prevState.formData,
                    },
                    isLoading: false,
                }));
            }
        }, 1000);
    };

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
                    disabled={item.disable}
                />
            </Row>
        );
    };

    render() {
        const { formData } = this.state;

        const inputForm = [
            {
                title: "Mã số EDO",
                tooltip: "Mã số EDO",
                placeholder: "Mã số EDO",
                inputIcon: <NumberOutlined />,
                name: "edoCode",
                type: "text",
                value: formData.edoCode,
                require: true,
                disable: formData.bookingNumber !== "",
            },
            {
                title: "Số Booking",
                tooltip: "Số Booking",
                placeholder: "Số Booking",
                inputIcon: <BoldOutlined />,
                name: "bookingNumber",
                type: "text",
                value: formData.bookingNumber,
                require: true,
                disable: formData.edoCode !== "",
            },
            {
                title: "Pincode",
                tooltip: "Pincode",
                placeholder: "Pincode",
                inputIcon: <EnvironmentOutlined />,
                name: "billSymbol",
                type: "text",
                value: formData.billSymbol,
            },
        ]

        const columnsFormat = [
            { columnId: "STT", width: 50, resizable: true, header: "STT" },
            { columnId: "ContainerNo", width: 150, resizable: true, reorderable: true, header: "Số Container" },
            { columnId: "OperationCode", width: 150, resizable: true, reorderable: true, header: "Hãng Tàu" },
            { columnId: "IsoSizetype", width: 150, resizable: true, reorderable: true, header: "Kích cỡ" },
            { columnId: "CargoTypeName", width: 150, resizable: true, reorderable: true, header: "Full/Empty" },
            { columnId: "ClassName", width: 150, resizable: true, reorderable: true, header: "Hướng" },
            { columnId: "ExpDate", width: 150, resizable: true, reorderable: true, header: "Hạn Booking" },
            { columnId: "Position", width: 150, resizable: true, reorderable: true, header: "Vị trí bãi" },
            { columnId: "DateIn", width: 150, resizable: true, reorderable: true, header: "Ngày vào bãi" },
            { columnId: "DateOut", width: 150, resizable: true, reorderable: true, header: "Ngày ra bãi" },
            { columnId: "ContainerStatusName", width: 150, resizable: true, reorderable: true, header: "Tình trạng cont" }
        ]

        const rowsFormat = (container, index) => {
            return [
                { type: "text", nonEditable: true, text: String(index + 1) },
                { type: "text", nonEditable: false, text: container?.ContainerNo || "" },
                { type: "text", nonEditable: false, text: container?.OperationCode || "" },
                { type: "text", nonEditable: false, text: container?.IsoSizetype || "" },
                { type: "text", nonEditable: false, text: container?.CargoTypeName || "" },
                { type: "text", nonEditable: false, text: container?.ClassName || "" },
                { type: "text", nonEditable: false, text: container?.ExpDate ? formatDateTime(container?.ExpDate) : "" },
                { type: "text", nonEditable: false, text: (container?.Block || "") + "-" + (container?.Bay || "") + "-" + (container?.Row || "") + "-" + (container?.Tier || "") },
                { type: "text", nonEditable: false, text: container?.DateIn ? formatDateTime(container?.DateIn) : "" },
                { type: "text", nonEditable: false, text: container?.DateOut ? formatDateTime(container?.DateOut) : "" },
                { type: "text", nonEditable: false, text: container?.ContainerStatusName || "" }
            ]
        };

        const rowsHeader = [
            { type: "header", text: "STT" },
            { type: "header", text: "e-Eir" },
            { type: "header", text: "Phương án" },
            { type: "header", text: "Số Pin" },
            { type: "header", text: "Mã lệnh (EDO)" },
            { type: "header", text: "Số Booking" },
            { type: "header", text: "Số Container" },
            { type: "header", text: "Số vận đơn" },
            { type: "header", text: "Hãng khai thác" },
            { type: "header", text: "Kích cỡ ISO" },
            { type: "header", text: "F/E" },
        ];

        return (
            <Content className="flex_layout-8-16_container">
                <Row gutter={[12, 12]}>
                    <Col lg={{ span: 8 }} sm={{ span: 24 }} xs={{ span: 24 }}>
                        <Mcard
                            title={<span className="mcard_header">Tra cứu EIR điện tử</span>}
                            className="flex_card"
                        >
                            <Col className="input_layout">
                                <Row justify={"space-between"}>
                                    <Col>
                                        <Row>Từ ngày</Row>
                                        <Mdatepicker
                                            dataSource={{
                                                value: formData.fromDate,
                                                format: "YYYY-MM-DD HH:mm:ss",
                                                defaultValue: formData.fromDate,
                                                id: "my-datepicker",
                                                // label: 'Select Date',
                                                // span: { xs: 24, sm: 12, md: 8 },
                                                required: true,
                                                lockbefore: true,
                                                propReadonly: false,
                                                className: "ant-picker-borderless"
                                            }}
                                        />
                                    </Col>
                                    <Col>
                                        <Row>Đến ngày</Row>
                                        <Mdatepicker
                                            dataSource={{
                                                value: formData.toDate,
                                                format: "YYYY-MM-DD HH:mm:ss",
                                                defaultValue: formData.toDate,
                                                id: "my-datepicker",
                                                // label: 'Select Date',
                                                // span: { xs: 24, sm: 12, md: 8 },
                                                required: true,
                                                lockbefore: true,
                                                propReadonly: false,
                                                className: "date_input",
                                            }}
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Row>
                                        <Col>
                                            Chọn hãng khai thác <span className="item_require">*</span>
                                        </Col>
                                        <Tooltip
                                            placement="top"
                                            title={"Chọn hãng khai thác"}
                                            className="item_tooltip"
                                        >
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
                                    <Row className="Winput_error_text">
                                        {this.miningCompanyError}
                                    </Row>
                                </Row>
                                {inputForm.map((item, key) => this.renderInputField(item, key))}
                                <Mbutton
                                    color=""
                                    className="m_button third pt_button"
                                    type="primary"
                                    htmlType="submit"
                                    block
                                    onClick={this.handleLoadData}
                                    ref={this.submitButtonRef}
                                    size={"12"}
                                    dataSource={{
                                        textbutton: `Nạp dữ liệu`,
                                        icon: "CloudDownloadOutlined",
                                    }}
                                />
                            </Col>
                        </Mcard>
                    </Col>
                    <Col className="layout_col" lg={{ span: 16 }} sm={{ span: 24 }} xs={{ span: 24 }}>
                        <Mcard
                            title={<span className="mcard_header">Danh sách container</span>}
                            className="container_list"
                        >
                            {!this.state.isLoading ? (
                                !this.state.tableData[0] ? (
                                    <Col className="no_data">
                                        <Row justify={"center"}>
                                            <DatabaseOutlined className="no_data_icon" />
                                        </Row>
                                        <Row justify={"center"}>Nhập mã số Edo hoặc số Booking để nạp dữ liệu container...</Row>
                                    </Col>
                                ) : (
                                    <Mtable
                                        config={{
                                            defaultData: this.state.tableData,
                                            columnsFormat: columnsFormat,
                                            rowsFormat: rowsFormat,
                                            rowsHeader: rowsHeader,
                                            reorderRow: true,
                                        }}
                                        functionRequire={{
                                            // addcolumn: true,
                                            // deleteColumn: true,
                                            exportExel: true,
                                            // saveData: () => {
                                            //   this.saveData();
                                            // },
                                            searchField: [
                                                "ContainerNo",
                                                "OperationCode",
                                                "IsoSizetype",
                                            ],
                                        }}
                                    />
                                )
                            ) : (
                                <Row className="no_data" justify={"center"} align={"middle"}>
                                    <LoadingOutlined className="no_data_icon" />
                                </Row>
                            )}
                        </Mcard>
                    </Col>
                </Row>
            </Content>
        );
    }
}

export default EirTracking;
