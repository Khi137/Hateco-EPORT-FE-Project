// Danh mục khách hàng

import React, { Component } from "react";
import { ReactGrid } from "@silevis/reactgrid";
import "@silevis/reactgrid/styles.css";
import {
  Mselect,
  Minput,
  Mradio,
  Mbutton,
  Mtable,
  Msearch,
} from "../../../components/BasicUI";
import { CloudDownloadOutlined } from "@ant-design/icons";
import "./Customer.scss";
import { genPlaceholderStyle } from "antd/es/input/style";

const rowData = [
  {
    key: "1",
    cusNum: "",
    TaxNum: "",
    cusName: "",
    address: "",
    email: "",
    represent: "",
    phoneNum: "",
    payType: "",
    cusLevel: "",
    cusType: "",
    status: "",
  },
  {
    key: "2",
    cusNum: "",
    TaxNum: "",
    cusName: "",
    address: "",
    email: "",
    represent: "",
    phoneNum: "",
    payType: "",
    cusLevel: "",
    cusType: "",
    status: "",
  },
  {
    key: "3",
    cusNum: "",
    TaxNum: "",
    cusName: "",
    address: "",
    email: "",
    represent: "",
    phoneNum: "",
    payType: "",
    cusLevel: "",
    cusType: "",
    status: "",
  },
  {
    key: "4",
    cusNum: "",
    TaxNum: "",
    cusName: "",
    address: "",
    email: "",
    represent: "",
    phoneNum: "",
    payType: "",
    cusLevel: "",
    cusType: "",
    status: "",
  },
  {
    key: "5",
    cusNum: "",
    TaxNum: "",
    cusName: "",
    address: "",
    email: "",
    represent: "",
    phoneNum: "",
    payType: "",
    cusLevel: "",
    cusType: "",
    status: "",
  },
  {
    key: "6",
    cusNum: "",
    TaxNum: "",
    cusName: "",
    address: "",
    email: "",
    represent: "",
    phoneNum: "",
    payType: "",
    cusLevel: "",
    cusType: "",
    status: "",
  },
  {
    key: "7",
    cusNum: "",
    TaxNum: "",
    cusName: "",
    address: "",
    email: "",
    represent: "",
    phoneNum: "",
    payType: "",
    cusLevel: "",
    cusType: "",
    status: "",
  },
  {
    key: "8",
    cusNum: "",
    TaxNum: "",
    cusName: "",
    address: "",
    email: "",
    represent: "",
    phoneNum: "",
    payType: "",
    cusLevel: "",
    cusType: "",
    status: "",
  },
  {
    key: "9",
    cusNum: "",
    TaxNum: "",
    cusName: "",
    address: "",
    email: "",
    represent: "",
    phoneNum: "",
    payType: "",
    cusLevel: "",
    cusType: "",
    status: "",
  },
  {
    key: "10",
    cusNum: "",
    TaxNum: "",
    cusName: "",
    address: "",
    email: "",
    represent: "",
    phoneNum: "",
    payType: "",
    cusLevel: "",
    cusType: "",
    status: "",
  },
];

