import React, { Component } from "react";
import "./styles.scss";
import { Col, Row } from "antd";

class Footer extends Component {
    render() {
        return (
            <Row className="footer_container">
                <Col>© 2024 HATECO. Power by CEH</Col>
                <Col>Ver 1.0.0</Col>
            </Row>
        );
    }
}


export default Footer
