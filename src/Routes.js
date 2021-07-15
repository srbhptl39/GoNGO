import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
// import App from "./App";
import DonorLogin from "./components/DonorLogin/DonorLogin";
import DonorRegistration from "./components/DonorRegistration/DonorRegistration";
import DonorView from "./components/DonorView/DonorView";
import Home from "./components/Home/Home";
import NGOLogin from "./components/NGOLogin/NGOLogin";
import NGORegistration from "./components/NGORegistration/NGORegistration";
import NGOView from "./components/NGOView/NGOView";
import Post from "./components/Post/Post";
import DonarProfile from "./components/DonarProfile/DonarProfile";
import history from './history';
import Payment from "./components/Payment/Payment";

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/DonorLogin" component={DonorLogin} />
                    <Route path="/NGOLogin" component={NGOLogin} />
                    <Route path="/DonorRegistration" component={DonorRegistration} />
                    <Route path="/NGORegistration" component={NGORegistration} />
                    <Route path="/DonorView" component={DonorView} />
                    <Route path="/NGOView" component={NGOView} />
                    <Route path="/Post" component={Post}/>
                    <Route path="/DonarProfile" component={DonarProfile}/>
                    <Route path="/Payment" component={Payment}/>
                    <Route path="/" exact component={Home} />
                    
                </Switch>
            </Router>
        )
    }
}