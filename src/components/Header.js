import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div className="header-wrap">
                <ul className="header-nav">
                    <li>首页</li>
                    <li>用户中心</li>
                    <li>财务系统</li>
                </ul>
            </div>
        )
    }
}

export default Header;
