import {Route, Switch} from "react-router-dom";
import React from "react";
import HomePage from "./components/home/HomePage";
import LoginPage from "./components/login/LoginPage";
import SignupPage from "./components/singup/SignupPage";
import ProfilePage from "./components/profile/ProfilePage";
import TakePartPage from "./components/takepart/TakePartPage";
import LoadFilesPage from "./components/loadfiles/LoadFilesPage";
import ChooseSubjectsPage from "./components/choosesubjects/ChooseSubjectsPage";
import AdminPage from "./components/admin/AdminPage";
import CVPage from "./components/cv/CVPage";
import PublicProfilePage from "./components/publicprofile/PublicProfilePage";

export const Routes = () => (
    <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route path="/login" component={LoginPage}/>
      <Route path="/signup" component={SignupPage}/>
      <Route path="/profile" component={ProfilePage}/>
      <Route path="/publicProfile" component={PublicProfilePage}/>
      <Route path="/takePart" component={TakePartPage}/>
      <Route path="/chooseSubjects" component={ChooseSubjectsPage}/>
      <Route path="/loadfiles" component={LoadFilesPage}/>
      <Route path="/admin/" component={AdminPage}/>
      <Route path="/cv" component={CVPage}/>
    </Switch>
);