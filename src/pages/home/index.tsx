import React from "react";
import { Link } from "react-router-dom";
import Loading from "../../components/loading";

function HomePage() {
  return (
    <>
      <Loading />
      <Link to="/profile">Perfil</Link>
    </>
  );
}

export default HomePage;
