import React, { Component, createRef } from 'react';
import './styles.scss'
import { Col, Row, Tooltip } from 'antd';
import { Mbutton, Winput } from '../../../components/BasicUI';
import { DatabaseOutlined, FieldNumberOutlined, InfoCircleOutlined, SearchOutlined } from '@ant-design/icons';
import { formatDateTime, handleColumnsReorder, handleRowsReorder } from '../../../utils/util';
import { ReactGrid } from '@silevis/reactgrid';

const rowData = [
    {
        "Rowguid": "B75F4063-11ED-4635-BF74-E3EED8BA2677",
        "TerminalCode": null,
        "VesselKey": "V.170S",
        "VesselImVoy": null,
        "VesselExVoy": null,
        "ETB": null,
        "ETD": null,
        "BargeKey": null,
        "BargeImVoy": null,
        "BargeExVoy": null,
        "DeliveryOrder": null,
        "BLNo": "GMD21CMEHPH0060",
        "BookingNo": "50940502",
        "HousebillNo": null,
        "ContainerNo": "TCNU8698362",
        "ClassCode": "3",
        "OperationCode": "HLC",
        "FE": "F",
        "ContainerStatusCode": "D",
        "CargoTypeCode": "GP",
        "Commodity": "XE MAY",
        "LocalSizetype": "4500",
        "IsoSizetype": "45G0",
        "IsLocalForeign": "F",
        "JobModeCodeIn": "HBAI",
        "MethodCodeIn": "T",
        "DateIn": "2021-04-10T19:44:22.000Z",
        "DateOut": "2021-04-14T12:54:30.000Z",
        "JobModeCodeOut": "LAYN",
        "MethodCodeOut": "V",
        "EirInNo": null,
        "EirOutNo": null,
        "StuffNo": null,
        "UnstuffNo": null,
        "ServiceNo": null,
        "DraftNo": null,
        "InvoiceNo": null,
        "Block": "A6",
        "Bay": "06",
        "Row": "02",
        "Tier": "4",
        "Area": null,
        "VGM": true,
        "MCWeight": 8684,
        "TareWeight": null,
        "Sealno": null,
        "Sealno1": null,
        "Sealno2": "8256247",
        "POL": "VNHPH",
        "POD": "VNCME",
        "FPOD": null,
        "TransitCode": null,
        "TransitPort": null,
        "Temperature": null,
        "Vent": null,
        "VentUnit": null,
        "Class": null,
        "Unno": null,
        "OogTop": null,
        "OogLeft": null,
        "OogRight": null,
        "OogBack": null,
        "OogFront": null,
        "CusHold": false,
        "TerHold": false,
        "TerHoldReason": null,
        "IsReturnBack": false,
        "IsSpecialWarning": false,
        "SpecialWarning": null,
        "ContainerCondition": null,
        "IsTruckBarge": "T",
        "TruckNo": null,
        "RemoocNo": null,
        "Note": "975156655",
        "ID_TOS": "0000000671104",
        "CreatedBy": "catos_ndv",
        "CreatedTime": "2021-04-10T19:46:00.000Z",
        "ModifiedBy": "catos_ndv",
        "ModifiedTime": "2021-04-14T12:56:27.000Z",
        "MaxGrossWeight": null,
        "XuatNeo": null,
        "XuatPhao": null,
        "RowguidCntrDetails": "B75F4063-11ED-4635-BF74-E3EED8BA2677",
        "CargoTypeName": "General",
        "VesselName": "GREEN PACIFIC",
        "CallSign": null,
        "ContainerConditionName": null,
        "JobModeNameIn": "HẠ BÃI",
        "JobModeNameOut": "LẤY NGUYÊN",
        "VETB": "2021-04-13T17:35:22.000Z",
        "VETD": "2021-04-14T17:30:27.000Z",
        "VImVoy": "170S",
        "VExVoy": "170S",
        "ClassName": "Export",
        "ContainerStatusName": "Delivered",
        "OperationName": "CÔNG TY TNHH HAPAG- LLOYD  (VIET NAM)",
        "MethodNameIn": null,
        "MethodNameOut": null
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

for (let index = 0; index < 20; index++) {
    const duplicatedData = { ...rowData[0] };
    duplicatedData.ContainerNo = generateRandomContainerNo();
    rowData.push(duplicatedData);
}

class TrackingContainerList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                containerNumber: "",
                containerNumberError: "",
                searchData: ""
            },
            containerList: [],
            tableData: {
                reactGridColumns: [],
                reactGridRows: [
                    {
                        rowId: "header",
                        cells: [
                            { type: "header", text: "STT" }, // 1
                            { type: "header", text: "Tình trạng" }, // 2
                            { type: "header", text: "Số Container" }, // 3
                            { type: "header", text: "Thanh lý HQ" }, // 4
                            { type: "header", text: "Hãng tàu" }, // 5
                            { type: "header", text: "Kích cỡ" }, // 6
                            { type: "header", text: "Full/Empty" }, // 7
                            { type: "header", text: "Hướng" }, // 8
                            { type: "header", text: "Vị trí bãi" }, // 9
                            { type: "header", text: "Tàu chuyến" }, // 10
                            { type: "header", text: "Cảng chuyển tải / Cảng đích" }, // 11
                            { type: "header", text: "Số vận đơn" }, // 12
                            { type: "header", text: "Số Booking" }, // 13
                            { type: "header", text: "Trọng lượng (VGM)" }, // 14
                            { type: "header", text: "Số niêm chì" }, // 15
                            { type: "header", text: "Hàng Nội/Ngoại" }, // 16
                            { type: "header", text: "Loại hàng" }, // 17
                            { type: "header", text: "Nhiệt độ" }, // 18
                            { type: "header", text: "Class/UNNo" }, // 19
                            { type: "header", text: "Ngày vào bãi" }, // 20
                            { type: "header", text: "Ngày ra bãi" }, //21
                            { type: "header", text: "Sổ tàu" }, //22
                        ]
                    }
                ],
            }
        };
        this.submitButtonRef = createRef();
    }

    checkContainerNumberError = (value) => {
        switch (true) {
            case (value === ""):
                return "Số container không được để trống";
            default:
                return false;
        }
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState(prevState => ({
            formData: {
                ...prevState.formData,
                [name]: value
            }
        }));
    };

    handleLoadData = () => {
        const containerNumberError = this.checkContainerNumberError(this.state.formData.containerNumber)
        if (containerNumberError) {
            this.setState(prevState => ({
                formData: {
                    ...prevState.formData,
                    containerNumberError: containerNumberError
                }
            }));
        } else {
            if (this.submitButtonRef.current) {
                this.submitButtonRef.current.loading();
            }
            setTimeout(() => {
                if (this.submitButtonRef.current) {
                    this.submitButtonRef.current.reset();
                    this.setState(prevState => ({
                        generalInformation: rowData[0] ? rowData[0] : {},
                        tableData: {
                            ...prevState.tableData,
                            reactGridColumns: [...this.generateColumnsData()],
                            reactGridRows: [
                                ...prevState.tableData.reactGridRows,
                                ...this.generateTableData(rowData)
                            ],
                        },
                        formData: {
                            ...prevState.formData,
                            containerNumberError: false
                        }
                    }));
                }
            }, 1000);
        }
    }

    generateColumnsData = () => {
        return ([
            { columnId: 'STT', width: 50, resizable: true, header: 'STT' }, // 1
            { columnId: 'ContainerStatusName', width: 125, resizable: true, reorderable: true, header: 'Tình trạng' }, // 2
            { columnId: 'ContainerNo', width: 150, resizable: true, reorderable: true, header: 'Số Container' }, // 3
            { columnId: 'ContainerNo', width: 150, resizable: true, reorderable: true, header: 'Thanh lý HQ' }, // 4
            { columnId: 'OperationCode', width: 100, resizable: true, reorderable: true, header: 'Hãng Tàu' }, // 5
            { columnId: 'IsoSizetype', width: 100, resizable: true, reorderable: true, header: 'Kích cỡ' }, // 6
            { columnId: 'CargoTypeName', width: 110, resizable: true, reorderable: true, header: 'Full/Empty' }, // 7
            { columnId: 'ClassName', width: 110, resizable: true, reorderable: true, header: 'Hướng' }, // 8
            { columnId: 'Position', width: 150, resizable: true, reorderable: true, header: 'Vị trí bãi' }, // 9
            { columnId: 'VesselName', width: 150, resizable: true, reorderable: true, header: 'Tàu chuyến' }, // 10
            { columnId: 'POL', width: 200, resizable: true, reorderable: true, header: 'Cảng chuyển tải/ Cảng đích' }, // 11
            { columnId: 'BLNo', width: 150, resizable: true, reorderable: true, header: 'Số vận đơn' }, // 12
            { columnId: 'BookingNo', width: 150, resizable: true, reorderable: true, header: 'Số Booking' }, // 13
            { columnId: 'MCWeight', width: 200, resizable: true, reorderable: true, header: 'Trọng lượng (VGM)' }, // 14
            { columnId: 'Sealno2', width: 150, resizable: true, reorderable: true, header: 'Số niêm chì' }, // 15
            { columnId: 'Position', width: 150, resizable: true, reorderable: true, header: 'Hàng Nội/Ngoại' }, // 16
            { columnId: 'CargoTypeCode', width: 150, resizable: true, reorderable: true, header: 'Loại hàng' }, // 17
            { columnId: 'Position', width: 150, resizable: true, reorderable: true, header: 'Nhiệt độ' }, // 18
            { columnId: 'Position', width: 150, resizable: true, reorderable: true, header: 'Class/UNNo' }, // 19
            { columnId: 'DateIn', width: 150, resizable: true, reorderable: true, header: 'Ngày vào bãi' }, // 20
            { columnId: 'DateOut', width: 150, resizable: true, reorderable: true, header: 'Ngày ra bãi' }, // 21
            { columnId: 'ExpDate', width: 150, resizable: true, reorderable: true, header: 'Sổ tàu' }, // 22
        ])
    };

    generateRowData = (container, index) => {
        return (
            {
                rowId: String(index + 1),
                reorderable: true,
                cells: [
                    { type: 'text', nonEditable: true, text: String(index + 1) },
                    { type: 'text', nonEditable: true, text: container?.ContainerStatusName || "" },
                    { type: 'text', nonEditable: true, text: container?.ContainerNo || "" },
                    { type: 'text', nonEditable: true, text: container?.Nodata || "" },
                    { type: 'text', nonEditable: true, text: container?.OperationCode || "" },
                    { type: 'text', nonEditable: true, text: container?.IsoSizetype || "" },
                    { type: 'text', nonEditable: true, text: container?.CargoTypeName || "" },
                    { type: 'text', nonEditable: true, text: container?.ClassName || "" },
                    { type: 'text', nonEditable: true, text: (container?.Block || "") + "-" + (container?.Bay || "") + "-" + (container?.Row || "") + "-" + (container?.Tier || "") },
                    { type: 'text', nonEditable: true, text: container?.VesselName || "" },
                    { type: 'text', nonEditable: true, text: container?.POL || "" },
                    { type: 'text', nonEditable: true, text: container?.BLNo || "" },
                    { type: 'text', nonEditable: true, text: container?.BookingNo || "" },
                    { type: 'text', nonEditable: true, text: String(container?.MCWeight) || "" },
                    { type: 'text', nonEditable: true, text: container?.Sealno2 || "" },
                    { type: 'text', nonEditable: true, text: container?.Nodata || "" },
                    { type: 'text', nonEditable: true, text: container?.CargoTypeCode || "" },
                    { type: 'text', nonEditable: true, text: container?.Nodata || "" },
                    { type: 'text', nonEditable: true, text: container?.Nodata || "/" },
                    { type: 'text', nonEditable: true, text: container?.DateIn ? formatDateTime(container?.DateIn) : "" },
                    { type: 'text', nonEditable: true, text: container?.DateOut ? formatDateTime(container?.DateOut) : "" },
                    { type: 'text', nonEditable: true, text: container?.ExpDate ? formatDateTime(container?.ExpDate) : "" },
                ]
            }
        )
    }

    generateTableData = (dataList) => {
        const generateData = dataList.map((container, index) => this.generateRowData(container, index));
        return generateData;
    };

    handleColumnsReorder = (targetColumnId, columnIds) => {
        const { tableData } = this.state;
        const updatedTableData = handleColumnsReorder(tableData, targetColumnId, columnIds);
        this.setState({ tableData: updatedTableData });
    }

    handleRowsReorder = (targetRowId, rowIds) => {
        const { tableData } = this.state;
        const updatedTableData = handleRowsReorder(tableData, targetRowId, rowIds);
        this.setState({ tableData: updatedTableData });
    }

    handleCanReorderRows = (targetRowId, rowIds) => {
        return targetRowId !== 'header';
    }

    handleRowsSearch = (reactGridRows, searchValue) => {
        if (!searchValue) return reactGridRows;
        const searchLower = searchValue.toLowerCase();
        const filteredRows = reactGridRows.slice(1).filter(row => {
            const containerNo = row.cells[1]?.text.toLowerCase();
            const operationCode = row.cells[2]?.text.toLowerCase();
            const isoSizetype = row.cells[3]?.text.toLowerCase();
            return (
                containerNo.includes(searchLower) ||
                operationCode.includes(searchLower) ||
                isoSizetype.includes(searchLower)
            );
        });
        return [reactGridRows[0], ...filteredRows];
    }

    render() {
        const { formData, containerList } = this.state
        return (
            <Row className='tracking-container-list_container'>
                <div className='content'>
                    <Row className='header body-md-normal'>
                        Tra cứu danh sách container
                    </Row>
                    <div className="input_container">
                        <Col className="input_item">
                            <Winput
                                title={"Danh sách số container"}
                                tooltip={"Nhập số container ngăn cách nhau bằng dấu cách."}
                                onChange={(e) => this.handleInputChange(e)}
                                checkError={(error) => this.setState(prevState => ({
                                    formData: {
                                        ...prevState.formData,
                                        containerNumberError: error
                                    }
                                }))}
                                require={true}

                                name={"containerNumber"}
                                className={`form_input_field`}
                                prefix={<FieldNumberOutlined />}
                                placeholder={"Nhập số container"}
                                value={formData.containerNumber}
                                errorText={formData?.containerNumberError || true}
                            />
                        </Col>
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
                            dataSource={{ textbutton: "Nạp dữ liệu" }}
                        />
                    </div>
                    <div className={`table_content ${containerList.length !== 0 && "table_exist_data"}`}>
                        {
                            !this.state.tableData?.reactGridRows[1] ?
                                <div className="no_data">
                                    <DatabaseOutlined style={{ fontSize: '64px' }} />
                                    <p>Nhập số container để nạp dữ liệu container...</p>
                                </div>
                                :
                                <Col className="have_data">
                                    <Row className='table_feature'>
                                        <Col className="search_bar">
                                            <Winput
                                                name={"searchData"}
                                                className={`form_input_field`}
                                                prefix={<SearchOutlined />}
                                                placeholder={"Tìm kiếm..."}
                                                value={formData.searchData}
                                                onChange={(e) => this.handleInputChange(e)}
                                            />
                                        </Col>
                                    </Row>
                                    <div className="react_grid_table">
                                        <ReactGrid
                                            rows={this.handleRowsSearch(this.state.tableData.reactGridRows, formData.searchData)}
                                            columns={this.state.tableData.reactGridColumns}
                                            stickyTopRows={1}
                                            onColumnsReordered={this.handleColumnsReorder}
                                            onRowsReordered={this.handleRowsReorder}
                                            canReorderRows={this.handleCanReorderRows}
                                            enableRowSelection
                                            enableColumnSelection
                                        />
                                    </div>
                                </Col>
                        }
                    </div>
                </div>
            </Row>
        )
    }
}

export default TrackingContainerList
