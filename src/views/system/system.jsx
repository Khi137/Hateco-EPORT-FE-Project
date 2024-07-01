import React, { Component } from "react";
// import "./styles.scss";
import { ReactGrid } from "@silevis/reactgrid";

class System extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableData: {
        reactGridColumns: [
          { columnId: "STT", width: 50, resizable: true, header: "STT" },
          {
            columnId: "ContainerNumber",
            width: 150,
            resizable: true,
            reorderable: true,
            header: "Số Container",
          },
          {
            columnId: "OperationCode",
            width: 150,
            resizable: true,
            reorderable: true,
            header: "Hãng Tàu",
          },
          {
            columnId: "IsoSizetype",
            width: 150,
            resizable: true,
            reorderable: true,
            header: "Kích cỡ",
          },
          {
            columnId: "CargoTypeName",
            width: 150,
            resizable: true,
            reorderable: true,
            header: "Full/Empty",
          },
          {
            columnId: "ClassName",
            width: 150,
            resizable: true,
            reorderable: true,
            header: "Hướng",
          },
          {
            columnId: "ExpDate",
            width: 150,
            resizable: true,
            reorderable: true,
            header: "Hạn Booking",
          },
          {
            columnId: "Position",
            width: 150,
            resizable: true,
            reorderable: true,
            header: "Vị trí bãi",
          },
          {
            columnId: "DateIn",
            width: 150,
            resizable: true,
            reorderable: true,
            header: "Ngày vào bãi",
          },
          {
            columnId: "DateOut",
            width: 150,
            resizable: true,
            reorderable: true,
            header: "Ngày ra bãi",
          },
          {
            columnId: "ContainerStatusName",
            width: 150,
            resizable: true,
            reorderable: true,
            header: "Tình trạng cont",
          },
        ],
        reactGridRows: [
          {
            rowId: "header",
            cells: [
              { type: "header", text: "STT" },
              { type: "header", text: "Số Container" },
              { type: "header", text: "Hãng Tàu" },
              { type: "header", text: "Kích cỡ" },
              { type: "header", text: "Full/Empty" },
              { type: "header", text: "Hướng" },
              { type: "header", text: "Hạn Booking" },
              { type: "header", text: "Vị trí bãi" },
              { type: "header", text: "Ngày vào bãi" },
              { type: "header", text: "Ngày ra bãi" },
              { type: "header", text: "Tình trạng cont" },
            ],
          },
        ],
      },
    };
  }
  render() {
    return (
      <div className="container" style={{ width: "100vw", display: "flex" }}>
        <ReactGrid
          rows={this.state.tableData.reactGridRows}
          columns={this.state.tableData.reactGridColumns}
        />
      </div>
    );
  }
}

export default System;
