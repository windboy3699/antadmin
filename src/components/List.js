import React, { Component } from 'react';
import { Table, Tag, Space, Row, Col, Input, Button, Form, Cascader } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import axios from "axios";
import { TEST_URL } from '../config/apis';

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a>,
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: tags => (
            <>
                {tags.map(tag => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';
                    if (tag === 'loser') {
                        color = 'volcano';
                    }
                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
            </>
        ),
    },
    {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
            <Space size="middle">
                <a>Invite {record.name}</a>
                <a>Delete</a>
            </Space>
        ),
    },
];

const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    }
];

class List extends Component {
    state = {
        list: [],
    };

    componentWillMount() {
        const querys = {
            page: 1,
        }
        axios.get(TEST_URL, {
            params: querys
        }).then(response => {
            console.log(response);
            this.setState({
                list:response.data.data
            })
        }).catch(function (error) {
            console.log(error);
        })
    }

    render() {
        return (
            <div className="list-wrap">
                <div style={{float:"right"}}>
                    <Button>Default</Button>
                </div>
                <Row gutter={16}>
                    <Col className="gutter-row" span={5}>
                        <Form.Item label="Input">
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col className="gutter-row" span={5}>
                        <Form.Item label="Input">
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col className="gutter-row" span={5}>
                        <Form.Item label="Cascader">
                            <Cascader
                                options={[
                                    {
                                        value: 'zhejiang',
                                        label: 'Zhejiang',
                                        children: [
                                            {
                                                value: 'hangzhou',
                                                label: 'Hangzhou',
                                            },
                                        ],
                                    },
                                ]}
                            />
                        </Form.Item>
                    </Col>
                    <Col className="gutter-row" span={3}>
                        <Button type="primary" icon={<SearchOutlined />} style={{marginTop:"32px"}}>Search</Button>
                    </Col>
                </Row>
                <Table columns={columns} dataSource={this.state.list} bordered={true} size="small" scroll={{ x: 'calc(500px + 50%)', y: 300 }} />
            </div>
        )
    }
}

export default List;
