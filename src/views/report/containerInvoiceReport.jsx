import React, { Component, createRef } from "react";
import { Content } from "antd/es/layout/layout";
import moment from "moment";
import './style.scss'
import {
    DownloadOutlined,
    SearchOutlined,
    DatabaseOutlined,
    LoadingOutlined,
    CloseOutlined,
} from "@ant-design/icons";
import {
    Mbutton,
    Mcard,
    Mdatepicker,
    Mselect,
    Mtable,
    Winput,
    Mdivider,
    Mradio,
} from "../../components/BasicUI/BasicUI";

import {

} from "../../components/Mrender";
import { formatDateTime } from "../../utils/util";
import { Col, Row, Tooltip, Modal } from "antd";

const rowData = [
    {
        Rowguid: "20383CFB-35E4-454E-BA7E-C112ADE17335",
        TerminalCode: null,
        VesselKey: "TBA",
        VesselImVoy: null,
        VesselExVoy: null,
        ETB: null,
        ETD: null,
        BargeKey: null,
        BargeImVoy: null,
        BargeExVoy: null,
        DeliveryOrder: null,
        BLNo: null,
        BookingNo: "50940502",
        HousebillNo: null,
        ContainerNo: "TCNU8698362",
        ClassCode: "3",
        OperationCode: "HLC",
        FE: "F",
        ContainerStatusCode: "D",
        CargoTypeCode: "GP",
        Commodity: null,
        LocalSizetype: "4500",
        IsoSizetype: "45G0",
        IsLocalForeign: "F",
        JobModeCodeIn: "HBAI",
        MethodCodeIn: "T",
        DateIn: "2021-04-10T19:44:22.000Z",
        DateOut: "2021-04-14T12:54:30.000Z",
        JobModeCodeOut: "LAYN",
        MethodCodeOut: "V",
        EirInNo: null,
        EirOutNo: null,
        StuffNo: null,
        UnstuffNo: null,
        ServiceNo: null,
        DraftNo: null,
        InvoiceNo: null,
        Block: "A6",
        Bay: "06",
        Row: "02",
        Tier: "4",
        Area: null,
        VGM: true,
        MCWeight: null,
        TareWeight: null,
        Sealno: null,
        Sealno1: null,
        Sealno2: "8256247",
        POL: "VNHPH",
        POD: "VNHPH",
        FPOD: null,
        TransitCode: null,
        TransitPort: null,
        Temperature: null,
        Vent: null,
        VentUnit: null,
        Class: null,
        Unno: null,
        OogTop: null,
        OogLeft: null,
        OogRight: null,
        OogBack: null,
        OogFront: null,
        CusHold: false,
        TerHold: false,
        TerHoldReason: null,
        IsReturnBack: false,
        IsSpecialWarning: false,
        SpecialWarning: null,
        ContainerCondition: null,
        IsTruckBarge: "T",
        TruckNo: null,
        RemoocNo: null,
        Note: null,
        ID_TOS: "0000000671104",
        CreatedBy: "catos_ndv",
        CreatedTime: "2021-04-06T10:36:05.000Z",
        ModifiedBy: "catos_ndv",
        ModifiedTime: "2021-04-06T10:37:01.000Z",
        MaxGrossWeight: null,
        XuatNeo: null,
        XuatPhao: null,
        ClassName: "Export",
        CargoTypeName: "General",
        ContainerStatusName: "Delivered",
        BookingType: true,
        BookingDate: "2021-04-06T10:35:25.000Z",
        ExpDate: null,
        BookingAmount: 1,
        StackingAmount: 0,
        ShipperName: "shipperName",
        BookingStatus: 0,
        VesselName: "To Be Assign",
        Humidity: null,
        O2: null,
        CO2: null,
        BookingReleaseDate: null,
        UserGroupRank: null,
        OperationName: "CÔNG TY TNHH HAPAG- LLOYD  (VIET NAM)",
        CallSign: null,
        VETB: "2017-02-01T00:00:00.000Z",
        VETD: "2017-02-01T00:00:00.000Z",
        VImVoy: null,
        VExVoy: null,
        // Test
        DiemThuPhi: "Cảng NVD",
        MaGiaoDich: "GIAO123",
        SoHoaDon: "HD123",
        NgayLapHoaDon: "2021-04-06T10:36:05.000Z",
        SoPhieuTinhCuoc: "PC123",
        SoPin: "PIN123",
        MaBieuCuoc: "BC123",
        DienGiai: "Diễn giải",
        DoiTuongThanhToan: "Đối tượng A",
        MaSoThue: "MST123",
        ThanhTien: 1000,
        PhanTramThue: 10,
        VAT: 100,
        TongCong: 1100,
        LoaiTien: "VND",
        LapBoi: "Người lập",
        GhiChu: "Ghi chú",
    },
];

