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
        HangKhaiThac: "Maersk",
        SoContainer: "MSKU1234567",
        KichCoISO: "40HC",
        TauChuyen: "MAERSK EINDHOVEN / 123E",
        Huong: "IMPORT",
        TrangThaiContainer: "Full",
        SoBooking: "123456789",
        SoVanDon: "MAEU987654321",
        TacNghiep: "Nhập",
        ViTri: "A12B34",
        CangXep: "HKHKG",
        CangDo: "VNSGN",
        CangDich: "VNSGN",
        NgayNhap: "2024-07-10T08:00:00.000Z",
        NgayXuat: "2024-07-15T14:00:00.000Z",
        SoNgayLuuBai: 5,
        LoaiHang: "Dry",
        HangHoa: "Electronics",
        TrongLuong: 20000,
        VGM: 21000,
        NhietDo: null,
        ThongGio: false,
        DonViTG: "KG",
        Class: null,
        Unno: null,
        SoNiemChi: "ABC123",
        SoNiemChi2: "DEF456",
        SoNiemChi3: "GHI789",
        TinhTrangContainer: "Good",
        FE: "F",
        ThanhLyHQ: true,
        NoiNgoai: "Nội",
        GhiChu: "Hàng dễ vỡ, xin nhẹ tay",
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
    duplicatedData.SoContainer = generateRandomContainerNo();
    rowData.push(duplicatedData);

    const duplicatedModalData = { ...rowModalData[0] };
    duplicatedModalData.MaSoThue = generateRandomContainerNo();
    rowModalData.push(duplicatedModalData);
}

class containerStorageReport extends Component {

