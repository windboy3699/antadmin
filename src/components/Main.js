import React, { Component } from 'react';

class Main extends Component {
    render() {
        return (
            <div className="main-wrap">
                <div className="main-content">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Main;