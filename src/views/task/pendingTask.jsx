import React, { Component, createRef } from "react";
import { Col, Layout, Row } from "antd";
import {
    BarcodeOutlined,
    BoldOutlined,
    DatabaseOutlined,
    EnvironmentOutlined,
    LoadingOutlined,
    NumberOutlined,
    SearchOutlined,
} from "@ant-design/icons";
import { Mbutton, Mcard, Mcheckbox, Mradio, Mtable, Winput } from "../../components/BasicUI/BasicUI";
import { formatDateTime, formatPrice } from "../../utils/util";
import { Content, Header } from "antd/es/layout/layout";

const rowData = [
    {
        "AcceptBy": null,
        "AcceptTime": null,
        "AllowedTruckWeight": null,
        "AttachOrderNo": null,
        "BLNo": null,
        "BargeKey": null,
        "BookingNo": "LINH092211",
        "CargoTypeCode": "MT",
        "CargoTypeName": "Empty",
        "Class": null,
        "ClassCode": "2",
        "ClassName": "Storage Empty",
        "Commodity": null,
        "ContainerNo": "CMAU7189586",
        "ContainerStatusCode": "S",
        "ContainerStatusName": "Stacking",
        "CreatedBy": "Admin",
        "CreatedTime": "2022-03-04T14:45:39.000Z",
        "CurrencyCode": "VND",
        "CusHold": null,
        "CustomerCode": "0101255692",
        "CustomerName": "CÔNG TY LIÊN DOANH ĐIỀU HÀNH \"VIETGAZPROM\"",
        "CustomerTypeCode": "FWD",
        "DeleteBy": null,
        "DeleteTime": null,
        "DeliveryOrder": null,
        "DepotId": null,
        "DraftNo": "GML/2022/030000008",
        "DriverHostId": null,
        "DriverName": null,
        "ETB": null,
        "ETD": null,
        "ExpDate": "2022-03-05T23:59:59.000Z",
        "ExpPluginDate": null,
        "FE": "E",
        "FPOD": "CKAIU",
        "FreeDay": null,
        "HousebillNo": null,
        "IDNumber": null,
        "ID_CTN_TOS": null,
        "ID_TOS": null,
        "Index": "220304000001-0",
        "InvTotalAmount": null,
        "InvoiceDate": null,
        "InvoiceNo": null,
        "IsAccepted": false,
        "IsCFSChange": false,
        "IsCFSStuff": false,
        "IsCFSUnstuff": false,
        "IsComplete": false,
        "IsLoLo": true,
        "IsLocalForeign": "F",
        "IsPostToTos": 0,
        "IsServiceNonCont": false,
        "IsServiceYard": false,
        "IsTruckBarge": "T",
        "IsoSizetype": "45G0",
        "IssueDate": "2022-03-04T14:45:39.000Z",
        "JobModeCode": "CAPR",
        "JobModeName": "CẤP RỖNG",
        "Location": null,
        "MCWeight": null,
        "MappingMethod": "Truck",
        "MaxGrossWeight": null,
        "MethodName": "BÃI - XE",
        "MoneyCredit": "M",
        "Note": "/  - Cảng xếp : CKAIT - Cảng dỡ : CKAIT - Cảng đích : CKAIU / VỆ SINH NƯỚC PIN:GML22030434509",
        "OogBack": null,
        "OogFront": null,
        "OogLeft": null,
        "OogRight": null,
        "OogTop": null,
        "OperationCode": "CMA",
        "OperationName": "CMA CGM",
        "OprExpDate": null,
        "OrderNo": "220304000001",
        "OrderStatus": "P",
        "OrderType": "Eir",
        "POD": "CKAIT",
        "POL": "CKAIT",
        "ParentOrderNo": "220304000001",
        "PinCode": "GML22030418784-001",
        "Relocation": null,
        "Rowguid": "8E978D3E-C54C-4F34-B54F-1978DD555DC9",
        "Sealno": null,
        "Sealno1": null,
        "Sealno2": null,
        "ShipperName": "A",
        "ShipperRepresent": "A",
        "ShipperTel": "A",
        "TEU": 2,
        "TaxCode": "0101255692",
        "Temperature": null,
        "TotalAmount": 388800,
        "TransactionId": null,
        "TransitCode": null,
        "TransitName": null,
        "TruckCompany": null,
        "TruckNo": "",
        "TruckTel": null,
        "TruckWeight": null,
        "Unno": null,
        "VGM": false,
        "Vent": null,
        "VentUnit": null,
        "VesselCode": null,
        "VesselExVoy": null,
        "VesselImVoy": null,
        "VesselKey": "STORE",
        "VesselName": null,
        "sort_code": "220304000001_1_220304000001"
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

class PendingTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                pinCode: "",
                pinCodeError: true,
                containerNo: "",
                containerNoError: true,

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
        this.containerNoRef = createRef();
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

    handleRadioChange = (returnValue) => {
        this.setState({
            radioValue: returnValue,
        });
    };

    handleLoadData = () => {
        const pinCodeError = this.state.formData.pinCodeError;
        if (pinCodeError) {
            this.pinCodeRef?.current?.handleCheckError();
            return;
        }
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

    changeMode = (type) => {
        this.setState({
            mode: type,
        });
    }

    handleCheckboxChange = (value, name) => {
        console.log(value, name);
        this.setState(prevState => ({
            formData: {
                ...prevState.formData,
                [name]: !value
            }
        }));
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
                    label: <Row><Row style={{ userSelect: "none" }}>{item.label}</Row></Row>,
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
                title: "Mã Container",
                tooltip: "Nhập số container",
                placeholder: "Nhập số container",
                inputIcon: <NumberOutlined />,
                name: "containerNo",
                type: "text",
                value: formData.containerNo,
                require: true,
                ref: this.containerNoRef,
                error: formData.containerNoError,
            },
        ];

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
            { columnId: "PinCode", width: 150, resizable: true, reorderable: true, header: "Số Pin" },
            { columnId: "TotalAmount", width: 150, resizable: true, reorderable: true, header: "Số tiền" },
            { columnId: "CurrencyCode", width: 150, resizable: true, reorderable: true, header: "Loại" },
            { columnId: "IsComplete", width: 150, resizable: true, reorderable: true, header: "Thanh toán" },
            { columnId: "JobModeName", width: 150, resizable: true, reorderable: true, header: "Phương án" },
            { columnId: "ExpDate", width: 150, resizable: true, reorderable: true, header: "Hạn lệnh" },
            { columnId: "ContainerNo", width: 150, resizable: true, reorderable: true, header: "Số contianer" },
            { columnId: "OperationCode", width: 150, resizable: true, reorderable: true, header: "Hãng tàu" },
            { columnId: "BookingNo", width: 150, resizable: true, reorderable: true, header: "Số Booking" },
            { columnId: "BLNo", width: 150, resizable: true, reorderable: true, header: "Số vận đơn" },
            { columnId: "IsoSizetype", width: 150, resizable: true, reorderable: true, header: "Kích cỡ ISO" },
            { columnId: "emptyColumn", width: 150, resizable: true, reorderable: true, header: "Trọng lượng" },
            { columnId: "emptyColumn", width: 150, resizable: true, reorderable: true, header: "Tàu chuyến" },
            { columnId: "ShipperName", width: 150, resizable: true, reorderable: true, header: "Chủ hàng" },
            { columnId: "CargoTypeName", width: 150, resizable: true, reorderable: true, header: "Loại hàng" },
            { columnId: "emptyColumn", width: 150, resizable: true, reorderable: true, header: "Hàng hoá" },
            { columnId: "POD", width: 150, resizable: true, reorderable: true, header: "Cảng xếp" },
            { columnId: "POL", width: 150, resizable: true, reorderable: true, header: "Cảng dỡ" },
            { columnId: "FPOD", width: 150, resizable: true, reorderable: true, header: "Cảng đích" },
            { columnId: "emptyColumn", width: 150, resizable: true, reorderable: true, header: "Nội/ngoại" },
            { columnId: "CustomerName", width: 150, resizable: true, reorderable: true, header: "ĐTTT" },
            { columnId: "CreatedTime", width: 150, resizable: true, reorderable: true, header: "Ngày tạo lệnh" },
            { columnId: "Note", width: 700, resizable: true, reorderable: true, header: "Ghi chú" },
            { columnId: "emptyColumn", width: 150, resizable: true, reorderable: true, header: "Thanh lý hải quan" },
            { columnId: "APITOS", width: 150, resizable: true, reorderable: true, header: "API TOS" },
            { columnId: "File", width: 150, resizable: true, reorderable: true, header: "File đính kèm" },
        ]

        const rowsFormat = (container, index) => {
            return [
                { type: "text", nonEditable: true, text: String(index + 1) },
                { type: "text", nonEditable: false, text: container?.PinCode.split("-")[0] || "" },
                { type: "text", nonEditable: false, text: container?.TotalAmount ? formatPrice(container?.TotalAmount) : "" },
                { type: "text", nonEditable: false, text: container?.CurrencyCode || "" },
                { type: "text", nonEditable: false, text: container?.IsComplete || "" },
                { type: "text", nonEditable: false, text: container?.BLNo || "" },
                { type: "text", nonEditable: false, text: container?.JobModeName || "" },
                { type: "text", nonEditable: false, text: container?.ExpDate ? formatDateTime(container?.ExpDate) : "" },
                { type: "text", nonEditable: false, text: container?.ContainerNo || "" },
                { type: "text", nonEditable: false, text: container?.OperationCode || "" },
                { type: "text", nonEditable: false, text: container?.BookingNo || "" },
                { type: "text", nonEditable: false, text: container?.IsoSizetype || "" },
                { type: "text", nonEditable: false, text: container?.emptyColumn || "" },
                { type: "text", nonEditable: false, text: container?.emptyColumn || "" },
                { type: "text", nonEditable: false, text: container?.ShipperName || "" },
                { type: "text", nonEditable: false, text: container?.CargoTypeName || "" },
                { type: "text", nonEditable: false, text: container?.emptyColumn || "" },
                { type: "text", nonEditable: false, text: container?.POD || "" },
                { type: "text", nonEditable: false, text: container?.POL || "" },
                { type: "text", nonEditable: false, text: container?.FPOD || "" },
                { type: "text", nonEditable: false, text: container?.emptyColumn || "" },
                { type: "text", nonEditable: false, text: container?.CustomerName || "" },
                { type: "text", nonEditable: false, text: container?.CreatedTime || "" },
                { type: "text", nonEditable: false, text: container?.Note || "" },
                { type: "text", nonEditable: false, text: container?.emptyColumn || "" },
                { type: "text", nonEditable: false, text: container?.APITOS || "" },
                { type: "text", nonEditable: false, text: container?.File || "" },
            ]
        };

        const rowsHeader = [
            { type: "header", text: "STT" },
            { type: "header", text: "Số Pin" },
            { type: "header", text: "Số tiền" },
            { type: "header", text: "Loại" },
            { type: "header", text: "Thanh toán" },
            { type: "header", text: "Phương án" },
            { type: "header", text: "Hạn lệnh" },
            { type: "header", text: "Số contianer" },
            { type: "header", text: "Hãng tàu" },
            { type: "header", text: "Số Booking" },
            { type: "header", text: "Số vận đơn" },
            { type: "header", text: "Kích cỡ ISO" },
            { type: "header", text: "Trọng lượng" },
            { type: "header", text: "Tàu chuyến" },
            { type: "header", text: "Chủ hàng" },
            { type: "header", text: "Loại hàng" },
            { type: "header", text: "Hàng hoá" },
            { type: "header", text: "Cảng xếp" },
            { type: "header", text: "Cảng dỡ" },
            { type: "header", text: "Cảng đích" },
            { type: "header", text: "Nội/ngoại" },
            { type: "header", text: "ĐTTT" },
            { type: "header", text: "Ngày tạo lệnh" },
            { type: "header", text: "Ghi chú" },
            { type: "header", text: "Thanh lý hải quan" },
            { type: "header", text: "API TOS" },
            { type: "header", text: "File đính kèm" },
        ];

        return (
            <Content className="flex_layout-8-16_container" >
                <Row gutter={[12, 12]}>
                    <Col lg={{ span: 8 }} sm={{ span: 24 }} xs={{ span: 24 }} >
                        <Mcard
                            title={<span style={{ color: 'white', minHeight: "40vh" }}>Duyệt lệnh</span>}
                            className="flex_card"
                        >
                            <Col className="input_layout tracking_bill_input">
                                <Row >
                                    <Mradio
                                        dataSource={{
                                            value: this.state.radioValue,
                                            label: "Select an option",
                                            options: [
                                                { label: "Số Pincode", value: "pincode" },
                                                { label: "Số Container", value: "container" },
                                            ],
                                        }}
                                        onChangeValue={(returnValue) =>
                                            this.handleRadioChange(returnValue.undefined)
                                        }
                                    />
                                </Row>
                                {(this.state.radioValue === "pincode"
                                    ? pincodeForm
                                    : inputForm
                                ).map((item, key) => this.renderInputField(item, key))}
                                <Mradio
                                    dataSource={{
                                        label: "Hình thức thanh toán",
                                        options: [
                                            { label: "Lệnh mới", value: "1" },
                                            { label: "Lệnh chờ duyệt", value: "2" },
                                            { label: "Lệnh khởi tạo", value: "3" },
                                            { label: "Đã duyệt", value: "4" },
                                        ],
                                        defaultValue: "1",
                                        className: "pending_task_radio_item",
                                    }}
                                />
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
                                <Row style={{ marginTop: 12, maxHeight: "30vh", overflowY: "scroll", overflowX: "hidden" }}>
                                    {
                                        checkboxForm[this.state.mode].map(index => {
                                            return (
                                                this.renderCheckboxField(index)
                                            )
                                        })
                                    }
                                </Row>
                                <Row justify={"space-between"}>
                                    <Col span={8}>
                                        <Mbutton
                                            color=""
                                            className="m_button third_border"
                                            type="primary"
                                            htmlType="submit"
                                            block
                                            // onClick={this.handleLoadData}
                                            size={"12"}
                                            dataSource={{
                                                textbutton: `Bật thông báo`,
                                                icon: "BellOutlined",
                                            }}
                                        />
                                    </Col>
                                    <Col span={15}>
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
                            title={<span style={{ color: 'white', minHeight: "40vh" }}>Danh sách container</span>}
                            className="container_list"
                        >
                            {!this.state.isLoading ? (
                                !this.state.tableData[0] ? (
                                    <Col className="no_data">
                                        <Row justify={"center"}>
                                            <DatabaseOutlined className="no_data_icon" />
                                        </Row>
                                        <Row justify={"center"}>Nhập thông tin HouseBill để nạp dữ liệu container...</Row>
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
                                            // editColum: true,

                                            exportExel: true,
                                            // importExel: true,

                                            // approve: true,
                                            // saveData: (data) => {
                                            //     console.log(data);
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
            </Content >
        );
    }
}

export default PendingTask;