    constructor(props) {
        super(props);
        this.state = {
            formData: {
                EdoCode: "",
                EdoCodeError: true,
                fromDate: moment(new Date()).startOf("day").toDate(),
                toDate: moment(new Date()).endOf("day").toDate(),
                EdoCodeRef: true,
                stackingSelectValue: "stacking",
            },
            modalVisible: false,
            tableData: [],
            modalData: [],
            radioValue: "option1",
        };
        this.submitButtonRef = createRef();
    }
    handleSelectChange = (value) => {
        this.setState({ selectValue: value });
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
        this.setState({ stackingSelectValue: "stacking" });
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
                    formData: {
                        ...prevState.formData,
                    },
                    isLoading: false,
                }));
                console.log("Table Data:", this.state.tableData);
            }
        }, 1000);
    };

    render() {
        const { formData, generalInformation } = this.state;
        const generalInformationList = [
            {
                title: "Loại booking",
                // value: generalInformation.OperationCode ? "Booking chỉ định" : "",
            },
            {
                title: "Hãng khai thác",
                // value: generalInformation.OperationCode,
            },
            {
                title: "Kích cỡ ISO",
                // value: generalInformation.IsoSizetype,
            },
            {
                title: "Số lượng cấp",
                // value: generalInformation.BookingAmount,
            },
            {
                title: "Đã cấp",
                // value: generalInformation.StackingAmount,
            },
        ];
        const columnsFormat = [
            { columnId: "STT", width: 50, resizable: true, header: "STT" },
            { columnId: "HangKhaiThac", width: 150, resizable: true, reorderable: true, header: "Điểm thu phí" },
            { columnId: "SoContainer", width: 150, resizable: true, reorderable: true, header: "Hãng khai thác" },
            { columnId: "KichCoISO", width: 150, resizable: true, reorderable: true, header: "Số Container" },
            { columnId: "TauChuyen", width: 150, resizable: true, reorderable: true, header: "Kích cỡ (ISO)" },
            { columnId: "Huong", width: 150, resizable: true, reorderable: true, header: "Hướng" },
            { columnId: "TrangThaiContainer", width: 150, resizable: true, reorderable: true, header: "Trạng thái Container" },
            { columnId: "SoBooking", width: 150, resizable: true, reorderable: true, header: "Số booking" },
            { columnId: "SoVanDon", width: 150, resizable: true, reorderable: true, header: "Số vận đơn" },
            { columnId: "TacNghiep", width: 150, resizable: true, reorderable: true, header: "Tác nghiệp" },
            { columnId: "ViTri", width: 150, resizable: true, reorderable: true, header: "Vị trí" },
            { columnId: "CangXep", width: 150, resizable: true, reorderable: true, header: "Cảng xếp" },
            { columnId: "CangDo", width: 150, resizable: true, reorderable: true, header: "Cảng dỡ" },
            { columnId: "CangDich", width: 150, resizable: true, reorderable: true, header: "Cảng đích" },
            { columnId: "NgayNhap", width: 150, resizable: true, reorderable: true, header: "Ngày nhập" },
            { columnId: "NgayXuat", width: 150, resizable: true, reorderable: true, header: "Ngày xuất" },
            { columnId: "SoNgayLuuBai", width: 150, resizable: true, reorderable: true, header: "Số ngày lưu bãi" },
            { columnId: "LoaiHang", width: 150, resizable: true, reorderable: true, header: "Loại hàng" },
            { columnId: "HangHoa", width: 150, resizable: true, reorderable: true, header: "Hàng hoá" },
            { columnId: "TrongLuong", width: 150, resizable: true, reorderable: true, header: "Trọng lượng" },
            { columnId: "VGM", width: 150, resizable: true, reorderable: true, header: "VGM" },
            { columnId: "NhietDo", width: 150, resizable: true, reorderable: true, header: "Nhiệt độ" },
            { columnId: "ThongGio", width: 150, resizable: true, reorderable: true, header: "Thông gió" },
            { columnId: "DonViTG", width: 150, resizable: true, reorderable: true, header: "Đơn vị TG" },
            { columnId: "Class", width: 150, resizable: true, reorderable: true, header: "Class" },
            { columnId: "Unno", width: 150, resizable: true, reorderable: true, header: "Unno" },
            { columnId: "SoNiemChi", width: 150, resizable: true, reorderable: true, header: "Số niêm chì" },
            { columnId: "SoNiemChi2", width: 150, resizable: true, reorderable: true, header: "Số niêm chì 2" },
            { columnId: "SoNiemChi3", width: 150, resizable: true, reorderable: true, header: "Số niêm chì 3" },
            { columnId: "TinhTrangContainer", width: 150, resizable: true, reorderable: true, header: "Tình trạng Container" },
            { columnId: "FE", width: 150, resizable: true, reorderable: true, header: "F/E" },
            { columnId: "ThanhLyHQ", width: 150, resizable: true, reorderable: true, header: "Thanh lý HQ" },
            { columnId: "NoiNgoai", width: 150, resizable: true, reorderable: true, header: "Nội/Ngoại" },
            { columnId: "GhiChu", width: 150, resizable: true, reorderable: true, header: "Ghi chú" },
        ]
        const rowsFormat = (invoice, index) => {
            return [
                { type: "text", nonEditable: true, text: String(index + 1) },
                { type: "text", text: invoice?.HangKhaiThac !== null && invoice?.HangKhaiThac !== undefined ? String(invoice?.HangKhaiThac) : "" },
                { type: "text", text: invoice?.SoContainer !== null && invoice?.SoContainer !== undefined ? String(invoice?.SoContainer) : "" },
                { type: "text", text: invoice?.KichCoISO !== null && invoice?.KichCoISO !== undefined ? String(invoice?.KichCoISO) : "" },
                { type: "text", text: invoice?.TauChuyen !== null && invoice?.TauChuyen !== undefined ? String(invoice?.TauChuyen) : "" },
                { type: "text", text: invoice?.Huong !== null && invoice?.Huong !== undefined ? String(invoice?.Huong) : "" },
                { type: "text", text: invoice?.TrangThaiContainer !== null && invoice?.TrangThaiContainer !== undefined ? String(invoice?.TrangThaiContainer) : "" },
                { type: "text", text: invoice?.SoBooking !== null && invoice?.SoBooking !== undefined ? String(invoice?.SoBooking) : "" },
                { type: "text", text: invoice?.SoVanDon !== null && invoice?.SoVanDon !== undefined ? String(invoice?.SoVanDon) : "" },
                { type: "text", text: invoice?.TacNghiep !== null && invoice?.TacNghiep !== undefined ? String(invoice?.TacNghiep) : "" },
                { type: "text", text: invoice?.ViTri !== null && invoice?.ViTri !== undefined ? String(invoice?.ViTri) : "" },
                { type: "text", text: invoice?.CangXep !== null && invoice?.CangXep !== undefined ? String(invoice?.CangXep) : "" },
                { type: "text", text: invoice?.CangDo !== null && invoice?.CangDo !== undefined ? String(invoice?.CangDo) : "" },
                { type: "text", text: invoice?.CangDich !== null && invoice?.CangDich !== undefined ? String(invoice?.CangDich) : "" },
                { type: "text", text: invoice?.NgayNhap !== null && invoice?.NgayNhap !== undefined ? String(invoice?.NgayNhap) : "" },
                { type: "text", text: invoice?.NgayXuat !== null && invoice?.NgayXuat !== undefined ? String(invoice?.NgayXuat) : "" },
                { type: "text", text: invoice?.SoNgayLuuBai !== null && invoice?.SoNgayLuuBai !== undefined ? String(invoice?.SoNgayLuuBai) : "" },
                { type: "text", text: invoice?.LoaiHang !== null && invoice?.LoaiHang !== undefined ? String(invoice?.LoaiHang) : "" },
                { type: "text", text: invoice?.HangHoa !== null && invoice?.HangHoa !== undefined ? String(invoice?.HangHoa) : "" },
                { type: "text", text: invoice?.TrongLuong !== null && invoice?.TrongLuong !== undefined ? String(invoice?.TrongLuong) : "" },
                { type: "text", text: invoice?.VGM !== null && invoice?.VGM !== undefined ? String(invoice?.VGM) : "" },
                { type: "text", text: invoice?.NhietDo !== null && invoice?.NhietDo !== undefined ? String(invoice?.NhietDo) : "" },
                { type: "text", text: invoice?.ThongGio !== null && invoice?.ThongGio !== undefined ? String(invoice?.ThongGio) : "" },
                { type: "text", text: invoice?.DonViTG !== null && invoice?.DonViTG !== undefined ? String(invoice?.DonViTG) : "" },
                { type: "text", text: invoice?.Class !== null && invoice?.Class !== undefined ? String(invoice?.Class) : "" },
                { type: "text", text: invoice?.Unno !== null && invoice?.Unno !== undefined ? String(invoice?.Unno) : "" },
                { type: "text", text: invoice?.SoNiemChi !== null && invoice?.SoNiemChi !== undefined ? String(invoice?.SoNiemChi) : "" },
                { type: "text", text: invoice?.SoNiemChi2 !== null && invoice?.SoNiemChi2 !== undefined ? String(invoice?.SoNiemChi2) : "" },
                { type: "text", text: invoice?.SoNiemChi3 !== null && invoice?.SoNiemChi3 !== undefined ? String(invoice?.SoNiemChi3) : "" },
                { type: "text", text: invoice?.TinhTrangContainer !== null && invoice?.TinhTrangContainer !== undefined ? String(invoice?.TinhTrangContainer) : "" },
                { type: "text", text: invoice?.FE !== null && invoice?.FE !== undefined ? String(invoice?.FE) : "" },
                { type: "text", text: invoice?.ThanhLyHQ !== null && invoice?.ThanhLyHQ !== undefined ? String(invoice?.ThanhLyHQ) : "" },
                { type: "text", text: invoice?.NoiNgoai !== null && invoice?.NoiNgoai !== undefined ? String(invoice?.NoiNgoai) : "" },
                { type: "text", text: invoice?.GhiChu !== null && invoice?.GhiChu !== undefined ? String(invoice?.GhiChu) : "" },

            ]
        };

        const rowsHeader = [
            { type: "header", text: "STT" },
            { type: "header", text: "Hãng khai thác" },
            { type: "header", text: "Số container" },
            { type: "header", text: "Kích cỡ (ISO)" },
            { type: "header", text: "Tàu/Chuyến" },
            { type: "header", text: "Hướng" },
            { type: "header", text: "Trạng thái container" },
            { type: "header", text: "Số booking" },
            { type: "header", text: "Số vận đơn" },
            { type: "header", text: "Tác nghiệp" },
            { type: "header", text: "Vị trí" },
            { type: "header", text: "Cảng xếp" },
            { type: "header", text: "Cảng dỡ" },
            { type: "header", text: "Cảng đích" },
            { type: "header", text: "Ngày nhập" },
            { type: "header", text: "Ngày xuất" },
            { type: "header", text: "Số ngày lưu bãi" },
            { type: "header", text: "Loại hàng" },
            { type: "header", text: "Hàng hoá" },
            { type: "header", text: "Trọng lượng" },
            { type: "header", text: "VGM" },
            { type: "header", text: "Nhiệt độ" },
            { type: "header", text: "Thông gió" },
            { type: "header", text: "Đơn vị TG" },
            { type: "header", text: "Class" },
            { type: "header", text: "Unno" },
            { type: "header", text: "Số niềm chì" },
            { type: "header", text: "Số niêm chì 2" },
            { type: "header", text: "Số niêm chì 3" },
            { type: "header", text: "Tình trạng Container" },
            { type: "header", text: "F/E" },
            { type: "header", text: "Thanh lý HQ" },
            { type: "header", text: "Nội/Ngoại" },
            { type: "header", text: "Ghi chú" },

        ];


        const columnsModalFormat = [
            { columnId: "MaKhachHang", width: 200, resizable: true, header: "Mã khách hàng" },
            { columnId: "TenKhachHang", width: 200, resizable: true, reorderable: true, header: "Tên khách hàng" },
            { columnId: "DiaChi", width: 200, resizable: true, reorderable: true, header: "Địa chỉ" },
            { columnId: "MaSoThue", width: 200, resizable: true, reorderable: true, header: "Mã số thuế" },
            { columnId: "Email", width: 200, resizable: true, reorderable: true, header: "Email" },
            { columnId: "DienThoai", width: 150, resizable: true, reorderable: true, header: "Điện thoại" }
        ]
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
                            title={<span style={{ color: 'white' }}>Báo cáo Container biến động</span>}
                        >
                            <Col className='input_layout_cont'>
                                <span>Đến ngày</span>
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
                                <Mradio
                                    dataSource={{
                                        value: this.state.radioValue,
                                        label: "Select an option",
                                        options: [
                                            { label: "Tàu đến cảng", value: "option1" },
                                            { label: "Tàu rời cảng", value: "option2" },
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
                            </Col>
                            <Row>
                                <Mselect
                                    dataSource={{
                                        id: "tauchuyen",
                                        label: "TÀU / CHUYẾN",
                                        value: this.state.selectValue,
                                        options: [
                                            { label: "Tất cả", value: "option1" },
                                            { label: "AS ROMINA", value: "option2" },
                                            { label: "A FUKU", value: "option3" },
                                        ],
                                    }}
                                // onChangeValue={(e) => this.handleSelectChange(e["select1"])}
                                />
                            </Row>


                            <Row justify={"space-between"}>
                                <Col className="cont_select">
                                    <Mselect
                                        dataSource={{
                                            id: "HangKhaiThac",
                                            label: "HÃNG KHAI THÁC",
                                            value: this.state.selectValue,
                                            options: [
                                                { label: "Tất cả", value: "option1" },
                                                { label: "ACC", value: "option2" },
                                                { label: "ACL", value: "option3" },
                                            ],
                                        }}
                                    // onChangeValue={(e) => this.handleSelectChange(e["select1"])}
                                    />
                                </Col>
                                <Col className="cont_select">
                                    <Mselect
                                        dataSource={{
                                            id: "Huong",
                                            label: "HƯỚNG",
                                            value: this.state.selectValue,
                                            options: [
                                                { label: "Tất cả", value: "option1" },
                                                { label: "Import", value: "option2" },
                                                { label: "Storage Empty", value: "option3" },
                                            ],
                                        }}
                                    // onChangeValue={(e) => this.handleSelectChange(e["select1"])}
                                    />
                                </Col>
                            </Row>
                            <Row justify={"space-between"}>
                                <Col className="cont_select">
                                    <Mselect
                                        dataSource={{
                                            id: "KichCo",
                                            label: "KÍCH CỠ",
                                            value: this.state.selectValue,
                                            options: [
                                                { label: "20", value: "option1" },
                                                { label: "40", value: "option2" },
                                                { label: "45", value: "option3" },
                                            ],
                                        }}
                                    // onChangeValue={(e) => this.handleSelectChange(e["select1"])}
                                    />
                                </Col>
                                <Col className="cont_select">
                                    <Mselect
                                        dataSource={{
                                            id: "LoaiHang",
                                            label: "LOẠI HÀNG",
                                            value: this.state.selectValue,
                                            options: [
                                                { label: "GP : General", value: "option1" },
                                                { label: "RF : Reefer", value: "option2" },
                                                { label: "DG : Dangerous", value: "option3" },
                                            ],
                                        }}
                                    // onChangeValue={(e) => this.handleSelectChange(e["select1"])}
                                    />
                                </Col>
                            </Row>
                            <Row justify={"space-between"}>
                                <Col className="cont_select">
                                    <Mselect
                                        dataSource={{
                                            id: "fullempty",
                                            label: "FULL / EMPTY",
                                            value: this.state.selectValue,
                                            options: [
                                                { label: "Tất cả", value: "option1" },
                                                { label: "Full", value: "option2" },
                                                { label: "Empty", value: "option3" },
                                            ],
                                        }}
                                    // onChangeValue={(e) => this.handleSelectChange(e["select1"])}
                                    />
                                </Col>
                                <Col className="cont_select">
                                    <Mselect
                                        dataSource={{
                                            id: "NoiNgoai",
                                            label: "NỘI / NGOẠI",
                                            value: this.state.selectValue,
                                            options: [
                                                { label: "Tất cả", value: "option1" },
                                                { label: "Nội", value: "option2" },
                                                { label: "Ngoại", value: "option3" },
                                            ],
                                        }}
                                    // onChangeValue={(e) => this.handleSelectChange(e["select1"])}
                                    />
                                </Col>
                            </Row>
                            <Row justify={"space-between"}>
                                <Col className="cont_select">
                                    <Mselect
                                        dataSource={{
                                            id: "TinhTrangVo",
                                            label: "TÌNH TRẠNG VỎ",
                                            value: this.state.selectValue,
                                            options: [
                                                { label: "A : GRADE A", value: "option1" },
                                                { label: "B : GRADE B", value: "option2" },
                                                { label: "C : GRADE C", value: "option3" },
                                            ],
                                        }}
                                    // onChangeValue={(e) => this.handleSelectChange(e["select1"])}
                                    />
                                </Col>
                                <Col className="cont_select">

                                    <Mselect
                                        dataSource={{
                                            id: "stacking",
                                            label: "STACKING / DELIVERY",
                                            value: "stacking",
                                            options: [
                                                { label: "Stacking", value: "stacking" },
                                                { label: "Delivery", value: "delivery" },
                                            ],
                                            defaultValue: "stacking",
                                        }}
                                        onChangeValue={(value) => this.setState({ stackingSelectValue: value })}
                                        preventEmptyOption={true}
                                    />
                                </Col>
                            </Row>
                            <Col className='input_layout_cont'>
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
                            <Col className='input_layout_cont'>
                                <Mdivider
                                    dataSource={{
                                        label: "Tổng",
                                    }}
                                />
                                <div className="mtable-tacnghiep">
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
                                                "SoContainer",
                                                "SoNiemChi",
                                            ],
                                        }}
                                    />
                                </div>
                            </Col>
                        </Mcard>
                    </Col>
                    <Col lg={{ span: 16 }} sm={{ span: 24 }}>
                        <Mcard
                            title={<span style={{ color: 'white' }}>Bảng báo cáo Container biến động</span>}
                        >
                            {!this.state.isLoading ? (
                                !this.state.tableData[0] ? (
                                    <Col className="no_data">
                                        <Row justify={"center"}>
                                            <DatabaseOutlined className="no_data_icon" />
                                        </Row>
                                        <Row justify={"center"}>Nhập mã số Edo để nạp dữ liệu container...</Row>
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


            </Content >
        )
    }
}

export default containerStorageReport
