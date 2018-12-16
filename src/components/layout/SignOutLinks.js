import React from "react";
import { NavLink } from "react-router-dom";

import * as routes from "../../constants/routes";

const SignedOutLinks = () => {
  return (
    <ul>
      <li>
        <NavLink to={routes.SIGN_UP}>Regístrate</NavLink>
      </li>
      <li>
        <NavLink to={routes.SIGN_IN}>Inicia sesión</NavLink>
      </li>
    </ul>
  );
};

export default SignedOutLinks;
