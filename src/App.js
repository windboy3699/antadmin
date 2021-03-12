import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';

import 'antd/dist/antd.css';
import './index.css';
import './App.css';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/login' component={Login}></Route>
                    <Route path='/' component={Home}></Route>
                </Switch>
                {this.props.children}
            </BrowserRouter>
        );
    }
}

export default App;
