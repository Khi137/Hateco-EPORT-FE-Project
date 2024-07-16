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
}

class Report extends Component {
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
            { columnId: "MaKhachHang", width: 100, resizable: true, header: "Mã khách hàng" },
            { columnId: "TenKhachHang", width: 150, resizable: true, reorderable: true, header: "Tên khách hàng" },
            { columnId: "DiaChi", width: 150, resizable: true, reorderable: true, header: "Địa chỉ" },
            { columnId: "MaSoThue", width: 150, resizable: true, reorderable: true, header: "Mã số thuế" },
            { columnId: "Email", width: 150, resizable: true, reorderable: true, header: "Email" },
            { columnId: "DienThoai", width: 150, resizable: true, reorderable: true, header: "Điện thoại" }
        ]
        const rowsModalFormat = (customer, index) => {
            return [
                { type: "text", text: customer?.MaKhachHang !== null && customer?.MaKhachHang !== undefined ? String(customer?.MaKhachHang) : "" },
                { type: "text", text: customer?.TenKhachHang !== null && customer?.MaKhachHang !== undefined ? String(customer?.MaKhachHang) : "" },
                { type: "text", text: customer?.DiaChi !== null && customer?.MaKhachHang !== undefined ? String(customer?.MaKhachHang) : "" },
                { type: "text", text: customer?.MaSoThue !== null && customer?.MaSoThue !== undefined ? String(customer?.MaSoThue) : "" },
                { type: "text", text: customer?.Email !== null && customer?.Email !== undefined ? String(customer?.Email) : "" },
                { type: "text", text: customer?.DienThoai !== null && customer?.DienThoai !== undefined ? String(customer?.DienThoai) : "" },

            ]
        };
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
            <div className='container' >
                Report
            </div>
        )
    }
}

export default Report
