import React from "react";
import { NavLink } from "react-router-dom";

import * as routes from "../../constants/routes";

const SignedOutLinks = () => {
  return (
    <ul>
      {/* <li>
        <NavLink to={routes.SIGN_UP}>Sign Up</NavLink>
      </li>
      <li>
        <NavLink to={routes.SIGN_IN}>Sign In</NavLink>
      </li> */}
      <li>
        <NavLink to={routes.HOME}>Search</NavLink>
      </li>
      <li>
        <NavLink to={routes.NEW_COLLECTION}>New Collection</NavLink>
      </li>
      <li>
        <NavLink to={routes.COLLECTIONS}>Collections</NavLink>
      </li>
    </ul>
  );
};

export default SignedOutLinks;
