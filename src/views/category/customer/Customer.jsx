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
} from "../../../components/BasicUI";
import {
  formatDateTime,
  handleColumnsReorder,
  handleRowsReorder,
  handleRowsSearch,
} from "../../../utils/util";
import "./Customer.scss";

let rowData = [
  {
    key: "1",
    cusCode: "YKH0006894",
    TaxNum: "0109117704",
    cusName: "CÔNG TY TNHH THƯƠNG MẠI XUẤT NHẬP KHẨU VÀ DỊCH VỤ MINH QUANG",
    address:
      "Số 27 ngách 99/158 Ðịnh Công Hạ, Phường Ðịnh Công, Quận Hoàng Mai, Thành phố Hà Nội, Việt Nam",
    email: null,
    represent: null,
    phoneNum: null,
    payType: "Thu ngay",
    cusLevel: null,
    cusType: "FWD",
    status: "Hoạt động",
  },
  {
    key: "2",
    cusCode: "YKH0006898",
    TaxNum: "0201316490",
    cusName: "CÔNG TY TRÁCH NHIỆM HỮU HẠN KIM KHÍ HỒNG VẬN",
    address:
      "Tổ dân phố Tân Khê (tại nhà ông Vũ Văn Chiến), Phường Đồng Hoà, Quận Kiến An, Thành Phố Hải Phòng, Việt Nam",
    email: null,
    represent: null,
    phoneNum: null,
    payType: "Thu ngay",
    cusLevel: null,
    cusType: "FWD",
    status: "Hoạt động",
  },
  {
    key: "3",
    cusCode: "YKH0006899",
    TaxNum: "0000100002",
    cusName: "SHOWA DENKO SINGAPORE (PTE) LTD",
    address: "2 SHENTON WAY # 15 - 03/04, SGX CENTRE 1, SINGAPORE 068804",
    email: null,
    represent: null,
    phoneNum: null,
    payType: "Thu ngay",
    cusLevel: null,
    cusType: "FWD",
    status: "Hoạt động",
  },
  {
    key: "4",
    cusCode: "YKH0006951",
    TaxNum: "2901938797",
    cusName: "CÔNG TY TNHH MỘT THÀNH VIÊN ANH TUẤN",
    address: "Xóm 5, Xã Diễn Tháp, Huyện Diễn Châu, Tỉnh Nghệ An, Việt Nam",
    email: null,
    represent: null,
    phoneNum: null,
    payType: "Thu ngay",
    cusLevel: null,
    cusType: "FWD",
    status: "Hoạt động",
  },
  {
    key: "5",
    cusCode: "YKH0006952",
    TaxNum: "0106833562",
    cusName: "CÔNG TY TNHH THƯƠNG MẠI VÀ PHÁT TRIỂN DƯƠNG NGUYỄN",
    address:
      "Số 109 Thanh Ấm, Thị trấn Vân Đình, Huyện Ứng Hoà, Thành phố Hà Nội, Việt Nam",
    email: null,
    represent: null,
    phoneNum: null,
    payType: "Thu ngay",
    cusLevel: null,
    cusType: "FWD",
    status: "Hoạt động",
  },
  {
    key: "6",
    cusCode: "YKH0006953",
    TaxNum: "0108245679",
    cusName: "CÔNG TY TNHH THƯƠNG MẠI TIAMO",
    address: "Thôn Bặt Ngõ, Xã Liên Bạt, Huyện Ứng Hoà, TP.Hà Nội, VN",
    email: null,
    represent: null,
    phoneNum: null,
    payType: "Thu ngay",
    cusLevel: null,
    cusType: "FWD",
    status: "Hoạt động",
  },
  {
    key: "7",
    cusCode: "YKH0002794",
    TaxNum: "0901067514",
    cusName: "CÔNG TY TNHH CÔNG NGHỆ RAIDON",
    address:
      "Đường D1, Khu công nghiệp Yên Mỹ II, Xã Trung Hưng, Huyện Yên Mỹ, Tỉnh Hưng Yên",
    email: null,
    represent: null,
    phoneNum: null,
    payType: "Thu ngay",
    cusLevel: null,
    cusType: "FWD",
    status: "Hoạt động",
  },
  {
    key: "8",
    cusCode: "YKH0002795",
    TaxNum: "0200118418",
    cusName: "CÔNG TY TRÁCH NHIỆM HỮU HẠN HOA MỸ",
    address:
      "Số 81 Đinh Nhu, Phường Niệm Nghĩa, Quận Lê Chân, Thành Phố Hải Phòng, Việt Nam",
    email: null,
    represent: null,
    phoneNum: null,
    payType: "Thu ngay",
    cusLevel: null,
    cusType: "FWD",
    status: "Hoạt động",
  },
  {
    key: "9",
    cusCode: "KH10033Z",
    TaxNum: "2400743878",
    cusName: "CÔNG TY CỔ PHẦN CẨM LÂM VIỆT NAM",
    address:
      "Cụm Công nghiệp Đại Lâm, Xã Đại Lâm, Huyện Lạng Giang,Tỉnh Bắc Giang",
    email: null,
    represent: null,
    phoneNum: null,
    payType: "Thu ngay",
    cusLevel: null,
    cusType: "FWD",
    status: "Hoạt động",
  },
  {
    key: "10",
    cusCode: "KHN080",
    TaxNum: "2901738808",
    cusName: "CÔNG TY TNHH MỘT THÀNH VIÊN MASAN MB",
    address:
      "Khu B, Khu công nghiệp Nam Cấm - Khu kinh tế Đông Nam Nghệ An, Xã Nghi Long, Huyện Nghi Lộc, Tỉnh Nghệ An, Việt Nam",
    email: null,
    represent: null,
    phoneNum: null,
    payType: "Thu ngay",
    cusLevel: null,
    cusType: "FWD",
    status: "Hoạt động",
  },
];

