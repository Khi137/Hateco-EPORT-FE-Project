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
        DoanhThuThucTucDichVu: "DoanhThu123",
        Cont20: 13,
        Cont40: 15,
        Cont45: 2,
        TongTEU: 2000000,
        TongTien: 500000000,
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
    duplicatedData.DoanhThuThucTucDichVu = generateRandomContainerNo();
    rowData.push(duplicatedData);

    const duplicatedModalData = { ...rowModalData[0] };
    duplicatedModalData.DoanhThuThucTucDichVu = generateRandomContainerNo();
    rowModalData.push(duplicatedModalData);
}

class jobModeInvoiceWithReleasePointReport extends Component {

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
                title: "Tổng (TEU)",
                // value: generalInformation.OperationCode ? "Booking chỉ định" : "",
            },
            {
                title: "Tổng tiền",
                // value: generalInformation.OperationCode,
            },
        ];
        const columnsFormat = [
            { columnId: "STT", width: 50, resizable: true, header: "STT" },
            { columnId: "DiemThuPhi", width: 150, resizable: true, reorderable: true, header: "Điểm thu phí" },
            { columnId: "DoanhThuThucTucDichVu", width: 250, resizable: true, reorderable: true, header: "Doanh thu thủ tục dịch vụ" },
            { columnId: "Cont20", width: 150, resizable: true, reorderable: true, header: "Cont 20'" },
            { columnId: "Cont40", width: 150, resizable: true, reorderable: true, header: "Cont 40'" },
            { columnId: "Cont45", width: 150, resizable: true, reorderable: true, header: "Cont 45'" },
            { columnId: "TongTEU", width: 150, resizable: true, reorderable: true, header: "TongTEU" },
            { columnId: "TongTien", width: 150, resizable: true, reorderable: true, header: "Tổng tiền" },
        ]
        const rowsFormat = (invoice, index) => {
            return [
                { type: "text", nonEditable: true, text: String(index + 1) },
                { type: "text", text: invoice?.DiemThuPhi !== null && invoice?.DiemThuPhi !== undefined ? String(invoice?.DiemThuPhi) : "" },
                { type: "text", text: invoice?.DoanhThuThucTucDichVu !== null && invoice?.DoanhThuThucTucDichVu !== undefined ? String(invoice?.DoanhThuThucTucDichVu) : "" },
                { type: "text", text: invoice?.Cont20 !== null && invoice?.Cont20 !== undefined ? String(invoice?.Cont20) : "" },
                { type: "text", text: invoice?.Cont40 !== null && invoice?.Cont40 !== undefined ? String(invoice?.Cont40) : "" },
                { type: "text", text: invoice?.Cont45 !== null && invoice?.Cont45 !== undefined ? String(invoice?.Cont45) : "" },
                { type: "text", text: invoice?.TongTEU !== null && invoice?.TongTEU !== undefined ? String(invoice?.TongTEU) : "" },
                { type: "text", text: invoice?.TongTien !== null && invoice?.TongTien !== undefined ? String(invoice?.TongTien) : "" },
            ]
        };

        const rowsHeader = [
            { type: "header", text: "STT" },
            { type: "header", text: "Điểm thu phí" },
            { type: "header", text: "Doanh thu thủ tục dịch vụ" },
            { type: "header", text: "Cont 20'" },
            { type: "header", text: "Cont 40'" },
            { type: "header", text: "Cont 45'" },
            { type: "header", text: "Tổng (TEU)" },
            { type: "header", text: "Tổng tiền" },
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
                            title={<span style={{ color: 'white' }}>Báo cáo tổng hợp doanh thu - thu ngay (DTP)</span>}
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
                            <Col>
                                <div className="diemThuPhi">
                                    <Mdivider
                                        dataSource={{
                                            label: "Điểm thu phí",
                                        }}
                                    />

                                    <Mselect
                                        dataSource={{
                                            id: "selectDiemThuPhi",
                                            label: "Chọn điểm thu phí",
                                            value: this.state.selectValue,
                                            options: [
                                                { label: "Option 1", value: "option1" },
                                                { label: "Option 2", value: "option2" },
                                                { label: "Option 3", value: "option3" },
                                            ],
                                        }}
                                        onChangeValue={(e) => this.handleSelectChange(e["select1"])}
                                    />
                                </div>
                            </Col>
                            <Col>
                                <div className="heThong">
                                    <Mdivider
                                        dataSource={{
                                            label: "Hệ thống",
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
                                <div className="div-napdulieu">
                                    <Mbutton
                                        color=""
                                        className="m_button btn-napdulieu"
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
                                                {/* <Col className="item_value">{item.value}</Col> */}
                                                {item.value ?
                                                    <Col className="item_value thongke_value">{item.value}</Col>
                                                    : <Col className="item_value thongke_value"></Col>}

                                            </Row>
                                        );
                                    })}
                                </Col>
                            </Col>
                            <div className="mtable-tacnghiep">
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
                            </div>
                        </Mcard>
                    </Col>
                    <Col lg={{ span: 16 }} sm={{ span: 24 }}>
                        <Mcard
                            title={<span style={{ color: 'white' }}>Bảng báo cáo tổng hợp doanh thu - thu ngay (DTP)</span>}
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

                {/* Modal for search button */}
                <Modal
                    title="Chọn khách hàng"
                    open={this.state.modalVisible}
                    onCancel={this.handleCancel}
                    closeIcon={<CloseOutlined />}
                    footer={null}
                    className="custom-wide-modal"
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

export default jobModeInvoiceWithReleasePointReport
