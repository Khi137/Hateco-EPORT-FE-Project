// src/components/Header.js
import React, { Component } from "react";
import "./styles.scss";
import { Row } from "antd";
import logo from "../../assets/hateco_logo_bg-removebg.png"


class UnAuthHeader extends Component {
    render() {
        return (
            <Row className="unauth-header_container">
                <img
                    src={logo}
                    className="image-logo"
                />
            </Row>
        );
    }
}


export default UnAuthHeader
