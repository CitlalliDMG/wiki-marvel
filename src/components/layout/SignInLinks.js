import React from "react";
import { NavLink } from "react-router-dom";

const SignedInLinks = () => {
  return (
    <ul>
      <li>
        <NavLink to="/">Mis colecciones</NavLink>
      </li>
      <li>
        <NavLink to="/">Cerrar sesión</NavLink>
      </li>
      <li>
        <NavLink to="/" className="avatar">
          US
        </NavLink>
      </li>
    </ul>
  );
};

export default SignedInLinks;
