import React from "react";
import { useHistory } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import LoadingComponent from "../components/loading";

const SignOut = () => {
  const { logout, isAuthenticated } = useAuth0();
  const history = useHistory();

  if (isAuthenticated) {
    logout({ returnTo: window.location.origin });
  } else {
    history.push("/");
  }

  return <LoadingComponent />;
};

export default SignOut;
