import React, { Component } from 'react';
import { Result } from 'antd';

class NotFound extends Component {
    render() {
        return (
        <Result
            status="404"
            title="404 Not Found"
            subTitle="Sorry, the page you visited does not exist."
        />
        );
    }
}

export default NotFound;