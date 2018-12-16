import React from "react";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <main className="main-container container">
      <div className="container-content">
        <h1>Opps... Al parecer algo ha salido mal </h1>
        <Link to="/">Regresar al inicio</Link>
      </div>
    </main>
  );
};

export default Page404;
