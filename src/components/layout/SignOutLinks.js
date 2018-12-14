import React from "react";
import { NavLink } from "react-router-dom";

const SignedOutLinks = () => {
  return (
    <ul>
      <li>
        <NavLink to="/">Regístrate</NavLink>
      </li>
      <li>
        <NavLink to="/">Inicia sesión</NavLink>
      </li>
    </ul>
  );
};

export default SignedOutLinks;
