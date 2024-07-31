import { Modal, Row } from "antd";
import React, { Component } from "react";
import { Msearch, Mtable } from "../../components/BasicUI/BasicUI";

export class ModalTsk extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      tableData,
      columnsFormat,
      rowsFormat,
      rowsHeader,
      title,
      isOpenModal,
      handleClose,
    } = this.props;
    return (
      <Modal
        title={title}
        centered
        open={isOpenModal}
        onOk={handleClose}
        onCancel={handleClose}
        width={1000}
      >
        <Mtable
          config={{
            defaultData: tableData,
            columnsFormat: columnsFormat,
            rowsFormat: rowsFormat,
            rowsHeader: rowsHeader,
            reorderRow: true,
          }}
          functionRequire={{
            addcolumn: false,
            exportExel: false,
            searchField: ["ContainerNo", "OperationCode", "IsoSizetype"],
          }}
        />
      </Modal>
    );
  }
}

export default ModalTsk;
