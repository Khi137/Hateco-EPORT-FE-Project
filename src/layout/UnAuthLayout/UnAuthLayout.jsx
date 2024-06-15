import React, { Component } from 'react'
import { Outlet } from "react-router-dom";
import "./styles.scss"
import UnAuthHeader from '../../components/UnAuthHeader/UnAuthHeader';
import Footer from '../../components/Footer/Footer';


class UnAuthLayout extends Component {
    render() {
        return (
            <div className='un-auth_layout' >
                <div className="un-auth_layout_header">
                    <UnAuthHeader />
                </div>
                <div className='un-auth_layout_content'>
                    <Outlet />
                </div>
                <div className="un-auth_layout_footer">
                    <Footer />
                </div>
            </div>
        )
    }
}

export default UnAuthLayout