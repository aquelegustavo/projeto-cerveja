import React from "react";
import { Route } from "react-router-dom";
import { withAuthenticationRequired } from "@auth0/auth0-react";

type Compo = {
  component: any;
  path: string;
};
const ProtectedRoute = ({ component, ...args }: Compo) => (
  <Route
    component={withAuthenticationRequired(component, {
      onRedirecting: () => <h1>Protect carregando...</h1>,
    })}
    {...args}
  />
);

export default ProtectedRoute;
