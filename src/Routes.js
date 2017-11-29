import {Switch, Route} from "react-router-dom";
import React from "react";
import HomePage from "./components/home/HomePage";
import LoginPage from "./components/login/LoginPage";
import SignupPage from "./components/singup/SignupPage";

export const Routes = () => (
    <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route path="/login" component={LoginPage}/>
      <Route path="/signup" component={SignupPage}/>

    </Switch>
);