import React from 'react';
import { Spin, Modal, Row, Col, Tag } from 'antd';
import { Link } from 'react-router-dom';
import { UserOutlined, GlobalOutlined } from '@ant-design/icons';
import { Content } from "antd/es/layout/layout";
import {
  Mbutton,
  Mcard,
  MeditInput,
  Mdivider,
  Mform,
  Mmultiswitch
} from "../../components/BasicUI/BasicUI";
import {
  MchangeAvatar
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


class PersonalInfor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  renderSelectTime() {
    return (
      <Mdivider dataSource={{
        label: <Mmultiswitch
          dataSource={{
            class: "m-custom-bg",
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
              // this.handleChangeTime(value);
            }
          }}
        />
      }} style={{ marginBottom: "0px" }}>

      </Mdivider>
    );
  }

  render() {

    return (
      // <Spin size="large" spinning="false">
      <Content className='flex_layout-8-16_container' >


        <Modal
          visible={this.state.changePassModal}
          title="Thay đổi mật khẩu"
          onCancel={() => this.setState({ changePassModal: false })}
          closable={true}
          footer={null}
        >
          <Mform
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
                    onClick={this.handleChangePassword}
                    ref={this.submitButtonRef}
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
              <div className="content-box">
                <Row glutter={12}>
                  <Col span={24}>
                    {this.renderSelectTime()}
                  </Col>
                  
                </Row>
              </div>
            </div>
          </Col>
        </Row>

      </Content>
      // </Spin>
    );
  }
}

export default PersonalInfor; 