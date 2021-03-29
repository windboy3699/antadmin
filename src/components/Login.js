import React, { Component } from 'react';
import axios from 'axios';
import 'antd/dist/antd.css';
import '../App.css';
import { Form, Input, Button, Checkbox } from 'antd';
import { LOGIN_URL } from '../config/apis';

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 8,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 8,
    },
};

const onFinish = (values) => {
    console.log('Success:', values);
};

const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    changeUsername = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    changePassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    handleSubmit = (event) => {
        console.log('click ', event);
        const params = {
            username: this.state.username,
            password: this.state.password,
        }
        axios.post(LOGIN_URL, params).then(response => {
            console.log(response);
            if (response.data.code === 0) {
                const token = response.data.data.accessToken;
                localStorage.setItem('token', token);
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + token ;
                this.props.history.push('/list');
            } else {
                delete axios.defaults.headers.common['Authorization'];
                alert(response.data.message);
            }
        }).catch(function (error) {
            console.log(error);
        })
    };

    render() {
        return (
            <Form
                {...layout}
                name="basic"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                style={{paddingTop:"160px"}}
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input value={this.state.username} onChange={this.changeUsername} />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password value={this.state.password} onChange={this.changePassword} />
                </Form.Item>

                <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit" onClick={this.handleSubmit}>
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

export default Login;
