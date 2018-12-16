import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/Marvel_Wiki_Comics_logo.png";
// import SignedUpLinks from "./SignInLinks";
import SignedOutLinks from "./SignOutLinks";

const Navbar = () => {
  return (
    <header className="header-container">
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="Marvel Comics Logo" height="30" />
        </Link>
      </div>
      <nav className="nav-links">
        <SignedOutLinks />
        {/* <SignedUpLinks /> */}
      </nav>
    </header>
  );
};

export default Navbar;
