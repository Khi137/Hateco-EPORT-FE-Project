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
import { Mbutton, Mcard, Mcheckbox, Mdatepicker, Mselect, Mtable, Winput } from "../../components/BasicUI/BasicUI";
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

class Eirsrv extends Component {
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

                fromDate: moment(new Date()).startOf("day").toDate(),
                toDate: moment(new Date()).endOf("day").toDate(),

                getMeterial: true,
                lowerYard: true,
                emptyContainer: true,
                emptyReturn: true,

                packageCommon: true,
                packageBag: true,
                packageCold: true,
                packageCold50: true,
                packageSmallBag: true,
                packageCommon150: true,
                packageCold150: true,
                withdrawCommon20: true,
                withdrawCold20: true,
                withdrawCommon: true,
                withdrawBag: true,
                withdrawCold: true,
                withdrawPart30: true,
                withdrawPart30Bag: true,
                withdrawPartAfter30: true,
                withdrawPartAfter30Bag: true,
                packageIncrease20: true,
                packageIncreaseCold20: true,

                ContainerInspection: true,
                ContainerWeigh: true,
                ContainerWeighVGM: true,
                liftingCleaning: true,
                cutSeal: true,
                checkSeal: true,
                forcedContainer: true,
                removeNCover: true,
                liftingFixing: true,
                rentalRepair: true,
                checkDaggerContainer: true,
                plugUnplugContainer: true,
                cleanBack: true,
                plugFrezing: true,
                saveContainerField: true,
                withdrawBagService: true,
                checkContainer: true,
                heatContainer: true,
                sweepingClean: true,
                waterClean: true,
                chemicalsClean: true,
                weighingGoods: true,
                inspectionPortVehicle: true,
                inspectionCustomerVehicle: true,
            },
            radioValue: "pincode",
            tableData: [],
            isLoading: false,
            mode: "lifting"
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

    handleCheckboxChange = (value, name) => {
        console.log(value, name);
        this.setState(prevState => ({
            formData: {
                ...prevState.formData,
                [name]: !value
            }
        }));
    };

    changeMode = (type) => {
        this.setState({
            mode: type,
        });
    }

    handleLoadData = () => {
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

    renderCheckboxField = (item) => {
        return (
            <Col span={12}>
                <Mcheckbox dataSource={{
                    span: 12,
                    label: <Row><Row className="mcheckbox_label">{item.label}</Row></Row>,
                    value: item.value,
                    className: `${item.value && "m-checkbox_checked"}`,
                    name: item.name
                }}
                    onClick={() => this.handleCheckboxChange(item.value, item.name)}
                />
            </Col>
        )
    }

    render() {
        const { formData } = this.state;

        const inputForm = [
            {
                title: "Số lệnh, số pin, số container",
                tooltip: "Số lệnh, số pin, số container",
                placeholder: "Số lệnh, số pin, số container",
                inputIcon: <NumberOutlined />,
                name: "taxCode",
                type: "text",
                value: formData.taxCode,
            },
            {
                title: "Đối tượng thanh toán",
                tooltip: "Đối tượng thanh toán",
                placeholder: "Đối tượng thanh toán",
                inputIcon: <BoldOutlined />,
                name: "billForm",
                type: "text",
                value: formData.billForm,
            },
            {
                title: "Người tạo lệnh",
                tooltip: "Người tạo lệnh",
                placeholder: "Người tạo lệnh",
                inputIcon: <EnvironmentOutlined />,
                name: "billSymbol",
                type: "text",
                value: formData.billSymbol,
            },
        ];


        const checkboxForm = {
            lifting: [
                {
                    label: "LẤY NGUYÊN",
                    value: formData.getMeterial,
                    name: "getMeterial"
                },
                {
                    label: "HẠ BÃI",
                    value: formData.lowerYard,
                    name: "lowerYard"
                },
                {
                    label: "CẤP RỖNG",
                    value: formData.emptyContainer,
                    name: "emptyContainer"
                },
                {
                    label: "TRẢ RỖNG",
                    value: formData.emptyReturn,
                    name: "emptyReturn"
                }
            ],
            withdrawal: [
                {
                    label: "ĐÓNG HÀNG THƯỜNG",
                    value: formData.packageCommon,
                    name: "packageCommon"
                },
                {
                    label: "ĐÓNG HÀNG BAO",
                    value: formData.packageBag,
                    name: "packageBag"
                },
                {
                    label: "ĐÓNG HÀNG LẠNH",
                    value: formData.packageCold,
                    name: "packageCold"
                },
                {
                    label: "ĐÓNG HÀNG LẠNH TĂNG 50%",
                    value: formData.packageCold50,
                    name: "packageCold50"
                },
                {
                    label: "ĐÓNG HÀNG BỊCH",
                    value: formData.packageSmallBag,
                    name: "packageSmallBag"
                },
                {
                    label: "ĐÓNG HÀNG TĂNG 150%",
                    value: formData.packageCommon150,
                    name: "packageCommon150"
                },
                {
                    label: "ĐÓNG HÀNG LẠNH TĂNG 150%",
                    value: formData.packageCold50,
                    name: "packageCold50"
                },
                {
                    label: "RÚT HÀNG TĂNG 20%",
                    value: formData.withdrawCommon20,
                    name: "withdrawCommon20"
                },
                {
                    label: "RÚT HÀNG LẠNH TĂNG 20%",
                    value: formData.withdrawCommon,
                    name: "withdrawCommon"
                },
                {
                    label: "RÚT HÀNG THÔNG THƯỜNG",
                    value: formData.withdrawCold20,
                    name: "withdrawCold20"
                },
                {
                    label: "RÚT HÀNG BAO",
                    value: formData.withdrawBag,
                    name: "withdrawBag"
                },
                {
                    label: "RÚT HÀNG LẠNH",
                    value: formData.withdrawCold,
                    name: "withdrawCold"
                },
                {
                    label: "RÚT HÀNG 1 PHẦN < 30%",
                    value: formData.withdrawPart30,
                    name: "withdrawPart30"
                },
                {
                    label: "RÚT HÀNG 1 PHẦN < 30% HÀNG BAO",
                    value: formData.withdrawPart30Bag,
                    name: "withdrawPart30Bag"
                },
                {
                    label: "RÚT HÀNG 1 PHẦN > 30%",
                    value: formData.withdrawPartAfter30,
                    name: "withdrawPartAfter30"
                },
                {
                    label: "RÚT HÀNG 1 PHẦN > 30% HÀNG BAO",
                    value: formData.withdrawPartAfter30Bag,
                    name: "withdrawPartAfter30Bag"
                },
                {
                    label: "ĐÓNG HÀNG TĂNG 20%",
                    value: formData.packageIncrease20,
                    name: "packageIncrease20"
                },
                {
                    label: "ĐÓNG HÀNG LẠNH TĂNG 20%",
                    value: formData.packageIncreaseCold20,
                    name: "packageIncreaseCold20"
                },
            ],
            service: [
                {
                    label: "KIỂM ĐỊNH CONTAINER",
                    value: formData.ContainerInspection,
                    name: "ContainerInspection"
                },
                {
                    label: "CÂN CONT ( KHÔNG PHÁT HÀNH VGM )",
                    value: formData.ContainerWeigh,
                    name: "ContainerWeigh"
                },
                {
                    label: "CÂN CONT ( PHÁT HÀNH VGM )",
                    value: formData.ContainerWeighVGM,
                    name: "ContainerWeighVGM"
                },
                {
                    label: "NÂNG HẠ VỆ SINH",
                    value: formData.liftingCleaning,
                    name: "liftingCleaning"
                },
                {
                    label: "CẮT NIÊM PHONG CHÌ",
                    value: formData.cutSeal,
                    name: "cutSeal"
                },
                {
                    label: "DÁN - KIỂM TRA NIÊM PHONG CHÌ",
                    value: formData.checkSeal,
                    name: "checkSeal"
                },
                {
                    label: "CHẰNG BUỘC CONTAINER",
                    value: formData.forcedContainer,
                    name: "forcedContainer"
                },
                {
                    label: "THÁO / PHỦ BẠT CHE",
                    value: formData.removeNCover,
                    name: "removeNCover"
                },
                {
                    label: "NÂNG HẠ SỬA CHỮA",
                    value: formData.liftingFixing,
                    name: "liftingFixing"
                },
                {
                    label: "THUÊ BÃI VỆ SINH SỬA CHỮA",
                    value: formData.rentalRepair,
                    name: "rentalRepair"
                },
                {
                    label: "DÁN HOẶC THÁO NHÃN CONTAINER CHỨA HÀNG NGUY HIỂM",
                    value: formData.checkDaggerContainer,
                    name: "checkDaggerContainer"
                },
                {
                    label: "CẮM / RÚT PHÍCH ĐIỆN CHO CONTAINER LẠNH",
                    value: formData.plugUnplugContainer,
                    name: "plugUnplugContainer"
                },
                {
                    label: "VỆ SINH BÃI SAU KIỂM HÓA",
                    value: formData.cleanBack,
                    name: "cleanBack"
                },
                {
                    label: "CẮM ĐIỆN LẠNH",
                    value: formData.plugFrezing,
                    name: "plugFrezing"
                },
                {
                    label: "LƯU BÃI CONTAINER",
                    value: formData.saveContainerField,
                    name: "saveContainerField"
                },
                {
                    label: "RÚT HÀNG BAO",
                    value: formData.withdrawBagService,
                    name: "withdrawBagService"
                },
                {
                    label: "KIỂM HÓA, KIỂM ĐỊNH, GIÁM ĐỊNH",
                    value: formData.checkContainer,
                    name: "checkContainer"
                },
                {
                    label: "HUN TRÙNG",
                    value: formData.heatContainer,
                    name: "heatContainer"
                },
                {
                    label: "VỆ SINH QUÉT",
                    value: formData.sweepingClean,
                    name: "sweepingClean"
                },
                {
                    label: "VỆ SINH NƯỚC",
                    value: formData.waterClean,
                    name: "waterClean"
                },
                {
                    label: "VỆ SINH HÓA CHẤT",
                    value: formData.chemicalsClean,
                    name: "chemicalsClean"
                },
                {
                    label: "CÂN HÀNG XE CẢNG",
                    value: formData.weighingGoods,
                    name: "weighingGoods"
                },
                {
                    label: "KIỂM HÓA MÁY SOI - XE CẢNG",
                    value: formData.inspectionPortVehicle,
                    name: "inspectionPortVehicle"
                },
                {
                    label: "KIỂM HÓA MÁY SOI - XE CHỦ HÀNG",
                    value: formData.inspectionCustomerVehicle,
                    name: "inspectionCustomerVehicle"
                },
            ]
        }

        const columnsFormat = [
            { columnId: "STT", width: 50, resizable: true, header: "STT" },
            { columnId: "Action", width: 200, resizable: true, header: "Duyệt lệnh" },
            { columnId: "PinCode", width: 200, resizable: true, reorderable: true, header: "Số lệnh" },
            { columnId: "JobModeName", width: 150, resizable: true, reorderable: true, header: "Số Pin" },
            { columnId: "MethodName", width: 150, resizable: true, reorderable: true, header: "Ngày lệnh" },
            { columnId: "CargoTypeName", width: 150, resizable: true, reorderable: true, header: "Tàu/chuyến" },
            { columnId: "ShipperName", width: 150, resizable: true, reorderable: true, header: "Số vận đơn" },
            { columnId: "CustomerName", width: 150, resizable: true, reorderable: true, header: "Số booking" },
            { columnId: "emptyColumn", width: 150, resizable: true, reorderable: true, header: "Chủ hàng" },
            { columnId: "ShipperRepresent", width: 150, resizable: true, reorderable: true, header: "HTTT" },
            { columnId: "ShipperTel", width: 150, resizable: true, reorderable: true, header: "Số hoá đơn" },
            { columnId: "Note", width: 150, resizable: true, reorderable: true, header: "Số phiếu tính cước" },
            { columnId: "Note", width: 150, resizable: true, reorderable: true, header: "Tổng tiền" },
            { columnId: "Note", width: 150, resizable: true, reorderable: true, header: "Đối tượng thanh toán" },
            { columnId: "Note", width: 150, resizable: true, reorderable: true, header: "Người tạo" },
            { columnId: "Note", width: 150, resizable: true, reorderable: true, header: "Người đại diện/SĐT" },
            { columnId: "Note", width: 150, resizable: true, reorderable: true, header: "Ghi chú" },
            { columnId: "Note", width: 700, resizable: true, reorderable: true, header: "File đính kèm" },
        ]

        const containerColumnsFormat = [
            { columnId: "STT", width: 50, resizable: true, header: "STT" },
            { columnId: "Action", width: 300, resizable: true, header: "Tác nghiệp" },
            { columnId: "PinCode", width: 300, resizable: true, reorderable: true, header: "Tổng lệnh" },
            { columnId: "ContainerNo", width: 300, resizable: true, reorderable: true, header: "Tổng tiền hoá đơn" },
        ]

        const rowsFormat = (container, index) => {
            return [
                { type: "text", nonEditable: true, text: String(index + 1) },
                { type: "text", nonEditable: false, text: "Chỉnh sửa / file đính kèm" },
                { type: "text", nonEditable: false, text: container?.ShipperName || "" },
                { type: "text", nonEditable: false, text: container?.ShipperRepresent || "" },
                { type: "text", nonEditable: false, text: container?.MethodName || "" },
                { type: "text", nonEditable: false, text: container?.CargoTypeName || "" },
                { type: "text", nonEditable: false, text: container?.ShipperName || "" },
                { type: "text", nonEditable: false, text: container?.CustomerName || "" },
                { type: "text", nonEditable: false, text: container?.emptyColumn || "" },
                { type: "text", nonEditable: false, text: container?.ShipperRepresent || "" },
                { type: "text", nonEditable: false, text: container?.ShipperTel || "" },
                { type: "text", nonEditable: false, text: container?.Note || "" },
                { type: "text", nonEditable: false, text: container?.ShipperName || "" },
                { type: "text", nonEditable: false, text: container?.CustomerName || "" },
                { type: "text", nonEditable: false, text: container?.emptyColumn || "" },
                { type: "text", nonEditable: false, text: container?.ShipperRepresent || "" },
                { type: "text", nonEditable: false, text: container?.ShipperTel || "" },
                { type: "text", nonEditable: false, text: container?.Note || "" },
            ]
        };

        const containerRowsFormat = (container, index) => {
            return [
                { type: "text", nonEditable: true, text: String(index + 1) },
                { type: "text", nonEditable: false, text: container?.IsoSizetype || "" },
                { type: "text", nonEditable: false, text: container?.ContainerNo || "" },
                { type: "text", nonEditable: false, text: container?.ContainerNo || "" },
            ]
        };

        const rowsHeader = [
            { type: "header", text: "STT" },
            { type: "header", text: "Duyệt lệnh" },
            { type: "header", text: "Số lệnh" },
            { type: "header", text: "Số Pin" },
            { type: "header", text: "Ngày lệnh" },
            { type: "header", text: "Tàu/chuyến" },
            { type: "header", text: "Số vận đơn" },
            { type: "header", text: "Số booking" },
            { type: "header", text: "Chủ hàng" },
            { type: "header", text: "HTTT" },
            { type: "header", text: "Số hoá đơn" },
            { type: "header", text: "Số phiếu tính cước" },
            { type: "header", text: "Tổng tiền" },
            { type: "header", text: "Đối tượng thanh toán" },
            { type: "header", text: "Người tạo" },
            { type: "header", text: "Người đại diện/SĐT" },
            { type: "header", text: "Ghi chú" },
            { type: "header", text: "File đính kèm" },
        ];

        const containerRowsHeader = [
            { type: "header", text: "STT" },
            { type: "header", text: "Tác nghiệp" },
            { type: "header", text: "Tổng lệnh" },
            { type: "header", text: "Tổng tiền hoá đơn" },
        ];

        return (
            <Content className="flex_layout-8-16_container eirsrv_container">
                <Row className="flex_layout_card" gutter={[12, 12]}>
                    <Col lg={{ span: 8 }} sm={{ span: 24 }} xs={{ span: 24 }} >
                        <Mcard
                            title={<span className="mcard_header">Truy vấn thông tin lệnh</span>}
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
                                            id: "miningCompany2",
                                            ref: "miningCompany2",
                                            name: "miningCompany2",
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
                                <Row className="horizontal-line" />
                                <Row justify={"space-around"} gutter={[12, 12]}>
                                    <Col>
                                        <Mbutton
                                            color=""
                                            className={`m_button ${this.state.mode === "lifting" ? "third" : "third_border"}`}
                                            type="primary"
                                            htmlType="submit"
                                            block
                                            onClick={() => this.changeMode("lifting")}
                                            size={"12"}
                                            dataSource={{
                                                textbutton: `Nâng hạ`,
                                            }}
                                        />
                                    </Col>
                                    <Col>
                                        <Mbutton
                                            color=""
                                            className={`m_button ${this.state.mode === "withdrawal" ? "third" : "third_border"}`}
                                            type="primary"
                                            htmlType="submit"
                                            block
                                            onClick={() => this.changeMode("withdrawal")}
                                            size={"12"}
                                            dataSource={{
                                                textbutton: `Đóng rút`,
                                            }}
                                        />
                                    </Col>
                                    <Col>
                                        <Mbutton
                                            color=""
                                            className={`m_button ${this.state.mode === "service" ? "third" : "third_border"}`}
                                            type="primary"
                                            htmlType="submit"
                                            block
                                            onClick={() => this.changeMode("service")}
                                            size={"12"}
                                            dataSource={{
                                                textbutton: `Dịch vụ`,
                                            }}
                                        />
                                    </Col>
                                </Row>
                                <Row className="checkbox_field">
                                    {
                                        checkboxForm[this.state.mode].map(index => {
                                            return (
                                                this.renderCheckboxField(index)
                                            )
                                        })
                                    }
                                </Row>
                                <Row justify={"space-between"}>

                                    <Col span={24}>
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
                        <Mcard
                            // title={<span style={{ color: 'white' }}>Danh sách container</span>}
                            className=" small_container"
                        >
                            {!this.state.isLoading ? (
                                !this.state.tableData[0] ? (
                                    <Col className="no_data">
                                        <Row justify={"center"}>
                                            <DatabaseOutlined className="no_data_icon" />
                                        </Row>
                                        <Row justify={"center"}>Nhập số pin để nạp dữ liệu container...</Row>
                                    </Col>
                                ) : (
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
                                                "ContainerNo"
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
            </Content >
        );
    }
}

export default Eirsrv;
