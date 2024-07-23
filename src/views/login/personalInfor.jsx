import React from 'react';
import { Spin, Modal, Row, Col, Tag, Statistic, Empty, message } from 'antd';
import { Link } from 'react-router-dom';
import { UserOutlined, GlobalOutlined } from '@ant-design/icons';
import { Content } from "antd/es/layout/layout";
import { Pie } from '@ant-design/charts';
import {
  Mbutton,
  Mcard,
  MeditInput,
  Mdivider,
  Mform,
  Mmultiswitch
} from "../../components/BasicUI/BasicUI";
import {
  MchangeAvatar,
  MrequireForm
} from "../../components/Mrender";
const terminalList = [
  {
    TerminalCode: "NDP",
    name: "CẢNG NAM HẢI ĐÌNH VŨ",
  },
  {
    TerminalCode: "NDV",
    name: "CẢNG NAM ĐÌNH VŨ",
  },
  {
    TerminalCode: "NHP",
    name: "CẢNG NAM HẢI",
  },
  {
    TerminalCode: "NHI",
    name: "NAM HẢI ICD",
  },
  {
    TerminalCode: "BDP",
    name: "CẢNG BÌNH DƯƠNG",
  },
  {
    TerminalCode: "GML",
    name: "CẢNG GEMALINK",
  },
  {
    TerminalCode: "VMD",
    name: "ASL GEMADEPT DEPOT",
  },
  {
    TerminalCode: "ASL",
    name: "GAL DEPOT",
  },
  {
    TerminalCode: "STD",
    name: "SUỐI TIÊN 2 DEPOT",
  },
  {
    TerminalCode: "PIP",
    name: "PHƯỚC LONG ICD 1",
  },
  {
    TerminalCode: "IC3",
    name: "PHƯỚC LONG ICD 3",
  },
  {
    TerminalCode: "GNL",
    name: "GNL DEPOT",
  }
]
const mockData = {
  order: [
    { TerminalCode: 'T001', Status: 'pending', Counting: 10, TotalAmount: 1000 },
    { TerminalCode: 'T001', Status: 'completed', Counting: 20, TotalAmount: 2000 },
    { TerminalCode: 'T002', Status: 'pending', Counting: 15, TotalAmount: 1500 },
    { TerminalCode: 'T002', Status: 'completed', Counting: 25, TotalAmount: 2500 },
  ],
  invoice: [
    { TerminalCode: 'T001', Status: 'unpaid', Counting: 5, TotalAmount: 500 },
    { TerminalCode: 'T001', Status: 'paid', Counting: 15, TotalAmount: 1500 },
    { TerminalCode: 'T002', Status: 'unpaid', Counting: 8, TotalAmount: 800 },
    { TerminalCode: 'T002', Status: 'paid', Counting: 18, TotalAmount: 1800 },
  ],
  transfer: [
    { TerminalCode: 'T001', Status: 'pending', Counting: 3, TotalAmount: 300 },
    { TerminalCode: 'T001', Status: 'completed', Counting: 7, TotalAmount: 700 },
    { TerminalCode: 'T002', Status: 'pending', Counting: 4, TotalAmount: 400 },
    { TerminalCode: 'T002', Status: 'completed', Counting: 6, TotalAmount: 600 },
  ],
};

const OrderStatusList = [
  { key: 'pending', label: 'Pending' },
  { key: 'completed', label: 'Completed' },
];

