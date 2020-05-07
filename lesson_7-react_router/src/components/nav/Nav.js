import React from "react";

import { NavLink } from "react-router-dom";

const Nav = () => (
  <ul>
    <li>
      <NavLink
        activeStyle={{
          fontWeight: "bold",
          color: "red",
        }}
        exact
        to="/"
      >
        HOME
      </NavLink>
    </li>
    <li>
      <NavLink
        activeStyle={{
          fontWeight: "bold",
          color: "red",
        }}
        to="/profile"
      >
        PROFILE
      </NavLink>
    </li>
    <li>
      <NavLink
        activeStyle={{
          fontWeight: "bold",
          color: "red",
        }}
        to="/news"
      >
        News
      </NavLink>
    </li>
  </ul>
);

export default Nav;