const rowModalData = [
    {
        // Test
        MaKhachHang: "KHCNVD12  ",
        TenKhachHang: "Nguyễn Văn A",
        DiaChi: "Quận 4, TP HCM",
        MaSoThue: "MST123",
        Email: "PC123@gmail.com",
        DienThoai: "0927857245",
    },
];

const rowTacNghiepData = [
    {
        // Test
        TacNghiep: "TNDICHUYEN  ",
        SoLuong: 2,
        TongTien: 10000000,
    },
];
const dataSource = [
    {
        type: "divider",
        label: "Điểm thu phí",
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

for (let index = 0; index < 20; index++) {
    const duplicatedData = { ...rowData[0] };
    duplicatedData.MaSoThue = generateRandomContainerNo();
    rowData.push(duplicatedData);

    const duplicatedModalData = { ...rowModalData[0] };
    duplicatedModalData.MaSoThue = generateRandomContainerNo();
    rowModalData.push(duplicatedModalData);

    const duplicatedTacNghiepData = { ...rowTacNghiepData[0] };
    duplicatedTacNghiepData.TacNghiep = generateRandomContainerNo();
    rowTacNghiepData.push(duplicatedTacNghiepData);
}

class containerInvoiceReport extends Component {

    constructor(props) {
        super(props);
        this.state = {
            formData: {
                EdoCode: "",
                EdoCodeError: true,
                fromDate: moment(new Date()).startOf("day").toDate(),
                toDate: moment(new Date()).endOf("day").toDate(),
                EdoCodeRef: true,

            },
            modalVisible: false,
            tableData: [],
            modalData: [],
            tacNghiepData: [],
            radioValue: "option1",
        };
        this.submitButtonRef = createRef();
    }
    showModal = () => {
        this.setState({ modalVisible: true });
        console.log("Modalvisible showmodal", this.state.modalVisible);
    };
    handleOk = () => {
        this.setState({ modalVisible: false });
    };

    handleCancel = () => {
        this.setState({ modalVisible: false });
    };
    componentDidMount() {
        console.log("Hello");
        this.handleLoadData();
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
                    errorText={item?.error && item?.error}
                    ref={item.ref}
                />
            </Row>
        );
    };
    handleRadioChange = (returnValue) => {
        this.setState({
            radioValue: returnValue,
        });
    };
    handleLoadData = () => {

        this.setState({ isLoading: true });
        if (this.submitButtonRef.current) {
            this.submitButtonRef.current.loading();
        }
        setTimeout(() => {
            if (this.submitButtonRef.current) {
                this.submitButtonRef.current.reset();
                this.setState((prevState) => ({
                    generalInformation: rowData[0] ? rowData[0] : {},
                    tableData: rowData,
                    modalData: rowModalData,
                    tacNghiepData: rowTacNghiepData,
                    formData: {
                        ...prevState.formData,
                    },
                    isLoading: false,
                }));
                console.log("Updated tacNghiepData:", this.state.tacNghiepData);
            }
        }, 1000);
    };

    render() {
        console.log(this.state.tacNghiepData);
        const { formData, generalInformation } = this.state;
        const generalInformationList = [
            {
                title: "Tổng tiền",
                // value: generalInformation.OperationCode ? "Booking chỉ định" : "",
            },
        ];
        const columnsFormat = [
            { columnId: "STT", width: 50, resizable: true, header: "STT" },
            { columnId: "DiemThuPhi", width: 150, resizable: true, reorderable: true, header: "Điểm thu phí" },
            { columnId: "MaGiaoDich", width: 150, resizable: true, reorderable: true, header: "Mã giao dịch" },
            { columnId: "SoHoaDon", width: 150, resizable: true, reorderable: true, header: "Số hoá đơn" },
            { columnId: "NgayLapHoaDon", width: 150, resizable: true, reorderable: true, header: "Ngày lập hoá đơn" },
            { columnId: "SoPhieuTinhCuoc", width: 150, resizable: true, reorderable: true, header: "Hướng" },
            { columnId: "SoPin", width: 150, resizable: true, reorderable: true, header: "Số pin" },
            { columnId: "MaBieuCuoc", width: 150, resizable: true, reorderable: true, header: "Max biểu cước" },
            { columnId: "DienGiai", width: 150, resizable: true, reorderable: true, header: "Diễn giải" },
            { columnId: "DoiTuongThanhToan", width: 150, resizable: true, reorderable: true, header: "Đối tượng thanh toán" },
            { columnId: "MaSoThue", width: 150, resizable: true, reorderable: true, header: "Mã số thuế" },
            { columnId: "ThanhTien", width: 150, resizable: true, reorderable: true, header: "Thành tiền" },
            { columnId: "PhanTramThue", width: 150, resizable: true, reorderable: true, header: "Phần trăm thuế" },
            { columnId: "VAT", width: 150, resizable: true, reorderable: true, header: "VAT" },
            { columnId: "TongCong", width: 150, resizable: true, reorderable: true, header: "Tổng cộng" },
            { columnId: "LoaiTien", width: 150, resizable: true, reorderable: true, header: "Loại tiền" },
            { columnId: "LapBoi", width: 150, resizable: true, reorderable: true, header: "Lập bởi" },
            { columnId: "GhiChu", width: 150, resizable: true, reorderable: true, header: "Ghi chú" }
        ]
        const rowsFormat = (invoice, index) => {
            return [
                { type: "text", nonEditable: true, text: String(index + 1) },
                { type: "text", text: invoice?.DiemThuPhi !== null && invoice?.DiemThuPhi !== undefined ? String(invoice?.DiemThuPhi) : "" },
                { type: "text", text: invoice?.MaGiaoDich !== null && invoice?.MaGiaoDich !== undefined ? String(invoice?.MaGiaoDich) : "" },
                { type: "text", text: invoice?.SoHoaDon !== null && invoice?.SoHoaDon !== undefined ? String(invoice?.SoHoaDon) : "" },
                { type: "text", text: invoice?.NgayLapHoaDon !== null && invoice?.NgayLapHoaDon !== undefined ? String(invoice?.NgayLapHoaDon) : "" },
                { type: "text", text: invoice?.SoPhieuTinhCuoc !== null && invoice?.SoPhieuTinhCuoc !== undefined ? String(invoice?.SoPhieuTinhCuoc) : "" },
                { type: "text", text: invoice?.SoPin !== null && invoice?.SoPin !== undefined ? String(invoice?.SoPin) : "" },
                { type: "text", text: invoice?.MaBieuCuoc !== null && invoice?.MaBieuCuoc !== undefined ? String(invoice?.MaBieuCuoc) : "" },
                { type: "text", text: invoice?.DienGiai !== null && invoice?.DienGiai !== undefined ? String(invoice?.DienGiai) : "" },
                { type: "text", text: invoice?.DoiTuongThanhToan !== null && invoice?.DoiTuongThanhToan !== undefined ? String(invoice?.DoiTuongThanhToan) : "" },
                { type: "text", text: invoice?.MaSoThue !== null && invoice?.MaSoThue !== undefined ? String(invoice?.MaSoThue) : "" },
                { type: "text", text: invoice?.ThanhTien !== null && invoice?.ThanhTien !== undefined ? String(invoice?.ThanhTien) : "" },
                { type: "text", text: invoice?.PhanTramThue !== null && invoice?.PhanTramThue !== undefined ? String(invoice?.PhanTramThue) : "" },
                { type: "text", text: invoice?.VAT !== null && invoice?.VAT !== undefined ? String(invoice?.VAT) : "" },
                { type: "text", text: invoice?.TongCong !== null && invoice?.TongCong !== undefined ? String(invoice?.TongCong) : "" },
                { type: "text", text: invoice?.LoaiTien !== null && invoice?.LoaiTien !== undefined ? String(invoice?.LoaiTien) : "" },
                { type: "text", text: invoice?.LapBoi !== null && invoice?.LapBoi !== undefined ? String(invoice?.LapBoi) : "" },
                { type: "text", text: invoice?.GhiChu !== null && invoice?.GhiChu !== undefined ? String(invoice?.GhiChu) : "" },

            ]
        };

        const rowsHeader = [
            { type: "header", text: "STT" },
            { type: "header", text: "Điểm thu phí" },
            { type: "header", text: "Mã giao dịch" },
            { type: "header", text: "Số hoá đơn" },
            { type: "header", text: "Ngày lập hoá đơn" },
            { type: "header", text: "Số phiếu tính cước" },
            { type: "header", text: "Số pin" },
            { type: "header", text: "Mã biểu cước" },
            { type: "header", text: "Diễn giải" },
            { type: "header", text: "Đối tượng thanh toán" },
            { type: "header", text: "Mã số thuế" },
            { type: "header", text: "Thành tiền" },
            { type: "header", text: "% Thuế" },
            { type: "header", text: "VAT" },
            { type: "header", text: "Tổng cộng" },
            { type: "header", text: "Loại tiền" },
            { type: "header", text: "Lập bởi" },
            { type: "header", text: "Ghi chú" }
        ];


        const columnsModalFormat = [
            { columnId: "MaKhachHang", width: 200, resizable: true, header: "Mã khách hàng" },
            { columnId: "TenKhachHang", width: 200, resizable: true, reorderable: true, header: "Tên khách hàng" },
            { columnId: "DiaChi", width: 200, resizable: true, reorderable: true, header: "Địa chỉ" },
            { columnId: "MaSoThue", width: 200, resizable: true, reorderable: true, header: "Mã số thuế" },
            { columnId: "Email", width: 200, resizable: true, reorderable: true, header: "Email" },
            { columnId: "DienThoai", width: 150, resizable: true, reorderable: true, header: "Điện thoại" }
        ];
        const rowsModalFormat = (customer, index) => {
            return [
                { type: "text", text: customer?.MaKhachHang !== null && customer?.MaKhachHang !== undefined ? String(customer?.MaKhachHang) : "" },
                { type: "text", text: customer?.TenKhachHang !== null && customer?.TenKhachHang !== undefined ? String(customer?.TenKhachHang) : "" },
                { type: "text", text: customer?.DiaChi !== null && customer?.DiaChi !== undefined ? String(customer?.DiaChi) : "" },
                { type: "text", text: customer?.MaSoThue !== null && customer?.MaSoThue !== undefined ? String(customer?.MaSoThue) : "" },
                { type: "text", text: customer?.Email !== null && customer?.Email !== undefined ? String(customer?.Email) : "" },
                { type: "text", text: customer?.DienThoai !== null && customer?.DienThoai !== undefined ? String(customer?.DienThoai) : "" },

            ]
        };

        const rowsModalHeader = [
            { type: "header", text: "Mã khách hàng" },
            { type: "header", text: "Tên khách hàng" },
            { type: "header", text: "Địa chỉ" },
            { type: "header", text: "Mã số thuế" },
            { type: "header", text: "Email" },
            { type: "header", text: "Điện thoại" },

        ];
        const columnsTacNghiepFormat = [
            { columnId: "TacNghiep", width: 200, resizable: true, header: "Tác nghiệp" },
            { columnId: "SoLuong", width: 200, resizable: true, reorderable: true, header: "Số lượng" },
            { columnId: "TongTien", width: 200, resizable: true, reorderable: true, header: "Tổng tiền" },
        ];
        const rowsTacNghiepFormat = (customer, index) => {
            return [
                { type: "text", text: customer?.TacNghiep !== null && customer?.TacNghiep !== undefined ? String(customer?.TacNghiep) : "" },
                { type: "text", text: customer?.SoLuong !== null && customer?.SoLuong !== undefined ? String(customer?.SoLuong) : "" },
                { type: "text", text: customer?.TongTien !== null && customer?.TongTien !== undefined ? String(customer?.TongTien) : "" },
            ]
        };
        const rowsTacNghiepHeader = [
            { type: "header", text: "Tác nghiệp" },
            { type: "header", text: "Số lượng" },
            { type: "header", text: "Tổng tiền" },
        ];
        const inputForm = [
            {
                title: "Đối tượng thanh toán",
                tooltip: "Đối tượng thanh toán",
                placeholder: "Đối tượng thanh toán",
                inputIcon: <DownloadOutlined />,
                name: "doituongthanhtoan",
                type: "text",
                value: null,
                require: true,
                ref: null,
            },
        ];

        return (

            <Content className='flex_layout-8-16_container' >
                <Row gutter={[12, 12]}>
                    <Col lg={{ span: 8 }} sm={{ span: 24 }}>
                        <Mcard
                            title={<span style={{ color: 'white' }}>Báo cáo hoá đơn theo tác nghiệp</span>}
                        >
                            <Col className='input_layout'>
                                <Row justify={"space-between"}>
                                    <Col>
                                        <Row>Từ ngày</Row>
                                        <Mdatepicker
                                            dataSource={{
                                                value: formData.fromDate,
                                                format: "YYYY-MM-DD HH:mm:ss",
                                                defaultValue: formData.fromDate,
                                                id: "my-datepicker",
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
                                                required: true,
                                                lockbefore: true,
                                                propReadonly: false,
                                                className: 'date_input '
                                            }}
                                        />
                                    </Col>
                                </Row>
                            </Col>
                            <Col className=''>
                                <Row justify="space-between" align="middle">
                                    <Col xs={24} sm={18} md={20} lg={21} className="col_doituongthanhtoan">
                                        {inputForm.map((item, key) => this.renderInputField(item, key))}
                                    </Col>
                                    <Col xs={24} sm={6} md={4} lg={3}>
                                        <Mbutton
                                            color=""
                                            className=" search-btn"
                                            block
                                            border="none"
                                            size={"12"}
                                            onClick={this.showModal}
                                            dataSource={{
                                                textbutton: ` `,
                                                icon: "SearchOutlined",
                                            }}
                                        />

                                    </Col>
                                </Row>
                            </Col>
                            <Col>
                                <div className="heThong">
                                    <Mdivider
                                        dataSource={{
                                            label: "Hệ thống - Loại tác nghiệp",
                                        }}
                                    />

                                    <Mradio
                                        dataSource={{
                                            value: this.state.radioValue,
                                            label: "Select an option",
                                            options: [
                                                { label: "Tất cả", value: "option1" },
                                                { label: "Smartport", value: "option2" },
                                                { label: "TOS", value: "option3" },
                                            ],
                                            radioStyle: {
                                                display: 'flex',
                                                flexDirection: 'row',
                                                justifyContent: 'flex-start',
                                                flexWrap: 'nowrap'
                                            },
                                        }}
                                        onChangeValue={this.handleRadioChange}
                                    />
                                    <Mradio
                                        dataSource={{
                                            value: this.state.radioValue,
                                            label: "Select an option",
                                            options: [
                                                { label: "Tất cả", value: "option1" },
                                                { label: "Nâng hạ", value: "option2" },
                                                { label: "Đóng rút", value: "option3" },
                                                { label: "Dịch vụ", value: "option4" },
                                            ],
                                            radioStyle: {
                                                display: 'flex',
                                                flexDirection: 'row',
                                                justifyContent: 'flex-start',
                                                flexWrap: 'nowrap'
                                            },
                                        }}
                                        onChangeValue={this.handleRadioChange}
                                    />
                                </div>
                            </Col>

                            <Col className='input_layout'>
                                <div className="div-loaddata">
                                    <Mbutton
                                        color=""
                                        className="m_button btn-loaddata"
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
                                </div>

                            </Col>
                            <Col className='input_layout'>
                                <Mdivider
                                    dataSource={{
                                        label: "Thống kê",
                                    }}
                                />
                                <Col className="general_information_content">
                                    {generalInformationList.map((item, index) => {
                                        return (
                                            <Row className="information_content_item" key={index} justify={"space-between"}>
                                                <Col className="item_title">{item.title}:</Col>
                                                {item.value ? (
                                                    <Col className="item_value body-xl-normal">{item.value}</Col>
                                                ) : (
                                                    <span className="item_value dashed-line body-xl-bold m-red-text"></span>
                                                )}
                                            </Row>
                                        );
                                    })}
                                </Col>
                            </Col>
                            <Mdivider
                                dataSource={{
                                    label: "Tác nghiệp",
                                }}
                            />
                            <div className="mtable-tacnghiep">
                                <Mtable
                                    config={{
                                        defaultData: this.state.tacNghiepData,
                                        columnsFormat: columnsTacNghiepFormat,
                                        rowsFormat: rowsTacNghiepFormat,
                                        rowsHeader: rowsTacNghiepHeader,
                                        reorderRow: true,
                                    }}
                                    functionRequire={{
                                        // addcolumn: true,
                                        // deleteColumn: true,
                                        // exportExel: true,
                                        // saveData: () => { this.saveData() },
                                        searchField: [

                                        ],

                                    }}
                                />
                            </div>

                        </Mcard>
                    </Col>
                    <Col lg={{ span: 16 }} sm={{ span: 24 }}>
                        <Mcard
                            title={<span style={{ color: 'white' }}>Bảng báo cáo hoá đơn theo tác nghiệp</span>}
                        >{!this.state.isLoading ? (
                            !this.state.tableData[0] ? (
                                <Col className="no_data">
                                    <Row justify={"center"}>
                                        <DatabaseOutlined className="no_data_icon" />
                                    </Row>
                                    <Row justify={"center"}>Loading</Row>
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
                                        // saveData: () => { this.saveData() },
                                        searchField: [
                                            "SoHoaDon",
                                            "MaGiaoDich",
                                            "MaBieuCuoc",
                                        ],
                                    }}
                                />
                            )
                        ) : (
                            <Row className="no_data" justify={"center"} align={"middle"}>
                                <LoadingOutlined style={{ fontSize: "64px" }} />
                            </Row>
                        )}
                        </Mcard>

                    </Col>
                </Row >

                {/* Modal for search button */}
                <Modal
                    title="Chọn khách hàng"
                    open={this.state.modalVisible}
                    onCancel={this.handleCancel}
                    closeIcon={<CloseOutlined />}
                    footer={null}
                    className="custom-wide-modal-report"
                >
                    <Mtable
                        config={{
                            defaultData: this.state.modalData,
                            columnsFormat: columnsModalFormat,
                            rowsFormat: rowsModalFormat,
                            rowsHeader: rowsModalHeader,
                            reorderRow: true,
                        }}
                        functionRequire={{
                            // addcolumn: true,
                            // deleteColumn: true,
                            //exportExel: true,
                            // saveData: () => { this.saveData() },
                            searchField: [
                                "MaSoThue",
                            ],

                        }}
                    />

                </Modal>
            </Content >
        )
    }
}

export default containerInvoiceReport
