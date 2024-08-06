// Danh mục khách hàng

import React, { Component } from "react";
import "@silevis/reactgrid/styles.css";
import {
  Mselect,
  Minput,
  Mradio,
  Mbutton,
  Mtable,
  Msearch,
  Mcard,
} from "../../components/BasicUI/BasicUI";
import {
  formatDateTime,
  handleColumnsReorder,
  handleRowsReorder,
  handleRowsSearch,
} from "../../utils/util";
import { Content } from "antd/es/layout/layout";
import { Col, Row } from "antd";
import { getCustomer } from "../../service.js/common.service";
import { DatabaseOutlined, LoadingOutlined } from "@ant-design/icons";

const options = [
  {
    title: "Bậc khách hàng",
    data: [
      { value: "1", label: "Tất cả" },
      { value: "2", label: "XNK : Cty Xuất Nhập Khẩu" },
      { value: "3", label: "FWD : Cty FWD" },
    ],
  },
  {
    title: "Lựa chọn khách hàng",
    data: [
      { label: "Hoạt động", value: "1" },
      { label: "Không hoạt động", value: "2" },
      { label: "Tạm ngừng", value: "3" },
    ],
  },
];

export class Customer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        cusCode: "",
        cusName: "",
        searchData: "",
      },
      containerList: [],
      tableData: [],
      isLoading: false,
    };
  }

  loadData = async () => {
    this.setState({ isLoading: true })
    // const response = await getCustomer({ tax_code: "TAX002" })
    const response = await getCustomer()
    this.setState((prevState) => ({
      tableData: response?.data?.payload ? response?.data?.payload : [],
      formData: {
        ...prevState.formData,
      },
      isLoading: false,
    }));
    console.log(response?.data?.payload);
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      formData: {
        ...prevState.formData,
        [name]: value,
      },
    }));
  };

  renderSelect = (option, index) => {
    return (
      <>
        <p className="body-lg-normal">{option?.title || ""}</p>
        <Mselect
          dataSource={{
            label: "Loại khách hàng",
            options: option?.data || [],
            // icon: "SearchOutlined"
          }}
        />
      </>
    );
  };

  handleFormSubmit = () => {
    this.loadData()
  }

  render() {
    const { formData, cusCode } = this.state;

    const columnsFormat = [
      { columnId: "STT", width: 50, resizable: true, header: "STT" },
      {
        columnId: "cusCode",
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
        width: 500,
        resizable: true,
        reorderable: true,
        header: "Tên khách hàng",
      },
      {
        columnId: "address",
        width: 500,
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
      // {
      //   columnId: "payType",
      //   width: 200,
      //   resizable: true,
      //   reorderable: true,
      //   header: "Loại thanh toán",
      // },
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
    ];

    const rowsFormat = (container, index) => {
      return [
        { type: "text", nonEditable: true, text: String(index + 1) },
        {
          type: "text",
          nonEditable: false,
          text: container?.customer_code || "",
        },
        {
          type: "text",
          nonEditable: true,
          text: container?.taxcode || "",
        },
        { type: "text", nonEditable: true, text: container?.customer_name || "" },
        {
          type: "text",
          nonEditable: true,
          text: container?.email || "",
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
          text: container?.phone || "",
        },
        // {
        //   type: "text",
        //   nonEditable: true,
        //   text: container?.payType || "",
        // },
        {
          type: "text",
          nonEditable: true,
          text: container?.customer_level_code
            || "",
        },
        {
          type: "text",
          nonEditable: true,
          text: container?.customer_type_code
            || "",
        },
        {
          type: "text",
          nonEditable: true,
          text: (container?.is_active ? "Hoạt động" : "Ngừng hoạt động") || "",
        },
      ];
    };

    const rowsHeader = [
      { type: "header", text: "STT" },
      { type: "header", text: "Mã khách hàng" },
      { type: "header", text: "Mã số thuế" },
      { type: "header", text: "Tên khách hàng" },
      { type: "header", text: "Địa chỉ" },
      { type: "header", text: "Email" },
      { type: "header", text: "Đại diện" },
      { type: "header", text: "Số điện thoại" },
      // { type: "header", text: "Loại thanh toán" },
      { type: "header", text: "Bậc khách hàng" },
      { type: "header", text: "Loại khách hàng" },
      { type: "header", text: "Trạng thái" },
    ];

    return (
      <Content className="flex_layout-8-16_container">
        <Row gutter={[12, 12]}>
          <Col lg={{ span: 8 }} sm={{ span: 24 }} xs={{ span: 24 }} >
            <Mcard
              title={<span style={{ color: 'white' }}>Danh mục khách hàng</span>}
              className="flex_card"
            >
              <Col className="input_layout tracking_bill_input">
                {options.map((option, index) => {
                  return this.renderSelect(option, index);
                })}

                <Row>
                  <Minput
                    dataSource={{
                      label: "Mã số thuế",
                      inputType: "text",
                      placeholder: "Nhập mã số thuế ...",
                    }}
                  />
                  <Minput
                    dataSource={{
                      label: "Tên khách hàng",
                      inputType: "text",
                      placeholder: "Nhập tên khách hàng ...",
                    }}
                  />
                </Row>

                <Row>
                  <Row className="line ">Hình thức thanh toán</Row>
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
                </Row>
                <Row>
                  <Row className="line ">Trạng thái hoạt động</Row>
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
                </Row>
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
              </Col>
            </Mcard>
          </Col>
          <Col className="layout_col" lg={{ span: 16 }} sm={{ span: 24 }} xs={{ span: 24 }}>
            <Mcard
              title={<span style={{ color: 'white' }}>Danh sách container</span>}
              className="container_list"
            >
              {!this.state.isLoading ? (
                !this.state.tableData[0] ? (
                  <Col className="no_data">
                    <Row justify={"center"}>
                      <DatabaseOutlined className="no_data_icon" />
                    </Row>
                    <Row justify={"center"}>Không có dữ liệu</Row>
                  </Col>
                ) : (
                  <Mtable
                    config={{
                      defaultData: this.state.tableData,
                      columnsFormat: columnsFormat,
                      rowsFormat: rowsFormat,
                      rowsHeader: rowsHeader,
                      reoderRow: true,
                    }}
                    functionRequire={{
                      addcolumn: false,
                      deleteColumn: true,
                      exportExel: true,
                      saveData: (data) => {
                        console.log(data);
                      },
                      searchField: ["cusCode", "OperationCode", "IsoSizetype"],
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
      </Content >
    );
  }
}
export default Customer;