export class Customer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableData: {
        reactGridColumns: [
          { columnId: "STT", width: 50, resizable: true, header: "STT" },
          {
            columnId: "cusNum",
            width: 150,
            resizable: true,
            reorderable: true,
            header: "Mã khách hàng",
          },
          {
            columnId: "TaxNum",
            width: 200,
            resizable: true,
            reorderable: true,
            header: "Mã số thuế",
          },
          {
            columnId: "cusName",
            width: 250,
            resizable: true,
            reorderable: true,
            header: "Tên khách hàng",
          },
          {
            columnId: "address",
            width: 300,
            resizable: true,
            reorderable: true,
            header: "Địa chỉ",
          },
          {
            columnId: "email",
            width: 200,
            resizable: true,
            reorderable: true,
            header: "Email",
          },
          {
            columnId: "represent",
            width: 200,
            resizable: true,
            reorderable: true,
            header: "Đại diện",
          },
          {
            columnId: "phoneNum",
            width: 200,
            resizable: true,
            reorderable: true,
            header: "Số điện thoại",
          },
          {
            columnId: "payType",
            width: 200,
            resizable: true,
            reorderable: true,
            header: "Loại thanh toán",
          },
          {
            columnId: "cusLevel",
            width: 200,
            resizable: true,
            reorderable: true,
            header: "Bậc khách hàng",
          },
          {
            columnId: "cusType",
            width: 200,
            resizable: true,
            reorderable: true,
            header: "Loại khách hàng",
          },
          {
            columnId: "status",
            width: 200,
            resizable: true,
            reorderable: true,
            header: "Trạng thái",
          },
        ],
        reactGridRows: [
          {
            rowId: "header",
            cells: [
              { type: "header", text: "STT" },
              { type: "header", text: "Mã khách hàng" },
              { type: "header", text: "Mã số thuế" },
              { type: "header", text: "Tên khách hàng" },
              { type: "header", text: "Địa chỉ" },
              { type: "header", text: "Email" },
              { type: "header", text: "Đại diện" },
              { type: "header", text: "Số điện thoại" },
              { type: "header", text: "Loại thanh toán" },
              { type: "header", text: "Bậc khách hàng" },
              { type: "header", text: "Loại khách hàng" },
              { type: "header", text: "Trạng thái" },
            ],
          },
          ...this.generateTableData(rowData),
        ],
      },
    };
  }

  generateRowData = (container, index) => {
    return {
      rowId: String(index + 1),
      cells: [
        { type: "text", nonEditable: true, text: container?.key || "" },
        {
          type: "text",
          nonEditable: false,
          text: container?.cusNum || "",
        },
        {
          type: "text",
          nonEditable: true,
          text: container?.TaxNum || "",
        },
        { type: "text", nonEditable: true, text: container?.cusName || "" },
        {
          type: "text",
          nonEditable: true,
          text: container?.address || "",
        },

        { type: "text", nonEditable: true, text: container?.email || "" },
        {
          type: "text",
          nonEditable: true,
          text: container?.represent || "",
        },
        {
          type: "text",
          nonEditable: true,
          text: container?.phoneNum || "",
        },
        {
          type: "text",
          nonEditable: true,
          text: container?.payType || "",
        },
        {
          type: "text",
          nonEditable: true,
          text: container?.cusLevel || "",
        },
        {
          type: "text",
          nonEditable: true,
          text: container?.cusType || "",
        },
        {
          type: "text",
          nonEditable: true,
          text: container?.status || "",
        },
      ],
    };
  };

  generateTableData = (dataList) => {
    const generateData = dataList.map((container, index) =>
      this.generateRowData(container, index)
    );
    return generateData;
  };

  handleSearchChange = (value) => {
    this.setState({
      searchValue: value,
    });
  };

  render() {
    return (
      <div className="customer-container">
        <div className="customer-panel-left drop-box-shadow">
          <header className="customer-panel-left-title title-xl-normal">
            Danh mục khách hàng
          </header>
          <div className="customer-panel-left-content">
            <div className="customer-panel-left-select">
              <div className="customer-panel-left-select_1">
                <p className="body-lg-normal">Loại khách hàng:</p>
                <Mselect
                  dataSource={{
                    label: "Loại khách hàng",
                    options: [
                      { value: "1", label: "Tất cả" },
                      { value: "2", label: "XNK : Cty Xuất Nhập Khẩu" },
                      { value: "3", label: "FWD : Cty FWD" },
                    ],
                  }}
                />
              </div>
              <div className="customer-panel-left-select_2">
                <p className="body-lg-normal">Bậc khách hàng:</p>
                <Mselect
                  dataSource={{
                    label: "Bậc khách hàng",
                    options: [
                      { value: "1", label: "Tất cả" },
                      { value: "2", label: "LV1" },
                    ],
                  }}
                />
              </div>
            </div>
            <div className="customer-panel-left-input">
              <Minput
                dataSource={{
                  label: "Mã số thuế:",
                  inputType: "text",
                  placeholder: "Nhập mã số thuế ...",
                }}
              />
              <Minput
                dataSource={{
                  label: "Tên khách hàng:",
                  inputType: "text",
                  placeholder: "Nhập tên khách hàng ...",
                }}
              />
            </div>

            <div className="customer-panel-left-radio">
              <div className="line body-xl-normal">Hình thức thanh toán</div>
              <Mradio
                dataSource={{
                  label: "Hình thức thanh toán",
                  options: [
                    { label: "Tiền mặt", value: "1" },
                    { label: "Chuyển khoản", value: "2" },
                    { label: "Khác", value: "3" },
                  ],
                }}
              />
            </div>
            <div className="customer-panel-left-radio">
              <div className="line body-xl-normal">Trạng thái hoạt động</div>
              <Mradio
                dataSource={{
                  label: "Trạng thái hoạt động",
                  options: [
                    { label: "Hoạt động", value: "1" },
                    { label: "Không hoạt động", value: "2" },
                    { label: "Tạm ngừng", value: "3" },
                  ],
                }}
              />
            </div>
            <div className="customer-panel-left-button">
              <Mbutton
                className="m_button third drop-button-shadow"
                block
                htmlType="submit"
                type="primary"
                onClick={this.handleFormSubmit}
                ref={this.mButtonRef}
                dataSource={{
                  textbutton: "Nạp dữ liệu",
                  color: "",
                  size: "12",
                  icon: "CloudDownloadOutlined",
                }}
              />
            </div>
          </div>
        </div>
        <div className="customer-panel-right drop-box-shadow">
          <div className="customer-panel-right-title">
            <div className="customer-panel-right-title-search">
              <Msearch
                dataSource={{
                  id: "search1",
                  label: "Search",
                  value: this.state.searchValue,
                  icon: "SearchOutlined",
                  text: "",
                }}
                config={{
                  onLiveSearch: (value) => console.log("Live search:", value),
                }}
                onChangeValue={(e) => this.handleSearchChange(e["search1"])}
              />
            </div>
            <div>
              <Mbutton
                className="m_button green drop-button-shadow"
                block
                htmlType="submit"
                type="primary"
                onClick={this.handleFormSubmit}
                ref={this.mButtonRef}
                dataSource={{
                  textbutton: "Xuất file excel",
                  color: "",
                  size: "12",
                  icon: "FileExcelOutlined",
                }}
              />
            </div>
          </div>
          <div className="customer-panel-right-table">
            <Mtable
              rows={this.state.tableData.reactGridRows}
              columns={this.state.tableData.reactGridColumns}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default Customer;
