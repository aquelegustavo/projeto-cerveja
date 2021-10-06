import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./styles/global.scss";

import HomePage from "./pages/home";
import SignIn from "./auth/signin";
import SignOut from "./auth/signout";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signout" component={SignOut} />
      </Switch>
    </Router>
  );
}

export default App;
