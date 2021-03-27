import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import {Avatar, Layout, Menu, Breadcrumb, Col, Row} from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
    MailOutlined,
    AppstoreOutlined,
    SettingOutlined,
} from '@ant-design/icons';
import NotFound from "./NotFound";
import List from './List';
import Edit from "./Edit";
import axios from "axios";
import { ME_URL } from '../config/apis';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class Home extends React.Component {
    state = {
        collapsed: false,
        currentUser: '',
    };

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    componentWillMount() {
        const token = localStorage.getItem('token');
        if (token == null || token.length == 0) {
            this.props.history.push('/login');
        }
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + token ;
        axios.get(ME_URL).then(response => {
            if (response.data.code === 0) {
                this.setState({ currentUser: response.data.data.systemUsername });
            } else {
                this.props.history.push('/login');
            }
        })
    }

    handleLogout = (event) => {
        localStorage.removeItem('token');
        this.props.history.push('/login');
    };

    handleClick = e => {
        console.log('click ', e);
        this.setState({ current: e.key });
    };

    render() {
        const { collapsed } = this.state;
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
                    <div className="logo">AntAdmin</div>
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="1" icon={<PieChartOutlined />}>
                            Option 1
                        </Menu.Item>
                        <Menu.Item key="2" icon={<DesktopOutlined />}>
                            Option 2
                        </Menu.Item>
                        <SubMenu key="sub1" icon={<UserOutlined />} title="User">
                            <Menu.Item key="3">Tom</Menu.Item>
                            <Menu.Item key="4">Bill</Menu.Item>
                            <Menu.Item key="5">Alex</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
                            <Menu.Item key="6">Team 1</Menu.Item>
                            <Menu.Item key="8">Team 2</Menu.Item>
                        </SubMenu>
                        <Menu.Item key="9" icon={<FileOutlined />}>
                            Files
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }}>
                        <div className="header-wrap">
                            <Menu onClick={this.handleClick} selectedKeys={[this.props.history.location.pathname]} mode="horizontal">
                                <Menu.Item key="/login" icon={<MailOutlined />}>
                                    <Link to="/login">Navigation One</Link>
                                </Menu.Item>
                                <Menu.Item key="/list" icon={<AppstoreOutlined />}>
                                    <Link to="/list">Navigation Two</Link>
                                </Menu.Item>
                                <Menu.Item key="/edit" icon={<SettingOutlined />}>
                                    <Link to="/edit">Navigation Three</Link>
                                </Menu.Item>
                            </Menu>
                            <div className={"header-right"}>
                                您好，<span>{this.state.currentUser}</span> <span onClick={this.handleLogout}>[退出]</span>&nbsp;&nbsp;
                                <Avatar size={40} icon={<UserOutlined />} />
                            </div>
                        </div>
                    </Header>
                    <Content style={{ margin: '0 16px' }}>
                        <Row gutter={16}>
                            <Col className="gutter-row" span={12} style={{ margin: '10px 0' }}>
                                <Breadcrumb>
                                <Breadcrumb.Item>User</Breadcrumb.Item>
                                <Breadcrumb.Item>Bill</Breadcrumb.Item>
                                </Breadcrumb>
                            </Col>
                            <Col className="gutter-row" span={12} style={{textAlign: "right", color: "#1890ff"}}>

                            </Col>
                        </Row>
                        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                            <Switch>
                                <Route path='/list' component={List}></Route>
                                <Route path='/edit' component={Edit}></Route>
                                <Route path='/' component={NotFound}></Route>
                            </Switch>
                            {this.props.children}
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        );
    }
}

export default Home;