const InvoiceStatusList = [
  { key: 'unpaid', label: 'Unpaid' },
  { key: 'paid', label: 'Paid' },
];
const TransactionStatusList = [
  { key: 'pending', label: 'Pending' },
  { key: 'completed', label: 'Completed' },
];
const changePass = [
  {
    label: "Nhập mật khẩu (hiện tại)",
    type: "input",
    inputType: "password",
    ref: "password",
    span: {
      xs: 24,
      sm: 24,
      md: 12,
      lg: 24
    }
  },
  {
    label: "",
    type: "divider",
    span: 24
  },
  {
    label: "Nhập mật khẩu (mới)",
    type: "input",
    inputType: "password",
    ref: "newpassword",
    span: {
      xs: 24,
      sm: 24,
      md: 24,
      lg: 24
    }
  },
  {
    label: "Nhập lại mật khẩu (mới)",
    type: "input",
    inputType: "password",
    ref: "renewpassword",
    span: {
      xs: 24,
      sm: 24,
      md: 24,
      lg: 24
    }
  },
]
class PersonalInfor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardType: "order",
      orderstate: "all",
      invoicestate: "all",
      transferstate: "all",
      changePassModal: false,
      loading: true,
      hasData: false,
      changePassData: changePass,
      datasample: {
        chart1: {
          label: "Cảng Nam Đình Vũ",
          data: [
            { type: "Chưa thanh toán", value: 30 },
            { type: "Đang chờ duyệt", value: 14},
            { type: "Đã duyệt", value: 13},
            { type: "Đã huỷ", value: 3}
          ]
        },
      }
    };
    this.timeType = "month";
    this.typeList = ["order", "invoice", "transfer"];
  }
  getDataSummary(type, orderType) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const result = mockData[type] || [];

        if (!result || result.length === 0) {
          this.setState({
            hasData: false,
            datasample: {}
          });
          resolve([]);
          return;
        }

        const statusList = type === 'order' ? OrderStatusList :
          type === 'invoice' ? InvoiceStatusList :
            TransactionStatusList;

        const temp = {};
        terminalList.forEach(terminal => {
          const terminalData = result.filter(item => item.TerminalCode === terminal.TerminalCode);
          if (terminalData.length > 0) {
            temp[terminal.TerminalCode] = {
              'label': terminal.name,
              'data': statusList.map(status => ({
                label: status.label,
                value: terminalData.filter(item => item.Status === status.key)
                  .reduce((sum, item) => sum + item.Counting, 0)
              }))
            };
          }
        });

        this.setState({
          hasData: Object.keys(temp).length > 0,
          datasample: temp
        });

        resolve(result);
      }, 500);
    });
  }
  renderSelectTime() {
    return (
      <Mdivider dataSource={{
        label: <Mmultiswitch
          dataSource={{
            class: "",
            options: [
              {
                label: "Tháng này",
                ref: "month",
                active: true
              },
              {
                label: "Quý này",
                ref: "sector",
              },
              {
                label: "Năm này",
                ref: "year"
              },
            ],
            returnValue: (value) => {
              this.handleChangeTime(value);
            }
          }}
        />
      }} style={{ fontSize: '16px' }}>

      </Mdivider>
    );
  }
  componentDidMount() {

    setTimeout(() => {
      this.setState({ loading: false, hasData: true });
    }, 1000);
  }
  renderTypeSelect(title, type, options = false) {
    let tempOpts = options;
    if (!options) {
      tempOpts = [
        {
          label: "hidden",
          ref: type + "hidden"
        }
      ];
    }
    return (
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignContent: "center",
        alignItems: "baseline"
      }}>
        <span>{title}</span>
        <Mmultiswitch
          style={{ visibility: (options ? "visible" : "hidden") }}
          dataSource={{
            options: tempOpts,
            returnValue: (value) => {
              this.handleChangeType(value);
            }
          }}
        />
      </div>
    );
  }
  renderPieChart(chartData) {
    console.log("ChartData", chartData)
    const config = {
      data: chartData,
      angleField: 'value',
      colorField: 'type',
      radius: 0.8,
      interactions: [
        {
          type: 'element-active',
        },
      ],
      legend: {
        position: 'bottom',
      },
      tooltip: {
        formatter: (datum) => {
          return {
            name: datum.type,
            value: `${datum.value} (${(datum.percent * 100).toFixed(2)}%)`
          };
        },
      },
      color: ({ type }) => {
        switch (type) {
          case 'Chưa thanh toán': return '#F4664A';
          case 'Đang chờ duyệt': return '#30BF78';
          case 'Đã duyệt': return '#FAAD14';
          default: return '#000000';
        }
      },
    };

    return <Pie {...config} />;
  }

  handleChangecard(type, e) {
    let current = e.currentTarget;
    if (current.classList.contains("active")) {
      return;
    } else {

    }
    let cardList = document.getElementsByClassName("m-clickable-card");
    Array.from(cardList).forEach(value => {
      value.classList.remove("active");
    });

    current.classList += " active";

    this.setState({ loading: true, cardType: type }, () => {
      this.getDataSummary(type, 'all')
        .then(result => {
          this.setState({ loading: false });
        })
        .catch(error => {
          console.error("Error fetching data:", error);
          this.setState({ loading: false });
        });
    });
  }
  handleChangeTime(value) {
    this.timeType = value;
    this.setState({ loading: true }, () => {
      this.getDataSummary(this.state.cardType, this.state[this.state.cardType + "state"])
        .then(() => {
          console.log(this.state.cardType)
          this.setState({ loading: false });
        })
        .catch(error => {
          console.error("Error fetching data:", error);
          this.setState({ loading: false });
        });
    });
  }

  handleChangeType(value) {
    const [type, ordertype] = value.split("-");

    this.setState(prevState => {
      const newState = {
        [type + "state"]: ordertype,
        loading: true,
        previousState: prevState[type + "state"]
      };
      console.log("Updating state:", newState);
      return newState;
    }, () => {
      console.log("Current state after update:", this.state);

      const isNewCardType = type !== this.state.cardType;

      this.getDataSummary(type, ordertype, isNewCardType)
        .then(result => {
          this.setState(prevState => {
            const newState = {
              loading: false,
              cardType: type
            };
            console.log("Data fetched. Orderstate", this.state.orderstate);
            console.log("Data fetched. Orderstate", this.state.invoicestate);
            return newState;
          });
        })
        .catch(error => {
          console.error("Error fetching data:", error);
          this.setState({ loading: false });
        });
    });
  }
  handleChangePass(data) {
    if (data.newpassword.length <= 4) {
      message.error("Mật khẩu phải có nhiều hơn 4 ký tự!");
      return;
    }

    if (data.newpassword !== data.renewpassword) {
      message.error("2 mật khẩu mới bắt buộc phải giống nhau!");
      return;
    }

    if (data.newpassword === data.password) {
      message.error("Mật khẩu mới không được giống mật khẩu hiện tại!");
      return;
    }
    this.setState({ changePassModal: false });

  }
  render() {

    return (
      <Spin size="large" spinning={this.state.loading}>
        <Content className='flex_layout-8-16_container' >


          <Modal
            visible={this.state.changePassModal}
            title="Thay đổi mật khẩu"
            onCancel={() => this.setState({ changePassModal: false })}
            closable={true}
            footer={null}
          >
            <MrequireForm
              dataSource={this.state.changePassData}
              submitBtn={(value) => this.handleChangePass(value)}
              submitBtnLabel="Xác nhận"
            />
          </Modal>
          <Row>
            <Col xs={24} sm={24} md={7}>
              <Mcard className="m-card-full">
                <Row gutter={12}>
                  <Col span={24} style={{ textAlign: "center" }}>
                    <MchangeAvatar />
                  </Col>
                  <Col span={24} style={{ fontSize: '16px', marginTop: "1rem" }}>
                    <Mbutton
                      color="green"
                      className="m_button btn-changepass"
                      htmlType="success"
                      block
                      border="green"
                      onClick={() => this.setState({ changePassModal: true })}
                      size={"12"}
                      dataSource={{
                        textbutton: `Thay đổi mật khẩu`,
                      }}
                    />
                  </Col>
                  <Col span={24} style={{ marginTop: "1rem", marginBottom: "0.5rem" }}>
                    <Mform >
                      <Col span={24} style={{ marginBottom: "0.5rem" }}>
                        <MeditInput
                          dataSource={{
                            label: "",
                            value: "developer",
                            icon: "ApartmentOutlined",
                            disable: true,
                            span: 24,
                          }}
                        />
                      </Col>
                      <Col span={12}>
                        <MeditInput
                          dataSource={{
                            label: "",
                            value: "devceh",
                            icon: "AuditOutlined",
                            disable: true,
                            span: 12,
                          }}
                        />
                      </Col>
                      <Col span={12}>
                        <MeditInput
                          dataSource={{
                            label: "",
                            value: "dev ceh",
                            icon: "UserOutlined",
                            disable: true,
                            span: 12
                          }}
                        />
                      </Col>

                    </Mform>
                  </Col>

                  <Col span={24}>
                    <Mform>
                      <Col span={24} style={{ marginBottom: "0.5rem" }}>
                        <MeditInput
                          dataSource={{
                            label: "",
                            value: "Ben Nghe",
                            icon: "EnvironmentOutlined",
                            span: 24,
                            returnValue: "",
                          }}
                        />
                      </Col>
                      <Col span={24} style={{ marginBottom: "0.5rem" }}>
                        <MeditInput
                          dataSource={{
                            label: "",
                            value: "087762882",
                            icon: "PhoneOutlined",
                            span: 24,
                            returnValue: "",
                          }}
                        />
                      </Col>
                      <Col span={24} style={{ marginBottom: "0.5rem" }}>
                        <MeditInput
                          dataSource={{
                            label: "",
                            value: "dev.ceh@gmail.com",
                            icon: "MailOutlined",
                            span: 24,
                            returnValue: "",
                          }}
                        />
                      </Col>
                    </Mform>
                  </Col>
                  <Col span={24}>
                    <Mdivider dataSource={{
                      label: "Cảng đăng ký",
                      span: 24
                    }} />
                  </Col>

                  <Col span={24}>
                    <Tag style={{ marginBottom: "8px" }} color="blue">
                      {terminalList[0].name}
                    </Tag>
                    <Tag style={{ marginBottom: "8px" }} color="blue">
                      {terminalList[1].name}
                    </Tag>
                  </Col>
                  <Col xs={12}>
                    <div className="m-board" style={{ borderLeft: "none" }}>
                      <span className="m-board-title">---</span>
                      <span className="m-board-subtitle">Xếp hạng</span>
                    </div>
                  </Col>
                  <Col xs={12}>
                    <div className="m-board" style={{ borderLeft: "none", borderRight: "none" }}>
                      <span className="m-board-title">0</span>
                      <span className="m-board-subtitle">Điểm tích lũy</span>
                    </div>
                  </Col>
                </Row>
              </Mcard>
            </Col>
            <Col xs={24} sm={24} md={17}>
              <div className="content-i">
                <div className="content-box" style={{ fontSize: '16px' }}>
                  <Row gutter={[16, 16]}>
                    <Col span={24}>
                      {this.renderSelectTime()}
                    </Col>
                    <Col span={24} style={{ marginTop: "-1rem" }}>
                      <Row gutter={[16, 16]}>
                        <Col xs={24} sm={24} md={7} lg={8}>
                          <Mcard
                            className="m-clickable-card active"
                            onClick={(e) => { this.handleChangecard("order", e,) }}
                          >
                            <Statistic
                              title={
                                this.renderTypeSelect(
                                  "Lệnh",
                                  "order",
                                  [
                                    {
                                      label: "Tất cả",
                                      ref: "order-all",
                                      active: true
                                    },
                                    {
                                      label: "Của tôi",
                                      ref: "order-private"
                                    },
                                    {
                                      label: "Làm hộ",
                                      ref: "order-outdoor"
                                    },
                                  ]
                                )
                              }
                              value={6}
                              valueStyle={{ color: '#3f8600' }}
                            />
                          </Mcard>
                        </Col>
                        <Col xs={24} sm={24} md={7} lg={8}>
                          <Mcard
                            className="m-clickable-card"
                            onClick={(e) => { this.handleChangecard("invoice", e,) }}
                          >
                            <Statistic
                              title={
                                this.renderTypeSelect(
                                  "Hoá đơn",
                                  "invoice",
                                  [
                                    {
                                      label: "Tất cả",
                                      ref: "invoice-all",
                                      active: true
                                    },
                                    {
                                      label: "Của tôi",
                                      ref: "invoice-private"
                                    },
                                    {
                                      label: "Làm hộ",
                                      ref: "invoice-outdoor"
                                    },
                                  ]
                                )
                              }
                              value="2 hoá đơn -> 10000000 VNĐ"
                              valueStyle={{ color: '#3f8600' }}
                            />
                          </Mcard>
                        </Col>
                        <Col xs={24} sm={24} md={7} lg={8}>
                          <Mcard
                            className="m-clickable-card"
                            onClick={(e) => { this.handleChangecard("transfer", e,) }}
                          >
                            <Statistic
                              title={
                                this.renderTypeSelect(
                                  "Giao dịch",
                                  "transfer",

                                )
                              }
                              value={2}
                              valueStyle={{ color: '#3f8600' }}
                            />
                          </Mcard>
                        </Col>
                      </Row>
                    </Col>
                    <Col span={24}>
                      <Mcard
                        className="m-card-centered"
                      >
                        <Row gutter={12} justifyContent="center">
                          {
                            this.state.hasData ?
                              Object.values(this.state.datasample).map((item, index) => {
                                return (
                                  <Col key={index} xs={24} sm={24} md={12} lg={8}>
                                    <Mcard title={item.label}>
                                      {this.renderPieChart(item.data)}
                                    </Mcard>
                                  </Col>
                                );
                              })
                              :
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                  justifyContent: "center",
                                  textAlign: "center",
                                  width: "100%",
                                }}
                              >
                                <Empty
                                  description={"Không có dữ liệu!"}
                                />
                              </div>
                          }
                        </Row>
                      </Mcard>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>

        </Content>
      </Spin>
    );
  }
}

export default PersonalInfor; 