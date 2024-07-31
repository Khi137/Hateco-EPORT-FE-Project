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
    { TerminalCode: 'T001', Status: 'Chưa thanh toán', Counting: 10, TotalAmount: 1000 },
    { TerminalCode: 'T002', Status: 'Đang chờ duyệt', Counting: 20, TotalAmount: 2000 },
    { TerminalCode: 'T003', Status: 'Đã duyệt', Counting: 15, TotalAmount: 1500 },
    { TerminalCode: 'T004', Status: 'Đã huỷ', Counting: 25, TotalAmount: 2500 },
  ],
  invoice: [
    { TerminalCode: 'T001', Status: 'Thanh toán trực tiếp', Counting: 5, TotalAmount: 500000 },
    { TerminalCode: 'T002', Status: 'Thanh toán online', Counting: 3, TotalAmount: 1500000 },
    { TerminalCode: 'T003', Status: 'Chưa thanh toán', Counting: 1, TotalAmount: 800000 },
    { TerminalCode: 'T004', Status: 'Bị huỷ', Counting: 2, TotalAmount: 18000000 },
  ],
  transfer: [
    { TerminalCode: 'T001', Status: 'Thất bại', Counting: 3, TotalAmount: 300 },
    { TerminalCode: 'T002', Status: 'Chưa hoàn tất', Counting: 7, TotalAmount: 700 },
    { TerminalCode: 'T003', Status: 'Thành công', Counting: 4, TotalAmount: 400 },
  ],
};

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
      cardData: {
        order: { count: 0, amount: 0 },
        invoice: { count: 0, amount: 0 },
        transfer: { count: 0, amount: 0 },
      },
      currentChartData: [],
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

        const sampleData = {
          chart1: {
            label: "Cảng Nam Đình Vũ",
            data: [
              { type: "Chưa thanh toán", value: Math.floor(Math.random() * 50) + 10 },
              { type: "Đang chờ duyệt", value: Math.floor(Math.random() * 30) + 5 },
              { type: "Đã duyệt", value: Math.floor(Math.random() * 40) + 15 },
              { type: "Đã huỷ", value: Math.floor(Math.random() * 10) + 1 }
            ]
          }
        };

        this.setState({
          hasData: true,
          datasample: sampleData
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
  loadChartData(type) {
    this.getDataSummary(type, this.state[type + 'state'])
      .then(result => {
        const chartData = this.prepareChartData(result);
        this.setState({
          currentChartData: chartData,
          hasData: chartData.length > 0,
          cardType: type
        });
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        this.setState({ hasData: false });
      });
  }
  componentDidMount() {

    setTimeout(() => {
      this.loadInitialData();
      this.loadChartData('order');
      this.setState({ loading: false, hasData: true });
    }, 1000);
  }
  loadInitialData() {
    const cardData = {};
    this.typeList.forEach(type => {
      cardData[type] = this.calculateCardData(type);
    });

    this.setState({
      loading: false,
      hasData: true,
      cardData: cardData,
    });
  }
  calculateCardData(type) {
    const data = mockData[type];
    const count = data.reduce((sum, item) => sum + item.Counting, 0);
    const amount = data.reduce((sum, item) => sum + item.TotalAmount, 0);
    return { count, amount };
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
    console.log(this.state.currentChartData)
    const config = {
      data: this.state.currentChartData,
      angleField: 'value',
      colorField: 'type',
      label: {
        text: 'value',
        style: {
          fontWeight: 'bold',
        },
      },
      legend: {
        color: {
          title: false,
          position: 'bottom',
          rowPadding: 5,
        },
      },
    };
    return <Pie {...config} />;
  };


  handleChangecard(type, e) {
    let current = e.currentTarget;
    if (current.classList.contains("active")) {
      return;
    }

    let cardList = document.getElementsByClassName("m-clickable-card");
    Array.from(cardList).forEach(value => {
      value.classList.remove("active");
    });

    current.classList.add("active");

    this.setState({ loading: true, cardType: type }, () => {

      this.getDataSummary(type, this.state[type + 'state'])
        .then(result => {

          const chartData = this.prepareChartData(result);
          this.setState({
            loading: false,
            currentChartData: chartData,
            hasData: chartData.length > 0
          });
          this.loadChartData(type);
        })
        .catch(error => {
          console.error("Error fetching data:", error);
          this.setState({ loading: false, hasData: false });
        });

    });
  }
  prepareChartData(data) {
    return data.map(item => ({
      type: item.Status,
      value: item.Counting
    }));
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
                      type="primary"
                      ghost
                      block
                      onClick={() => this.setState({ changePassModal: true })}
                      style={{
                        borderColor: '#00bf72',
                        color: '#00bf72',
                        marginTop: '1rem'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#00bf72';
                        e.currentTarget.style.color = 'white';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.color = '#00bf72';
                      }}
                      dataSource={{
                        textbutton: `Thay đổi mật khẩu`,
                    }}
                    >
                     
                    </Mbutton>
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
                    {terminalList.slice(0, 6).map((terminal, index) => (
                      <Tag key={index} style={{ marginBottom: "8px" }} color="blue">
                        {terminal.name}
                      </Tag>
                    ))}
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
                            style={{ 
                              minHeight: '15vh',
                              cursor: 'pointer'
                            }}
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
                              value={`${this.state.cardData.order.count}`}
                              valueStyle={{ color: '#3f8600' }}
                            />
                          </Mcard>
                        </Col>
                        <Col xs={24} sm={24} md={7} lg={8}>
                          <Mcard
                            className="m-clickable-card"
                            onClick={(e) => { this.handleChangecard("invoice", e,) }}
                            style={{ 
                              minHeight: '15vh',
                              cursor: 'pointer'
                            }}
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
                              value={`${this.state.cardData.invoice.count} hoá đơn -> ${this.state.cardData.invoice.amount.toLocaleString()} VNĐ`}
                              valueStyle={{ color: '#3f8600' }}
                            />
                          </Mcard>
                        </Col>
                        <Col xs={24} sm={24} md={7} lg={8}>
                          <Mcard
                            className="m-clickable-card"
                            onClick={(e) => { this.handleChangecard("transfer", e,) }}
                            style={{ 
                              minHeight: '15vh',
                              cursor: 'pointer'
                            }}
                          >
                            <Statistic
                              title={
                                this.renderTypeSelect(
                                  "Giao dịch",
                                  "transfer",

                                )
                              }
                              value={`${this.state.cardData.transfer.count}`}
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
                            this.state.hasData && this.state.datasample && typeof this.state.datasample === 'object' && Object.keys(this.state.datasample).length > 0 ?
                              Object.values(this.state.datasample).map((item, index) => {
                                return (
                                  <Col key={index} xs={24} sm={24} md={12} lg={8}>
                                    <Mcard title={item.label}>
                                      {this.renderPieChart()}
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
                                  description={this.state.cardType === "invoice" ? "Biểu đồ không khả dụng cho hoá đơn" : "Không có dữ liệu!"}
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