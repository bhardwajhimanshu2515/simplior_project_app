import React, { Component } from "react";
import { Route, Switch } from "react-router";
import SignIn from "./components/Auth/SignIn";
import SignUp from "./components/Auth/SignUp";
import Profile from "./components/Profile/Profile";

export class Routes extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path="/" component={Profile} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </>
    );
  }
}

export default Routes;
