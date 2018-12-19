import React from "react";
import { NavLink } from "react-router-dom";

import * as routes from "../../constants/routes";

const SignedInLinks = () => {
  return (
    <ul>
      <li>
        <NavLink to={routes.COLLECTIONS}>My Collections</NavLink>
      </li>
      <li>
        <NavLink to="/">Sign Out</NavLink>
      </li>
      <li>
        <NavLink to="/" className="avatar logout-button">
          CD
          {/* <button className="logout-button">CD</button> */}
        </NavLink>
      </li>
    </ul>
  );
};

export default SignedInLinks;
