import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Header from "./components/Header";
import Left from "./components/Left";
import Main from "./components/Main";
import List from "./components/List";

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div>
            <Header></Header>
            <Left></Left>
            <Main>
              <Switch>
                <Redirect exact from="/" to="/home/all" />
                <Route path='/home/:tab' component={List}></Route>
              </Switch>
            </Main>
          </div>
        </BrowserRouter>
    )
  }
}

export default App;
