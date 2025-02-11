import React, { Component, createRef } from "react";
import { Col, Row } from "antd";
import {
    BoldOutlined,
    DatabaseOutlined,
    LoadingOutlined,
    NumberOutlined,
} from "@ant-design/icons";
import { Mbutton, Mcard, Mdatepicker, Mtable, Winput } from "../../components/BasicUI/BasicUI";
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

class PinCodeTrackingGML extends Component {
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

                searchData: "",

                EdoCode: "",
                EdoCodeError: true,
                fromDate: moment(new Date()).startOf("day").toDate(),
                toDate: moment(new Date()).endOf("day").toDate(),
                EdoCodeRef: true,
            },
            modalVisibe: {
                updateCommandOrderVisible: false,
                updateContainerVisible: false,
                chooseShipRoute: false,
            },
            tableType: "point",
            tableData: [],
            isLoading: false,
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

    handleTypeChange = (returnValue) => {
        this.setState({
            tableType: returnValue,
        });
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
                        pinCodeError: false,
                    },
                    isLoading: false,
                }));
            }
        }, 1000);
    };

    handleSaveData = () => {
        console.log("save data");
    }

    hanldeChangeVisible = (modalName) => {
        this.setState((prevState) => ({
            modalVisibe: {
                ...prevState.modalVisibe,
                [modalName]: !prevState.modalVisibe[modalName],
            },
        }));
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

    render() {
        const { formData } = this.state;

        const inputForm = [
            {
                title: "Tra cứu theo số pin",
                tooltip: "Tra cứu theo số pin",
                placeholder: "Nhập số pin",
                inputIcon: <NumberOutlined />,
                name: "taxCode",
                type: "text",
                value: formData.taxCode,
                require: true
            },
            {
                title: "Số container",
                tooltip: "Số container",
                placeholder: "Nhập số container",
                inputIcon: <BoldOutlined />,
                name: "billForm",
                type: "text",
                value: formData.billForm,
                require: true
            },
        ];

        const columnsFormat = [
            { columnId: "STT", width: 50, resizable: true, header: "STT" },
            { columnId: "IsoSizetype", width: 200, resizable: true, header: "Mã Pin" },
            { columnId: "OperationCode", width: 200, resizable: true, reorderable: true, header: "Tác nghiệp" },
            { columnId: "FE", width: 150, resizable: true, reorderable: true, header: "Chủ hàng" },
            { columnId: "OperationName", width: 500, resizable: true, reorderable: true, header: "Đối tượng thanh toán" },
            { columnId: "CargoTypeName", width: 200, resizable: true, reorderable: true, header: "Số hoá đơn" },
            { columnId: "ShipperName", width: 200, resizable: true, reorderable: true, header: "Ghi chú" },
        ]

        const containerColumnsFormat = [
            { columnId: "STT", width: 50, resizable: true, header: "STT" },
            { columnId: "BLNo", width: 150, resizable: true, header: "Số Pincode" },
            { columnId: "ContainerNo", width: 200, resizable: true, reorderable: true, header: "Số Container" },
            { columnId: "IsoSizetype", width: 200, resizable: true, reorderable: true, header: "Kích cỡ ISO" },
            { columnId: "OperationCode", width: 150, resizable: true, reorderable: true, header: "Số xe" },
            { columnId: "IsoSizetype", width: 150, resizable: true, reorderable: true, header: "Tên tài xế" },
            { columnId: "FE", width: 150, resizable: true, reorderable: true, header: "Số điện thoại" },
            { columnId: "ClassName", width: 150, resizable: true, reorderable: true, header: "Số CMND" },
            { columnId: "emptyColumn", width: 150, resizable: true, reorderable: true, header: "Công cụ" },
            { columnId: "BookingNo", width: 150, resizable: true, reorderable: true, header: "QR code" },
        ]

        const rowsFormat = (container, index) => {
            return [
                { type: "text", nonEditable: true, text: String(index + 1) },
                { type: "text", nonEditable: false, text: container?.IsoSizetype || "" },
                { type: "text", nonEditable: false, text: container?.OperationCode || "" },
                { type: "text", nonEditable: false, text: container?.FE || "" },
                { type: "text", nonEditable: false, text: container?.OperationName || "" },
                { type: "text", nonEditable: false, text: container?.CargoTypeName || "" },
                { type: "text", nonEditable: false, text: container?.ShipperName || "" },
            ]
        };

        const containerRowsFormat = (container, index) => {
            return [
                { type: "text", nonEditable: true, text: String(index + 1) },
                { type: "text", nonEditable: false, text: container?.BLNo || "" },
                { type: "text", nonEditable: false, text: container?.ContainerNo || "" },
                { type: "text", nonEditable: false, text: container?.IsoSizetype || "" },
                { type: "text", nonEditable: false, text: container?.OperationCode || "" },
                { type: "text", nonEditable: false, text: container?.IsoSizetype || "" },
                { type: "text", nonEditable: false, text: container?.FE || "" },
                { type: "text", nonEditable: false, text: container?.ClassName || "" },
                { type: "text", nonEditable: false, text: container?.emptyColumn || "" },
                { type: "text", nonEditable: false, text: container?.BookingNo || "" },
            ]
        };

        const rowsHeader = [
            { type: "header", text: "STT" },
            { type: "header", text: "Mã Pin" },
            { type: "header", text: "Tác nghiệp" },
            { type: "header", text: "Chủ hàng" },
            { type: "header", text: "Đối tượng thanh toán" },
            { type: "header", text: "Số hoá đơn" },
            { type: "header", text: "Ghi chú" },
        ];

        const containerRowsHeader = [
            { type: "header", text: "STT" },
            { type: "header", text: "Số Pincode" },
            { type: "header", text: "Số Container" },
            { type: "header", text: "Kích cỡ ISO" },
            { type: "header", text: "Số xe" },
            { type: "header", text: "Tên tài xế" },
            { type: "header", text: "Số điện thoại" },
            { type: "header", text: "Số CMND" },
            { type: "header", text: "Công cụ" },
            { type: "header", text: "QR code" },
        ];

        return (
            <Content className="flex_layout-8-16_container pin_code_tracking_container">
                <Row className="flex_layout_card" gutter={[12, 12]}>
                    <Col lg={{ span: 8 }} sm={{ span: 24 }} xs={{ span: 24 }} >
                        <Mcard
                            title={<span className="mcard_header">Cập nhật thông tin lệnh</span>}
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
                                {inputForm.map((item, key) => this.renderInputField(item, key))}
                                <Row justify={"space-between"}>
                                    <Col lg={{ span: 9 }}>
                                        <Mbutton
                                            color=""
                                            className="m_button green"
                                            type="primary"
                                            htmlType="submit"
                                            block
                                            // onClick={this.handleSaveData}
                                            onClick={() => this.hanldeChangeVisible("updateContainerVisible")}
                                            // onClick={() => this.hanldeChangeVisible("updateCommandOrderVisible")}
                                            // ref={this.submitButtonRef}
                                            size={"12"}
                                            dataSource={{
                                                textbutton: `Lưu dữ liệu`,
                                                icon: "CloudUploadOutlined",
                                            }}
                                        />
                                    </Col>
                                    <Col lg={{ span: 14 }}>
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
                                                icon: "CloudDownloadOutlined",
                                            }}
                                        />
                                    </Col>
                                </Row>
                            </Col>
                        </Mcard>
                    </Col>
                    <Col className="layout_col" lg={{ span: 16 }} sm={{ span: 24 }} xs={{ span: 24 }}>
                        <Mcard
                            title={<span className="mcard_header">Danh sách lệnh</span>}
                            className="container_list"
                        >
                            {!this.state.isLoading ? (
                                !this.state.tableData[0] ? (
                                    <Col className="no_data">
                                        <Row justify={"center"}>
                                            <DatabaseOutlined className="no_data_icon" />
                                        </Row>
                                        <Row justify={"center"}>Nhập số pin để nạp dữ liệu lệnh...</Row>
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
                                            // exportExel: true,
                                            // saveData: (data) => {
                                            //   console.log(data);
                                            // },
                                            searchField: [
                                                "PinCode",
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
                    <Col className="layout_col" lg={{ span: 24 }} sm={{ span: 24 }} xs={{ span: 24 }}>
                        <Mcard
                            // title={<span style={{ color: 'white' }}>Danh sách container</span>}
                            className="container_list small_container"
                        >
                            <Row gutter={[12, 12]} className="vehical_type">
                                <Col>
                                    <Mbutton
                                        color=""
                                        className={`m_button ${this.state.tableType === "point" ? "third" : "third_border"}`}
                                        type="primary"
                                        htmlType="submit"
                                        onClick={() => { this.handleTypeChange("point") }}
                                        block
                                        size={"12"}
                                        dataSource={{
                                            textbutton: `Xe chỉ định`,
                                        }}
                                    />
                                </Col>
                                <Col>
                                    <Mbutton
                                        color=""
                                        className={`m_button ${this.state.tableType === "noPoint" ? "third" : "third_border"}`}
                                        type="primary"
                                        htmlType="submit"
                                        onClick={() => { this.handleTypeChange("noPoint") }}
                                        block
                                        size={"12"}
                                        dataSource={{
                                            textbutton: `Xe không chỉ định`,
                                        }}
                                    />
                                </Col>
                            </Row>

                            {
                                !this.state.isLoading ? (
                                    !this.state.tableData[0] ? (
                                        <Col className="no_data">
                                            <Row justify={"center"}>
                                                <DatabaseOutlined className="no_data_icon" />
                                            </Row>
                                            <Row justify={"center"}>Nhập số pin để nạp dữ liệu container...</Row>
                                        </Col>
                                    ) : (
                                        <>
                                            <Row style={{ display: this.state.tableType === "point" ? "block" : "none" }}>
                                                <Mtable
                                                    config={{
                                                        defaultData: this.state.tableData,
                                                        columnsFormat: containerColumnsFormat,
                                                        rowsFormat: containerRowsFormat,
                                                        rowsHeader: containerRowsHeader,
                                                        reorderRow: true,
                                                    }}
                                                    functionRequire={{
                                                        // addcolumn: true,
                                                        // deleteColumn: true,
                                                        // exportExel: true,
                                                        // saveData: (data) => {
                                                        //   console.log(data);
                                                        // },
                                                        searchField: [
                                                            "PinCode",
                                                            "ContainerNo"
                                                        ],
                                                    }}
                                                />
                                            </Row>
                                            <Row style={{ display: this.state.tableType === "noPoint" ? "block" : "none" }}>
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
                                                        // exportExel: true,
                                                        // saveData: (data) => {
                                                        //   console.log(data);
                                                        // },
                                                        searchField: [
                                                            "BLNo",
                                                            "ContainerNo"
                                                        ],
                                                    }}
                                                />
                                            </Row>
                                        </>
                                    )
                                ) : (
                                    <Row className="no_data" justify={"center"} align={"middle"}>
                                        <LoadingOutlined className="no_data_icon" />
                                    </Row>
                                )}

                        </Mcard>
                    </Col>
                </Row>
            </Content >
        );
    }
}

export default PinCodeTrackingGML;