const options = [
  {
    title: "Bâc khach hang",
    data: [
      { value: "1", label: "Tất cả" },
      { value: "2", label: "XNK : Cty Xuất Nhập Khẩu" },
      { value: "3", label: "FWD : Cty FWD" },
    ],
  },
  {
    title: "Lua chon khach hang",
    data: [
      { label: "Hoạt động", value: "1" },
      { label: "Không hoạt động", value: "2" },
      { label: "Tạm ngừng", value: "3" },
    ],
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
  duplicatedData.ContainerNo = generateRandomContainerNo();
  rowData.push(duplicatedData);
}

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
    };
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
    console.log(index);
    return (
      <div className={`customer-panel-left-select_${index + 1}`}>
        <p className="body-lg-normal">{option?.title || ""}</p>
        <Mselect
          dataSource={{
            label: "Loại khách hàng",
            options: option?.data || [],
          }}
        />
      </div>
    );
  };

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
    ];

    const rowsFormat = (container, index) => {
      return [
        { type: "text", nonEditable: true, text: String(index + 1) },
        {
          type: "text",
          nonEditable: false,
          text: container?.cusCode || "",
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
      { type: "header", text: "Loại thanh toán" },
      { type: "header", text: "Bậc khách hàng" },
      { type: "header", text: "Loại khách hàng" },
      { type: "header", text: "Trạng thái" },
    ];

    return (
      <div className="customer-container">
        <div className="customer-panel-left drop-box-shadow">
          <header className="customer-panel-left-title title-xl-normal">
            Danh mục khách hàng
          </header>
          <div className="customer-panel-left-content">
            <div className="customer-panel-left-select">
              {options.map((option, index) => {
                return this.renderSelect(option, index);
              })}
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
              tableData={rowData}
              columnsFormat={columnsFormat}
              rowsFormat={rowsFormat}
              rowsHeader={rowsHeader}
              reoderRow={true}
              // searchValue={formData.searchData}
              // searchField={["ContainerNumber", "OperationCode", "IsoSizetype"]}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default Customer;