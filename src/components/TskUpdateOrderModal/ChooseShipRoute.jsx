import React, { Component, createRef } from "react";
import { Col, Layout, Modal, Row } from "antd";
import { Mtable } from "../BasicUI/BasicUI";
import { formatDateTime, getColumnIndex } from "../../utils/util";

const rowData = [
    {
        ETA: "2021-06-16T07:00:00.000Z",
        ETB: "2021-06-16T07:00:00.000Z",
        ETD: "2021-06-17T07:00:00.000Z",
        ICDCOT: null,
        LaneCode: "PEX3",
        PortCOT: null,
        VesselCode: "MEL",
        VesselExVoy: "ETCTEST2",
        VesselImVoy: "ETCTEST2",
        VesselKey: "PEX17",
        VesselName: "CMA CGM MELISANDE"
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
    duplicatedData.VesselName = generateRandomContainerNo();
    rowData.push(duplicatedData);
}

const columnsFormat = [
    { columnId: "VesselName", width: 300, resizable: true, reorderable: true, header: "Tên tàu" },
    { columnId: "VesselImVoy", width: 150, resizable: true, reorderable: true, header: "Chuyến nhập" },
    { columnId: "VesselExVoy", width: 150, resizable: true, reorderable: true, header: "Chuyến xuất" },
    { columnId: "ETA", width: 200, resizable: true, reorderable: true, header: "Ngày cập" },
    { columnId: "VesselKey", width: 210, resizable: true, reorderable: true, header: "Chuyến tàu" },
]

const rowsFormat = (container, index) => {
    return [
        { type: "text", nonEditable: false, text: container?.VesselName || "" },
        { type: "text", nonEditable: false, text: container?.VesselImVoy || "" },
        { type: "text", nonEditable: false, text: container?.VesselExVoy || "" },
        { type: "text", nonEditable: false, text: container?.ETA ? formatDateTime(container?.ETA) : "" },
        { type: "text", nonEditable: false, text: container?.VesselKey || "" },
    ]
};

const rowsHeader = [
    { type: "header", text: "Tên tàu" },
    { type: "header", text: "Chuyến nhập" },
    { type: "header", text: "Chuyến xuất" },
    { type: "header", text: "Ngày cập" },
    { type: "header", text: "Chuyến tàu" },
];

export default class ChooseShipRoute extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.submitButtonRef = React.createRef();
    }

    selectShip = (row, columnsFormat) => {
        const ship = row[0].cells
        const ids = getColumnIndex(columnsFormat, ["VesselName", "VesselImVoy", "VesselExVoy", "ETA", "VesselKey"])
        const data = ship[ids[0]].text + " / " +
            ship[ids[1]].text + " / " +
            ship[ids[2]].text + " / " +
            ship[ids[3]].text + " / " +
            ship[ids[4]].text
        this.props.onSubmit(data)
    }

    render() {

        return (
            <Modal
                title={"Chọn tàu / chuyến"}
                footer={<></>}
                // loading={loading}
                open={this.props.visible}
                onCancel={this.props.onCancle}
                width={"70%"}
            >
                <Mtable
                    config={{
                        defaultData: rowData,
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
                            "VesselName"
                        ],
                        selectRow: this.selectShip
                    }}
                />
            </Modal>
        );
    }
}