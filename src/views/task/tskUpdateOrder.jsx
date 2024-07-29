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
import UpdateCommandOrder from "../../components/TskUpdateOrderModal/UpdateCommandOrder";
import UpdateContainer from "../../components/TskUpdateOrderModal/UpdateContainer";

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
    }
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
    duplicatedData.PinCode = generateRandomContainerNo();
    duplicatedData.ContainerNo = generateRandomContainerNo();
    rowData.push(duplicatedData);
}

class TskUpdateOrder extends Component {
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
            radioValue: "pincode",
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

    handleRadioChange = (returnValue) => {
        this.setState({
            radioValue: returnValue,
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
            { columnId: "Action", width: 200, resizable: true, header: "Thao tác" },
            { columnId: "PinCode", width: 200, resizable: true, reorderable: true, header: "Số PinCode" },
            { columnId: "JobModeName", width: 150, resizable: true, reorderable: true, header: "Tác nghiệp" },
            { columnId: "MethodName", width: 150, resizable: true, reorderable: true, header: "PTGN" },
            { columnId: "CargoTypeName", width: 150, resizable: true, reorderable: true, header: "Tàu chuyến" },
            { columnId: "ShipperName", width: 150, resizable: true, reorderable: true, header: "Chủ hàng" },
            { columnId: "CustomerName", width: 150, resizable: true, reorderable: true, header: "Đối tượng thanh toán" },
            { columnId: "emptyColumn", width: 150, resizable: true, reorderable: true, header: "Số hoá đơn" },
            { columnId: "ShipperRepresent", width: 150, resizable: true, reorderable: true, header: "Người đại diện" },
            { columnId: "ShipperTel", width: 150, resizable: true, reorderable: true, header: "Số điện thoại" },
            { columnId: "Note", width: 700, resizable: true, reorderable: true, header: "Ghi chú" }
        ]

        const containerColumnsFormat = [
            { columnId: "STT", width: 50, resizable: true, header: "STT" },
            { columnId: "Action", width: 150, resizable: true, header: "Thao tác" },
            { columnId: "PinCode", width: 200, resizable: true, reorderable: true, header: "Số PinCode" },
            { columnId: "ContainerNo", width: 200, resizable: true, reorderable: true, header: "Số Container" },
            { columnId: "OperationCode", width: 150, resizable: true, reorderable: true, header: "Hãng khai thác" },
            { columnId: "IsoSizetype", width: 150, resizable: true, reorderable: true, header: "KC ISO" },
            { columnId: "FE", width: 150, resizable: true, reorderable: true, header: "F/E" },
            { columnId: "ClassName", width: 150, resizable: true, reorderable: true, header: "Hướng" },
            { columnId: "emptyColumn", width: 150, resizable: true, reorderable: true, header: "Số hoá đơn" },
            { columnId: "BookingNo", width: 150, resizable: true, reorderable: true, header: "Số Booking" },
            { columnId: "CargoTypeName", width: 150, resizable: true, reorderable: true, header: "Loại hàng" },
            { columnId: "emptyColumn", width: 150, resizable: true, reorderable: true, header: "Trọng lượng" },
            { columnId: "POD", width: 150, resizable: true, reorderable: true, header: "Càng dỡ" },
            { columnId: "FPOD", width: 150, resizable: true, reorderable: true, header: "Cảng Đích" },
            { columnId: "emptyColumn", width: 150, resizable: true, reorderable: true, header: "Niêm trì" },
            { columnId: "emptyColumn", width: 150, resizable: true, reorderable: true, header: "Nội/Ngoại" },
            { columnId: "CreatedBy", width: 150, resizable: true, reorderable: true, header: "Người tạo" },
            { columnId: "FileAction", width: 150, resizable: true, reorderable: true, header: "File đính kèm" },
        ]

        const rowsFormat = (container, index) => {
            return [
                { type: "text", nonEditable: true, text: String(index + 1) },
                { type: "text", nonEditable: false, text: "Chỉnh sửa / file đính kèm" },
                { type: "text", nonEditable: false, text: container?.PinCode || "" },
                { type: "text", nonEditable: false, text: container?.JobModeName || "" },
                { type: "text", nonEditable: false, text: container?.MethodName || "" },
                { type: "text", nonEditable: false, text: container?.CargoTypeName || "" },
                { type: "text", nonEditable: false, text: container?.ShipperName || "" },
                { type: "text", nonEditable: false, text: container?.CustomerName || "" },
                { type: "text", nonEditable: false, text: container?.emptyColumn || "" },
                { type: "text", nonEditable: false, text: container?.ShipperRepresent || "" },
                { type: "text", nonEditable: false, text: container?.ShipperTel || "" },
                { type: "text", nonEditable: false, text: container?.Note || "" }
            ]
        };

        const containerRowsFormat = (container, index) => {
            return [
                { type: "text", nonEditable: true, text: String(index + 1) },
                { type: "text", nonEditable: false, text: "Chỉnh sửa" },
                { type: "text", nonEditable: false, text: container?.PinCode || "" },
                { type: "text", nonEditable: false, text: container?.ContainerNo || "" },
                { type: "text", nonEditable: false, text: container?.OperationCode || "" },
                { type: "text", nonEditable: false, text: container?.IsoSizetype || "" },
                { type: "text", nonEditable: false, text: container?.FE || "" },
                { type: "text", nonEditable: false, text: container?.ClassName || "" },
                { type: "text", nonEditable: false, text: container?.emptyColumn || "" },
                { type: "text", nonEditable: false, text: container?.BookingNo || "" },
                { type: "text", nonEditable: false, text: container?.CargoTypeName || "" },
                { type: "text", nonEditable: false, text: container?.emptyColumn || "" },
                { type: "text", nonEditable: false, text: container?.POD || "" },
                { type: "text", nonEditable: false, text: container?.FPOD || "" },
                { type: "text", nonEditable: false, text: container?.emptyColumn || "" },
                { type: "text", nonEditable: false, text: container?.emptyColumn || "" },
                { type: "text", nonEditable: false, text: container?.CreatedBy || "" },
                { type: "text", nonEditable: false, text: "Chi tiết" },
            ]
        };

        const rowsHeader = [
            { type: "header", text: "STT" },
            { type: "header", text: "Thao tác" },
            { type: "header", text: "Số PinCode" },
            { type: "header", text: "Tác nghiệp" },
            { type: "header", text: "PTGN" },
            { type: "header", text: "Tàu chuyến" },
            { type: "header", text: "Chủ hàng" },
            { type: "header", text: "Đối tượng thanh toán" },
            { type: "header", text: "Số hoá đơn" },
            { type: "header", text: "Người đại diện" },
            { type: "header", text: "Số điện thoại" },
            { type: "header", text: "Ghi chú" },
        ];

        const containerRowsHeader = [
            { type: "header", text: "STT" },
            { type: "header", text: "Thao tác" },
            { type: "header", text: "Số PinCode" },
            { type: "header", text: "Số Container" },
            { type: "header", text: "Hãng khai thác" },
            { type: "header", text: "KC ISO" },
            { type: "header", text: "F/E" },
            { type: "header", text: "Hướng" },
            { type: "header", text: "Số hoá đơn" },
            { type: "header", text: "Số Booking" },
            { type: "header", text: "Loại hàng" },
            { type: "header", text: "Trọng lượng" },
            { type: "header", text: "Cảng dỡ" },
            { type: "header", text: "Cảng đích" },
            { type: "header", text: "Niêm trì" },
            { type: "header", text: "Nội Ngoại" },
            { type: "header", text: "Người tạo" },
            { type: "header", text: "Fire đính kèm" },
        ];

        return (
            <Content className="flex_layout-8-16_container tsk_update_order_container">
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
                                            // onClick={() => this.hanldeChangeVisible("updateContainerVisible")}
                                            onClick={() => this.hanldeChangeVisible("updateCommandOrderVisible")}
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
                            title={<span className="mcard_header">Danh sách container</span>}
                            className="container_list"
                        >
                            {!this.state.isLoading ? (
                                !this.state.tableData[0] ? (
                                    <Col className="no_data">
                                        <Row justify={"center"}>
                                            <DatabaseOutlined className="no_data_icon" />
                                        </Row>
                                        <Row justify={"center"}>Nhập số pinlđể nạp dữ liệu container...</Row>
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
                                                "PinCode",
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
                <UpdateCommandOrder
                    visible={this.state.modalVisibe.updateCommandOrderVisible}
                    onCancle={() => this.hanldeChangeVisible("updateCommandOrderVisible")}
                />
                <UpdateContainer
                    visible={this.state.modalVisibe.updateContainerVisible}
                    onCancle={() => this.hanldeChangeVisible("updateContainerVisible")}
                />
            </Content >
        );
    }
}

export default TskUpdateOrder;
