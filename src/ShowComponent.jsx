import React, { Component, createRef } from "react";
import {
  Mcollapse,
  Mdrawer,
  Mbutton,
  Mcapcha,
  Mtab,
  Mcheckbox,
  Mradio,
  Mdropdown,
  Minput,
  Mtable,
  Mselect,
  Msearch,
} from "./components/BasicUI";
import Header from "./components/Header";
import "./components/BasicUI.scss";
import * as LOL from "@ant-design/icons";

class ShowComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [
        { label: "Section 1", content: "Happy code!" },
        { label: "Section 2", content: "Happy money!" },
        { label: "Section 3", content: "Happy life!" },
      ],
      configCollapse: {},
      dataSourceDrawer: {
        content: "Happy code! Happy money! Happy life!",
      },
      configDrawer: {
        title: "Drawer Title",
        placement: "right",
        onClose: this.onClose,
        visible: this.state?.visible,
      },
      isCaptchaVerified: false,
      tabConfig: {
        dataEndpoint: "https://example.com/api/tabs", // URL giả định cho endpoint dữ liệu tabs
        footer:
          "This is a footer text for the tabs. Happy code! Happy money! Happy life!",
      },
      tabData: [
        { label: "Tab 1", content: "Content of Tab 1" },
        { label: "Tab 2", content: "Content of Tab 2", badge: 5 },
        { label: "Tab 3", content: "Content of Tab 3" },
      ],
      checkboxValue: false,
      radioValue: "option1",
      dropdownItems: ["Item 1", "Item 2", "Item 3"],
      inputValue: "",
      selectValue: "",
      searchValue: "",
      checkbox: false,
      formdata: {
        user: "",
        userError: "Không được để trống",
      },
      tableData: [
        {
          key: "1",
          name: "John Brown",
          age: 32,
          address: "New York No. 1 Lake Park",
        },
        {
          key: "2",
          name: "Jim Green",
          age: 42,
          address: "London No. 1 Lake Park",
        },
        {
          key: "3",
          name: "Joe Black",
          age: 32,
          address: "Sydney No. 1 Lake Park",
        },
      ],
    };

    this.mButtonRef = createRef();

    this.columns = [
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
      },
      {
        title: "Age",
        dataIndex: "age",
        key: "age",
      },
      {
        title: "Address",
        dataIndex: "address",
        key: "address",
      },
    ];
  }

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  onShow = () => {
    this.setState({
      visible: true,
    });
  };

  handleCaptchaVerify = (isVerified) => {
    this.setState({
      isCaptchaVerified: isVerified,
    });
  };

  // MCheckbox
  handleCheckboxChange = (returnValue) => {
    this.setState({
      checkboxValue: returnValue.checked,
    });
  };

  handleRadioChange = (returnValue) => {
    this.setState({
      radioValue: returnValue,
    });
  };

  handleInputChange = (value) => {
    this.setState({
      inputValue: value,
    });
  };

  handleFormSubmit = () => {
    if (this.mButtonRef.current) {
      this.mButtonRef.current.loading();
    }
    setTimeout(() => {
      if (this.mButtonRef.current) {
        this.mButtonRef.current.reset();
      }
    }, 2000);
  };

  handleSelectChange = (value) => {
    this.setState({
      selectValue: value,
    });
  };

  handleSearchChange = (value) => {
    this.setState({
      searchValue: value,
    });
  };

  render() {
    const checkboxDataSource = {
      label: "Ghi nhớ mật khẩu",
      value: this.state.checkbox,
      className: `${this.state.checkbox && "m-checkbox_checked"}`,
    };

    const inputvalue = "";

    return (
      <>
        <Header />
        <div className="typography-container">
          <h1 className="heading-lg-normal" style={{ margin: "0 0 30px 0" }}>
            Typography
          </h1>
          <div className="typo-heading-xl-normal">
            <div className="typography-example">
              <div className="typography-info">
                <div>heading-xl-normal</div>
                <div>
                  <p>font:</p>
                  <p>IBM Plex</p>
                </div>
                <div>
                  <p>size:</p>
                  <p>60px</p>
                </div>
                <div>
                  <p>line-height:</p>
                  <p>78px</p>
                </div>
                <div>
                  <p>weight:</p>
                  <p>400/700</p>
                </div>
              </div>
              <div className="example-text heading-xl-normal">
                A design system is essentially a collection of rules,
                constraints, and principles implemented in design and code.
              </div>
            </div>
          </div>

          <div className="typo-heading-lg-normal">
            <div className="typography-example">
              <div className="typography-info">
                <div>heading-lg-normal</div>
                <div>
                  <p>font:</p>
                  <p>IBM Plex</p>
                </div>
                <div>
                  <p>size:</p>
                  <p>48px</p>
                </div>
                <div>
                  <p>line-height:</p>
                  <p>64px</p>
                </div>
                <div>
                  <p>weight:</p>
                  <p>400/700</p>
                </div>
              </div>
              <div className="example-text heading-lg-normal">
                A design system is essentially a collection of rules,
                constraints, and principles implemented in design and code.
              </div>
            </div>
          </div>

          <div className="typo-heading-md-normal">
            <div className="typography-example">
              <div className="typography-info">
                <div>heading-md-normal</div>
                <div>
                  <p>font:</p>
                  <p>IBM Plex</p>
                </div>
                <div>
                  <p>size:</p>
                  <p>34px</p>
                </div>
                <div>
                  <p>line-height:</p>
                  <p>48px</p>
                </div>
                <div>
                  <p>weight:</p>
                  <p>400/700</p>
                </div>
              </div>
              <div className="example-text heading-md-normal">
                A design system is essentially a collection of rules,
                constraints, and principles implemented in design and code.
              </div>
            </div>
          </div>

          <div className="typo-title-xl-normal">
            <div className="typography-example">
              <div className="typography-info">
                <div>title-xl-normal</div>
                <div>
                  <p>font:</p>
                  <p>IBM Plex</p>
                </div>
                <div>
                  <p>size:</p>
                  <p>24px</p>
                </div>
                <div>
                  <p>line-height:</p>
                  <p>34px</p>
                </div>
                <div>
                  <p>weight:</p>
                  <p>400/700</p>
                </div>
              </div>
              <div className="example-text title-xl-normal">
                A design system is essentially a collection of rules,
                constraints, and principles implemented in design and code.
              </div>
            </div>
          </div>

          <div className="typo-title-lg-normal">
            <div className="typography-example">
              <div className="typography-info">
                <div>title-lg-normal</div>
                <div>
                  <p>font:</p>
                  <p>IBM Plex</p>
                </div>
                <div>
                  <p>size:</p>
                  <p>20px</p>
                </div>
                <div>
                  <p>line-height:</p>
                  <p>30px</p>
                </div>
                <div>
                  <p>weight:</p>
                  <p>400/700</p>
                </div>
              </div>
              <div className="example-text title-lg-normal">
                A design system is essentially a collection of rules,
                constraints, and principles implemented in design and code.
              </div>
            </div>
          </div>

          <div className="typo-body-xl-normal">
            <div className="typography-example">
              <div className="typography-info">
                <div>body-xl-normal</div>
                <div>
                  <p>font:</p>
                  <p>IBM Plex</p>
                </div>
                <div>
                  <p>size:</p>
                  <p>18px</p>
                </div>
                <div>
                  <p>line-height:</p>
                  <p>28px</p>
                </div>
                <div>
                  <p>weight:</p>
                  <p>400/700</p>
                </div>
              </div>
              <div className="example-text body-xl-normal">
                A design system is essentially a collection of rules,
                constraints, and principles implemented in design and code.
              </div>
            </div>
          </div>

          <div className="typo-body-lg-normal">
            <div className="typography-example">
              <div className="typography-info">
                <div>body-lg-normal</div>
                <div>
                  <p>font:</p>
                  <p>IBM Plex</p>
                </div>
                <div>
                  <p>size:</p>
                  <p>16px</p>
                </div>
                <div>
                  <p>line-height:</p>
                  <p>24px</p>
                </div>
                <div>
                  <p>weight:</p>
                  <p>400/700</p>
                </div>
              </div>
              <div className="example-text body-lg-normal">
                A design system is essentially a collection of rules,
                constraints, and principles implemented in design and code.
              </div>
            </div>
          </div>

          <div className="typo-body-md-normal">
            <div className="typography-example">
              <div className="typography-info">
                <div>body-md-normal</div>
                <div>
                  <p>font:</p>
                  <p>IBM Plex</p>
                </div>
                <div>
                  <p>size:</p>
                  <p>14px</p>
                </div>
                <div>
                  <p>line-height:</p>
                  <p>20px</p>
                </div>
                <div>
                  <p>weight:</p>
                  <p>400/700</p>
                </div>
              </div>
              <div className="example-text body-md-normal">
                A design system is essentially a collection of rules,
                constraints, and principles implemented in design and code.
              </div>
            </div>
          </div>

          <div className="typo-body-sm-normal">
            <div className="typography-example">
              <div className="typography-info">
                <div>body-sm-normal</div>
                <div>
                  <p>font:</p>
                  <p>IBM Plex</p>
                </div>
                <div>
                  <p>size:</p>
                  <p>12px</p>
                </div>
                <div>
                  <p>line-height:</p>
                  <p>18px</p>
                </div>
                <div>
                  <p>weight:</p>
                  <p>400/700</p>
                </div>
              </div>
              <div className="example-text body-sm-normal">
                A design system is essentially a collection of rules,
                constraints, and principles implemented in design and code.
              </div>
            </div>
          </div>

          <div className="typo-caption-normal">
            <div className="typography-example">
              <div className="typography-info">
                <div>caption-normal</div>
                <div>
                  <p>font:</p>
                  <p>IBM Plex</p>
                </div>
                <div>
                  <p>size:</p>
                  <p>10px</p>
                </div>
                <div>
                  <p>line-height:</p>
                  <p>14px</p>
                </div>
                <div>
                  <p>weight:</p>
                  <p>400/700</p>
                </div>
              </div>
              <div className="example-text caption-normal">
                A design system is essentially a collection of rules,
                constraints, and principles implemented in design and code.
              </div>
            </div>
          </div>
        </div>

        <div className="component-bodylayout">
          <h1 className="heading-lg-normal">Show component</h1>
          <h2 className="heading-md-normal">Mcollapse</h2>
          <Mcollapse
            className="test-Mcollapse"
            dataSource={this.state.dataSource}
            config={this.state.config}
          />
          <h2 className="heading-md-normal">Mdrawer</h2>
          <Mbutton onClick={this.onShow} style={{ margin: "10px 0px" }}>
            Open Drawer
          </Mbutton>
          <Mdrawer
            dataSource={this.state.dataSourceDrawer}
            config={{ ...this.state.configDrawer, visible: this.state.visible }}
          />

          <h2 className="heading-md-normal">Mcapcha</h2>
          <div>
            <Mcapcha
              captchaEndpoint="https://example.com/api/captcha" // URL giả định cho endpoint CAPTCHA
              onVerify={this.handleCaptchaVerify}
            />
          </div>

          <h2 className="heading-md-normal">Mtab</h2>
          <div>
            <Mtab
              dataEndpoint="https://example.com/api/tabs" // URL giả định cho endpoint dữ liệu tabs
              footer="This is a footer text for the tabs. Happy code! Happy money! Happy life!"
              config={{ animated: true }}
              dataSource={this.state.tabData}
            />
          </div>

          <h2 className="heading-md-normal">Mcheckbox</h2>
          <div>
            <Mcheckbox
              dataSource={{
                value: this.state.checkboxValue,
                label: "I agree to the terms and conditions",
              }}
              onChangeValue={this.handleCheckboxChange}
            />
          </div>

          <h2 className="heading-md-normal">Mradio</h2>
          <div>
            <Mradio
              dataSource={{
                value: this.state.radioValue,
                label: "Select an option",
                options: [
                  { label: "Option 1", value: "option1" },
                  { label: "Option 2", value: "option2" },
                  { label: "Option 3", value: "option3" },
                ],
                radioStyle: {gap: "50px"}
              }}
              onChangeValue={this.handleRadioChange}
            />
          </div>

          <h2 className="heading-md-normal">Mdropdown</h2>
          <div style={{ margin: "20px 0px" }}>
            <Mdropdown
              id="dropdown1"
              dataSource={{
                id: "dropdown1",
              }}
              items={this.state.dropdownItems}
            />
          </div>

          <h2 className="heading-md-normal">Minput</h2>
          <div style={{ margin: "30px 0px" }}>
            <Minput
              dataSource={{
                id: "input1",
                label: "Label 1 (optional): *",
                value: this.state.inputValue,
                maxLength: 300,
                clearBtn: true,
                test: "*Vui lòng nhập dữ liệu!",
              }}
              onChangeValue={(e) => this.handleInputChange(e["input1"])}
            />
            <Minput
              dataSource={{
                id: "input2",
                label: "Label 2 (optional): *",
                value: this.state.inputValue,
                maxLength: 300,
                clearBtn: true,
                test: "*Vui lòng nhập dữ liệu!",
              }}
              onChangeValue={(e) => this.handleInputChange(e["input1"])}
            />
            <Minput
              dataSource={{
                id: "input2",
                label: "Label 3 (optional): *",
                value: this.state.inputValue,
                maxLength: 300,
                clearBtn: true,
                test: "*Vui lòng nhập dữ liệu!",
              }}
              onChangeValue={(e) => this.handleInputChange(e["input1"])}
            />
          </div>

          <h2 className="heading-md-normal">Mtable</h2>
          <Mtable columns={this.columns} dataSource={this.state.tableData} />

          <h2 className="heading-md-normal">Mbutton</h2>
          <div className="component-mbutton">
            <div className="component-mbutton-1">
              <Mbutton
                color=""
                className="m_button third"
                type="primary"
                htmlType="submit"
                block
                onClick={this.handleFormSubmit}
                ref={this.mButtonRef}
                size={"12"}
              ></Mbutton>
              <Mbutton
                color=""
                className="m_button third_border"
                type="primary"
                htmlType="submit"
                block
                onClick={this.handleFormSubmit}
                ref={this.mButtonRef}
                size={"12"}
              ></Mbutton>
              <Mbutton
                color=""
                className="m_button white_border"
                type="primary"
                htmlType="submit"
                block
                onClick={this.handleFormSubmit}
                ref={this.mButtonRef}
                size={"12"}
              ></Mbutton>
            </div>
            <div className="component-mbutton-2">
              <Mbutton
                color=""
                className="m_button red"
                type="primary"
                htmlType="submit"
                block
                onClick={this.handleFormSubmit}
                ref={this.mButtonRef}
                size={"12"}
              ></Mbutton>
              <Mbutton
                color=""
                className="m_button green"
                type="primary"
                htmlType="submit"
                block
                onClick={this.handleFormSubmit}
                ref={this.mButtonRef}
                size={"12"}
              ></Mbutton>
              <Mbutton
                color=""
                className="m_button orange"
                type="primary"
                htmlType="submit"
                block
                onClick={this.handleFormSubmit}
                ref={this.mButtonRef}
                size={"12"}
              ></Mbutton>
            </div>
          </div>

          <h2 className="heading-md-normal">Mselect</h2>
          <div>
            <Mselect
              dataSource={{
                id: "select1",
                label: "Choose an option",
                value: this.state.selectValue,
                options: [
                  { label: "Option 1", value: "option1" },
                  { label: "Option 2", value: "option2" },
                  { label: "Option 3", value: "option3" },
                ],
              }}
              onChangeValue={(e) => this.handleSelectChange(e["select1"])}
            />
          </div>

          <h2 className="heading-md-normal">Msearch</h2>
          <div>
            <Msearch
              dataSource={{
                id: "search1",
                label: "Search",
                value: this.state.searchValue,
                icon: "SearchOutlined",
                text: "abc"
              }}
              config={{
                onLiveSearch: (value) => console.log("Live search:", value),
              }}
              onChangeValue={(e) => this.handleSearchChange(e["search1"])}
            />
          </div>

        </div>
      </>
    );
  }
}

export default ShowComponent;
