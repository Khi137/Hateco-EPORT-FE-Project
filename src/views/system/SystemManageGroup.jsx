import React, { Component, createRef } from "react";
import { Mcard, Mtable, Winput } from "../../components/BasicUI";
import { Row } from "antd";
import { Content } from "antd/es/layout/layout";

const rowData = [
  {
    key: "1",
    levelGroup: "2",
    codeGroup: "QUANTRI",
    nameGroup: "Quản Trị Hệ Thống",
    note: "",
  },
  {
    key: "2",
    levelGroup: "2",
    codeGroup: "DEV",
    nameGroup: "developer",
    note: "",
  },
  {
    key: "3",
    levelGroup: "2",
    codeGroup: "BOD",
    nameGroup: "BOD Tập Đoàn",
    note: "",
  },
  {
    key: "4",
    levelGroup: "2",
    codeGroup: "RM",
    nameGroup: "RM Tập đoàn",
    note: "",
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

for (let index = 0; index < 30; index++) {
  const duplicatedData = { ...rowData[0] };
  duplicatedData.ContainerNo = generateRandomContainerNo();
  rowData.push(duplicatedData);
}
export class SystemManageGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        pinCode: "",
        pinCodeError: true,

        taxCode: "",
        billForm: "",
        billSymbol: "",
        billNumber: "",

        searchData: "",
      },
      radioValue: "pincode",
      tableData: rowData,
      isLoading: false,
    };
    this.submitButtonRef = createRef();
    this.pinCodeRef = createRef();
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      formData: {
        ...prevState.formData,
        [name]: value,
      },
    }));
    return value;
  };

  handleRadioChange = (returnValue) => {
    this.setState({
      radioValue: returnValue,
    });
  };

  handleLoadData = () => {
    const pinCodeError = this.state.formData.pinCodeError;
    if (pinCodeError) {
      this.pinCodeRef?.current?.handleCheckError();
      return;
    }
    this.setState({ isLoading: true });
    if (this.submitButtonRef.current) {
      this.submitButtonRef.current.loading();
    }
    setTimeout(() => {
      if (this.submitButtonRef.current) {
        this.submitButtonRef.current.reset();
        this.setState((prevState) => ({
          tableData: rowData,
          formData: {
            ...prevState.formData,
            pinCodeError: false,
          },
          isLoading: false,
        }));
      }
    }, 1000);
  };

  renderInputField = (item, key) => {
    return (
      <Row key={key + item?.name}>
        <Winput
          title={item?.title}
          value={item.value}
          tooltip={item.tooltip}
          onChange={(e) => this.handleInputChange(e)}
          checkError={(error) =>
            this.setState((prevState) => ({
              formData: {
                ...prevState.formData,
                [item?.name + "Error"]: error,
              },
            }))
          }
          require={item.require}
          inputRegex={item.regex}
          minLength={item.minLength}
          name={item?.name}
          type={item?.type}
          className={`form_input_field ${item?.error ? "error_item" : ""}`}
          prefix={item?.inputIcon}
          placeholder={item?.placeholder}
          defaultValue={item?.value}
          error={typeof item?.error === "string" ? item?.error : false}
          ref={item.ref}
        />
      </Row>
    );
  };
  render() {
    const columnsFormat = [
      { columnId: "STT", width: 50, resizable: true, header: "STT" },
      {
        columnId: "Level",
        width: 200,
        resizable: true,
        reorderable: true,
        header: "Cấp độ nhóm",
      },
      {
        columnId: "CodeGroup",
        width: 200,
        resizable: true,
        reorderable: true,
        header: "Mã nhóm",
      },
      {
        columnId: "NameGroup",
        width: 200,
        resizable: true,
        reorderable: true,
        header: "Tên nhóm",
      },
      {
        columnId: "Note",
        width: 800,
        resizable: true,
        reorderable: true,
        header: "Ghi chú",
      },
    ];

    const rowsFormat = (container, index) => {
      return [
        { type: "text", nonEditable: true, text: String(index + 1) },
        { type: "text", nonEditable: false, text: container?.levelGroup || "" },
        {
          type: "text",
          nonEditable: true,
          text: container?.codeGroup || "",
        },
        {
          type: "text",
          nonEditable: true,
          text: container?.nameGroup || "",
        },
        {
          type: "text",
          nonEditable: true,
          text: container?.note || "",
        },
      ];
    };

    const rowsHeader = [
      { type: "header", text: "STT" },
      { type: "header", text: "Cấp độ nhóm" },
      { type: "header", text: "Mã nhóm" },
      { type: "header", text: "Tên nhóm" },
      { type: "header", text: "Ghi chú" },
    ];
    return (
      <Content className="flex_layout-8-16_container">
        <Mcard
          title={
            <>
              <span style={{ color: "white" }}>Danh sách nhóm người dùng</span>
            </>
          }
        >
          <Mtable
            config={{
              defaultData: this.state.tableData,
              columnsFormat: columnsFormat,
              rowsFormat: rowsFormat,
              rowsHeader: rowsHeader,
              reorderRow: true,
            }}
            functionRequire={{
              addcolumn: true,
              deleteColumn: true,
              saveData: (data) => {
                console.log(data);
              },
              searchField: ["CodeGroup", "NameGroup"],
            }}
          />
        </Mcard>
      </Content>
    );
  }
}

export default SystemManageGroup;
