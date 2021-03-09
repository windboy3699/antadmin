import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import '../cover.css';

const { SubMenu } = Menu;

class Header extends Component {

    state = {
        current: 'mail',
    };

    handleClick = e => {
        console.log('click ', e);
        this.setState({ current: e.key });
    };

    render() {
        const { current } = this.state;
        return (
            <div className="header-wrap">
                <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
                    <Menu.Item key="mail" icon={<MailOutlined />} className="xxxdddyy">
                    Navigation One
                    </Menu.Item>
                    <Menu.Item key="appstore" icon={<AppstoreOutlined />}>
                        Navigation Two
                    </Menu.Item>
                    <Menu.Item key="setting" icon={<SettingOutlined />}>
                        Navigation Three
                    </Menu.Item>
                </Menu>
            </div>
        )
    }
}

export default Header;
