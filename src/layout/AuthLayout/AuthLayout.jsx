import React, { Component } from 'react'
import { Outlet } from "react-router-dom";
import "./styles.scss"
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';


class AuthLayout extends Component {
    render() {
        return (
            <div className='auth_layout' >
                <div className="auth_layout_header">
                    <Header />
                </div>
                <div className='auth_layout_content'>
                    <Outlet />
                </div>
                <div className="auth_layout_footer">
                    <Footer />
                </div>
            </div>
        )
    }
}

export default AuthLayout