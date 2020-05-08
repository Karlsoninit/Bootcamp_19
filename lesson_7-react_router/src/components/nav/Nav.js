import React from "react";

import { NavLink } from "react-router-dom";

const Nav = ({ navOptions }) => (
  <ul>
    {navOptions.map((nav) => (
      <li>
        <NavLink
          activeStyle={{
            fontWeight: "bold",
            color: "red",
          }}
          exact
          to={nav === "home" ? "/" : `/${nav}`}
        >
          {nav}
        </NavLink>
      </li>
    ))}
  </ul>
);

export default Nav;
