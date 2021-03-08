import React, { Component } from 'react';
import { Button } from 'antd';

class List extends Component {
    render() {
        return (
            <div className="list-wrap">
                <ul>
                    <li>标题1</li>
                    <li>标题2</li>
                    <li>标题3</li>
                </ul>
            </div>
        )
    }
}

export default List;
