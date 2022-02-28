import React from "react";

import "./Nav.scss";

const Nav = ({ address }) => (
  <header className="Nav">
    <div className="Nav__inner">
      <h1 className="Nav__logo">
        <a href="/">
          <img src="images/logo.png" alt="Kepler-452b" />
        </a>
      </h1>
      <h1>Mix Stone</h1>
      <div className="Nav__Balance">{address || "Login with Kaikas :)"}</div>
    </div>
  </header>
);

export default Nav;
