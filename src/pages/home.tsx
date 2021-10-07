import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <h1>Home</h1>
      <Link to="/profile">Perfil</Link>
    </>
  );
}

export default HomePage;
