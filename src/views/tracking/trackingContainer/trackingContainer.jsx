import React, { Component, createRef } from 'react';
import './styles.scss'
import { Col, Row, Tooltip } from 'antd';
import { Mbutton, Winput } from '../../../components/BasicUI';
import { DatabaseOutlined, FieldNumberOutlined, InfoCircleOutlined } from '@ant-design/icons';

class TrackingContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                containerNumber: ""
            }
        };
        this.submitButtonRef = createRef();
    }

    handleInputChange = (e) => {
        const { value } = e.target;
        this.setState({
            formData: {
                containerNumber: value
            }
        });
        return value
    };

    handleLoadData = () => {
        console.log(this.state.containerNumber);
    }

    render() {
        return (
            <Row className='tracking-container_container'>
                <div className='content'>
                    <Row className='header body-md-normal'>
                        Tra cứu số container
                    </Row>
                    <div className="input_container">
                        <Col className="input_item">
                            <Row className="item_header">
                                <Col>Nhập số container <span className="item_require">*</span></Col>
                                <Tooltip placement="top" title={"Nhập số container"} className="item_tooltip">
                                    <InfoCircleOutlined />
                                </Tooltip>
                            </Row>
                            <Winput
                                name={"containerNumber"}
                                className={`form_input_field`}
                                prefix={<FieldNumberOutlined />}
                                placeholder={"Nhập số container"}
                                value={this.state.formData.containerNumber}
                                onChange={(e) => this.handleInputChange(e)}
                            />
                        </Col>
                    </div>
                    <div className="input_button">
                        <Mbutton
                            color=""
                            className="m_button third"
                            type="primary"
                            htmlType="submit"
                            block
                            onClick={this.handleLoadData}
                            ref={this.submitButtonRef}
                            size={"12"}
                            dataSource={{ textbutton: "Nạp dữ liệu" }}
                        />
                    </div>
                    <div className="table_content">
                        <div className="no_data">
                            <DatabaseOutlined style={{ fontSize: '64px' }} />
                            <p>Nhập số container để nạp dữ liệu container...</p>
                        </div>
                    </div>
                </div>
            </Row>
        )
    }
}

export default TrackingContainer
