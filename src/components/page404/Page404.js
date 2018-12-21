import React from "react";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <main className="main-container container">
      <div className="container-content">
        <h1>Opps... Apparently something has gone wrong </h1>
        <Link to="/">Back to home</Link>
      </div>
    </main>
  );
};

export default Page404;
