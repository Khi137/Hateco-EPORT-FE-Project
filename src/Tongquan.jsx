import React, { Component } from "react";
import "./Tongquan.scss";
import {
  CloseOutlined,
  MenuUnfoldOutlined,
  MinusCircleOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import Header from "./components/Header";

const LenhGiaoContainer = [
  {
    text: "Lệnh giao container hàng",
    subText: [
      {
        subText: "Lệnh giao hàng",
      },
      {
        subText: "Lệnh giao hàng",
      },
    ],
  },
  {
    text: "Lệnh giao container rỗng",
  },
  {
    text: "Lệnh hạ container hàng",
  },
  {
    text: "Lệnh hạ container rỗng",
    subText: [
      {
        subText: "Lệnh giao hàng",
      },
      {
        subText: "Lệnh giao hàng",
      },
    ],
  },
  {
    text: "Lệnh đóng hàng container",
  },
  {
    text: "Lệnh rút hàng container",
  },
  {
    text: "Lệnh dịch vụ",
  },
];
export class Tongquan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };
  }
  handleChangeModal = () => {
    this.setState({
      modal: true,
      selectedMenu: null,
    });
  };
  handleSelectMenu = (menu) => {
    this.setState((prevState) => ({
      selectedMenu: prevState.selectedMenu === menu ? null : menu,
    }));
  };

  render() {
    return (
      <>
        <Header />
        <div className="tongquan-container">
          <div className="tacnghiep-panel">
            <header className="header">Tác nghiệp</header>
            <ul className="danhsach-lenhha">
              {LenhGiaoContainer.map((item) => (
                <li> {item.text}</li>
              ))}
            </ul>
          </div>
          <div
            className={
              this.state.modal
                ? "huongdan-panel black-shadow"
                : "huongdan-panel"
            }
          >
            <header className="header">
              <MenuUnfoldOutlined
                style={{ fontSize: "25px", marginRight: "12px" }}
                onClick={this.handleChangeModal}
              />
              <span className="huongdan">Hướng dẫn lệnh cơ bản</span>
              <span className="lenh">Lệnh hạ container hàng</span>
              <span className="buoc">Bước 1</span>
            </header>
            {this.state.modal && (
              <div className="modal-huongdan">
                <header>
                  <span>Hướng dẫn lệnh cơ bản</span>
                  <CloseOutlined
                    style={{ borderRight: "none" }}
                    onClick={() => this.setState({ modal: false })}
                  />
                </header>
                <ul id="main-huongdan">
                  {LenhGiaoContainer.map((item) => (
                    <li onClick={() => this.handleSelectMenu(item)}>
                      {this.state.selectedMenu === item ? (
                        <MinusCircleOutlined />
                      ) : (
                        <PlusCircleOutlined style={{ marginLeft: "none" }} />
                      )}

                      <span>{item.text}</span>
                      {this.state.selectedMenu === item && (
                        <ul>
                          {item.subText &&
                            item.subText.map((el, subIndex) => (
                              <li key={subIndex} className="subtext-menu">
                                <b>Bước {subIndex + 1}: </b>
                                <span style={{ marginLeft: "1px" }}>
                                  {el.subText}
                                </span>
                              </li>
                            ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="huongdanchitiet">
              <img
                src="https://hatecologistics.vn/wp-content/uploads/2020/06/IMG_0731.jpg"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Tongquan;

