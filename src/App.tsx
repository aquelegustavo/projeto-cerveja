import React from "react";
import { Route, Switch } from "react-router-dom";

import "./styles/global.scss";

import HomePage from "./pages/home";

import SignOut from "./auth/signout";

import Profile from "./pages/profile";

import { useAuth0 } from "@auth0/auth0-react";

import ProtectedRoute from "./auth/protected-route";
import Loading from "./components/loading";
import ProcessPage from "./pages/process";
import HeaderComponent from "./components/header";

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <main>
      <HeaderComponent />
      <Switch>
        <ProtectedRoute path="/" component={HomePage} />
        <ProtectedRoute path="/process" component={ProcessPage} />
        <ProtectedRoute path="/profile" component={Profile} />
        <ProtectedRoute path="/logout" component={SignOut} />
      </Switch>
    </main>
  );
}

export default App;
