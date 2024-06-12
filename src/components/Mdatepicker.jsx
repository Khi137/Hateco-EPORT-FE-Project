import React from 'react';
import { DatePicker, Col } from 'antd';
import moment from 'moment';

class Mdatepicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.dataSource.value || undefined,
    };
    this.datePickerRef = React.createRef();
  }

  rangec(start, end) {
    const result = [];
    for (let i = start; i < end; i++) {
      result.push(i);
    }
    return result;
  }

  disabledDate(current) {
    return current && current < moment().add(-1, 'day').endOf("day");
  }

  disabledDateTime(current) {
    var that = this;
    return {
        disabledHours: () =>
            that.rangec(0, (current > moment().endOf('day') ? 0 : moment().format("HH"))),
        disabledMinutes: () =>
            that.rangec(0, (current > moment().endOf('hour') ? 0 : moment().format("mm"))),
        disabledSeconds: () =>
            that.rangec(0, (current > moment().endOf('minute') ? 0 : moment().format("ss")))
    };
  }

  componentDidMount() {
    const elementId = this.props.id || this.props.dataSource.id || this.datePickerRef.current;
    if (this.props.dataSource.defaultValue) {
      const formattedValue = moment(this.props.dataSource.defaultValue).format(this.props.dataSource.format);
      this.datePickerRef.current.value = formattedValue;
    }
    if (!window.component) window.component = {};
    window.component[elementId] = this;
  }

  checkFocus(e) {
    e.target.parentElement.parentElement.parentElement
      .getElementsByTagName("label")[0]
      .classList.add("m-form__label--focus");
  }

  checkBlur(e) {
    if (!e.target.value) {
      e.target.parentElement.parentElement.parentElement
        .getElementsByTagName("label")[0]
        .classList.remove("m-form__label--focus");
    }
  }

  handleChange = (data) => {
    const { date, value, target } = data;
    this.setState({ value });
    if (this.props.dataSource.onChanged) {
      this.props.dataSource.onChanged(date, value, this);
    }
    if (this.props.onChangeValue) {
      this.props.onChangeValue(date, value, this);
    }
  }

  render() {
    const data = this.props.dataSource;
    const span = data.span || 24;
    let value = this.state.value ? moment(this.state.value, (/(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})/gi.test(this.state.value) ? 'YYYY-MM-DD HH:mm:ss' : data.format || 'YYYY-MM-DD HH:mm:ss')) : (data.value ? moment(data.value, (/(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})/gi.test(data.value) ? 'YYYY-MM-DD HH:mm:ss' : data.format || 'YYYY-MM-DD HH:mm:ss')) : (data.defaultValue ? moment(data.defaultValue, (/(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})/gi.test(data.defaultValue) ? 'YYYY-MM-DD HH:mm:ss' : data.format || 'YYYY-MM-DD HH:mm:ss')) : null));

    if (data.value === '') value = null;
    if (this.state.value === '') value = null;
    if (value && (value === 'Invalid date' || value.format('YYYY') === 'Invalid date')) value = null;

    if (data.followProps) {
      this.state.value = data.value;
      value = data.value ? moment(data.value, data.format || 'YYYY-MM-DD HH:mm:ss') : null;
    }
    
    if (value) {
      if (data.range === "start") {
        switch (data.picker) {
          case 'quarter':
          case 'month':
          case 'year':
          case 'week':
            value.startOf(data.picker);
            break;
        }
      } else if (data.range === "end") {
        switch (data.picker) {
          case 'quarter':
          case 'month':
          case 'year':
          case 'week':
            value.endOf(data.picker);
            break;
        }
      }
    }

    if (typeof data.propReadonly !== "undefined") {
      this.state.readonly = data.propReadonly;
    }

    return (
      <Col
        offset={data.offset ? data.offset : 0}
        xs={span.xs || span}
        sm={span.sm || span}
        md={span.md || span}
        lg={span.lg || span}
        xl={span.xl || span}
        key={data.ref}
        className={
          "m-form__box " +
          data.className +
          " " +
          (this.state.readonly ? "readonly" : "")
        }
      >
        <div
          className={"m-form__input " + (this.state.readonly ? "readonly" : "")}
        >
          <label className={value ? "m-form__label m-form__label--focus" : "m-form__label"}>{data.label}</label>
          <DatePicker
            style={{ padding: 0 }}
            placeholder=""
            bordered={false}
            required-text={data.required}
            required={data.required ? true : false}
            ref={this.datePickerRef}
            id={data.ref}
            key={data.ref || ""}
            showTime={true}
            defaultValue={data.defaultValue ? moment(data.defaultValue, (data.format || 'YYYY-MM-DD HH:mm:ss')) : ""}
            defaultPickerValue={data.defaultPickerValue ? moment(data.defaultPickerValue, (data.format || 'YYYY-MM-DD HH:mm:ss')) : undefined}
            value={value}
            disabled={this.state.readonly ? true : false}
            inputReadOnly={true}
            picker={data.picker || "date"}
            format={data.picker === 'quarter' ? "[Quý " + moment(value).utc().quarter() + " năm ]YYYY" : (data.format || 'YYYY-MM-DD HH:mm:ss')}
            disabledDate={data.lockbefore ? this.disabledDate.bind(this) : null}
            disabledTime={data.lockbefore ? this.disabledDateTime.bind(this) : null}
            onChange={(date, dateString) => this.handleChange({ date, value: dateString, target: { id: data.ref, value: dateString } })}
            onBlur={this.checkBlur.bind(this)}
            onFocus={this.checkFocus.bind(this)}
          />
        </div>
      </Col>
    );
  }
}

export default Mdatepicker;
