import React, { Component } from 'react';
import { Form, Input, Button, Checkbox, Row, Col, Typography } from 'antd';
import { InfoCircleOutlined, MailOutlined, LockOutlined } from '@ant-design/icons';
import './styles.scss'

import { Mbutton, Mcheckbox, Winput } from "../../components/BasicUI"

const { Link } = Typography;
class Login extends Component {

    onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    render() {
        const checkboxDataSource = {
            span: 12,
            label: "Ghi nhớ mật khẩu",
            className: "checkboxClaas"
        };
        return (
            <Col className='login_container' >
                <Row className="login_content">
                    <Form
                        name="login_form"
                        onFinish={this.onFinish}
                        layout="vertical"
                        className="login_form"
                    >
                        <Form.Item className="form_item form_header">
                            <Typography.Title level={3} className="button_text">Đăng nhập</Typography.Title>
                        </Form.Item>

                        <Form.Item
                            name="username"
                            label="Tên đăng nhập"
                            tooltip={{ title: 'Email, sđt hoặc username', icon: <InfoCircleOutlined /> }}
                            rules={[{ required: true, message: 'Tên đăng nhập không được để trống!' }]}
                            className="form_item"
                        >
                            <Winput
                                className='form_input_field'
                                prefix={<MailOutlined />}
                                placeholder="Email, sđt hoặc username"
                            />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            label="Mật khẩu"
                            tooltip={{ title: 'Nhập mật khẩu', icon: <InfoCircleOutlined /> }}
                            rules={[{ required: true, message: 'Mật khẩu không được để trống!' }]}
                            className="form_item"
                        >
                            <Winput
                                type="password"
                                className='form_input_field'
                                prefix={<LockOutlined />}
                                placeholder="Nhập mật khẩu"
                                visibilityToggle={true}
                            />
                            {/* <Input.Password
                                className='form_input_field'
                                prefix={<LockOutlined />}
                                placeholder="Nhập mật khẩu"
                            /> */}
                        </Form.Item>

                        <Form.Item name="remember" valuePropName="checked" className="form_item space_margin">
                            <Mcheckbox
                                dataSource={checkboxDataSource}
                            >
                            </Mcheckbox>
                        </Form.Item>

                        <Form.Item className="form_item">
                            <Mbutton className='form_button' type="primary" htmlType="submit" block>
                                Đăng nhập
                            </Mbutton>
                        </Form.Item>

                        <Row justify="space-between" className="form_item bottom_link">
                            <Link href="/register">Đăng ký</Link>
                            <Link href="/forgot-password">Quên mật khẩu?</Link>
                        </Row>
                    </Form>
                </Row>
            </Col >
        )
    }
}

export default Login
