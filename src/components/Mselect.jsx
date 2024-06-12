class Mselect extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        value: this.props.dataSource?.value || this.props.value || "",
      };
  
      this.selectRef = React.createRef();
    }
  
    componentDidMount() {
      if (this.selectRef.current) {
        this.selectRef.current.dataset.component = this;
      }
    }
  
    handleChange(e) {
      const { value } = e.target;
  
      this.setState({ value });
  
      const returnvalue = {
        [this.props.dataSource.ref]: value,
      };
  
      if (typeof this.props.dataSource.onChange === "function") {
        this.props.dataSource.onChange(e);
      }
  
      if (this.props.onChangeValue) {
        this.props.onChangeValue(returnvalue);
      }
  
      if ((this.props.config || {}).returnValue) {
        this.props.config.returnValue(value);
      }
    }
  
    checkBlur(e) {
      if (!e.target.value || e.target.value === "default") {
        e.target.parentElement
          .getElementsByTagName("label")[0]
          .classList.remove("m-form__label--focus");
      }
  
      if (typeof this.props.dataSource.onBlur === "function") {
        this.props.dataSource.onBlur(e.target.value);
      }
    }
  
    checkFocus(e) {
      e.target.parentElement
        .getElementsByTagName("label")[0]
        .classList.add("m-form__label--focus");
    }
  
    renderOptions(value) {
      let data = this.props.dataSource;
      var options = (this.state.options || data.options || []).map((item, ii) => {
        let temp;
        if (value + "" === item?.value + "") {
          temp = (
            <option
              key={item?.value + "" + ii}
              value={item?.value}
              data={JSON.stringify(item.data || {})}
              selected="selected"
            >
              {item.label}
            </option>
          );
        } else {
          temp = (
            <option
              key={item?.value + "" + ii}
              value={item.value}
              data={JSON.stringify(item.data || {})}
            >
              {item.label}
            </option>
          );
        }
        return temp;
      });
      return options;
    }
  
    render() {
      let icon = "";
      let data = this.props.dataSource;
      let span = data?.span || 24;
      if (data?.icon) {
        icon = React.createElement(LOL[data.icon], { className: "m-form__icon" });
      } else {
        icon = React.createElement(LOL["BarsOutlined"], {
          className: "m-form__icon",
        });
      }
      var readonly = (
        this.state?.readonly === undefined ? data?.readonly : this.state?.readonly
      )
        ? true
        : false;
      return (
        <Col
          xs={span.xs || span}
          sm={span.sm || span}
          md={span.md || span}
          lg={span.lg || span}
          className="m-form__box"
          style={{ display: data?.isHide === true ? "none" : "block" }}
        >
          <div
            className={
              "m-form__input " +
              this.state.status +
              " " +
              (readonly ? "readonly" : "")
            }
          >
            <label
              className={
                data?.value || this.state.value
                  ? "m-form__label m-form__label--focus"
                  : "m-form__label"
              }
            >
              {data.label}
            </label>
            <select
              ref={this.selectRef}
              id={data.ref}
              key={data.ref || ""}
              onChange={(e) => this.handleChange(e)}
              onBlur={(e) => this.checkBlur(e)}
              disabled={readonly}
              onFocus={(e) => this.checkFocus(e)}
              required-text={data.required}
              required={data.required}
              defaultValue={data?.value || this.state.value}
              tabIndex={data?.tabindex || 1}
            >
              <option key="" value=""></option>
              {this.renderOptions(data?.value || this.state.value)}
            </select>
            {icon}
          </div>
        </Col>
      );
    }
  }
  