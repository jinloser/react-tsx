import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import MainFrame from './component/MainFrame';
import { LoginForm } from './component/root/LoginForm';
export default class App extends React.Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route exact path="/" component={LoginForm} />
                    <Route exact path="/MainFrame" component={MainFrame} />
                </Switch>
            </HashRouter>
        )
    }
}



