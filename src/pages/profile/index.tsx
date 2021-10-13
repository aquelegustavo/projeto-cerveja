import React from "react";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import LoadingComponent from "../../components/loading";

type User = {
  picture: string;
  name: string;
  email: string;
};

type UseAuth0 = {
  user?: User;
  isAuthenticated: boolean;
  isLoading: boolean;
};

const Profile = () => {
  const { user, isAuthenticated, isLoading }: UseAuth0 = useAuth0();

  if (isLoading) {
    return <LoadingComponent />;
  }

  console.log("User: ", user);

  return (
    <div>
      <p>
        isAuthenticated: <span>{isAuthenticated}</span>
      </p>

      <img src={user?.picture} alt={user?.name} />
      <h2>{user?.name}</h2>
      <p>{user?.email}</p>
    </div>
  );
};

export default withAuthenticationRequired(Profile, {
  onRedirecting: () => <h1>teste</h1>,
});
