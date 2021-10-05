import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../layout/Home/Home";

import Login from "../layout/Login/Login";
import MyAccount from "../layout/MyAccount/MyAccount";
import Transfer from "../layout/Transfer/Transfer";

export const AuthenticatedRoutes = () => {
  return (
    <Router>
        <Switch>
          
          <Route exact path="/home">
            <Home/>
          </Route>
          <Route path="/micuenta">
            <MyAccount />
          </Route>
          <Route path="/transferir">
            <Transfer />
          </Route>
        </Switch>
    </Router>
  );
};

export const UnauthenticatedRoutes = () => {
  return (
    <Router>
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
        </Switch>
    </Router>
  );
};
