import React from "react";
import { Route, Switch } from "react-router-dom";

import "./styles/global.scss";

import HomePage from "./pages/home";

import SignOut from "./auth/signout";

import Profile from "./pages/profile";

import { useAuth0 } from "@auth0/auth0-react";

import ProtectedRoute from "./auth/protected-route";
import Loading from "./components/loading/loading";

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <ProtectedRoute path="/profile" component={Profile} />
      <Route path="/logout" component={SignOut} />
    </Switch>
  );
}

export default App;
