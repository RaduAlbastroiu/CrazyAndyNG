import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

export default function Header() {
  return (
    <div
      style={{ paddingBottom: 30, backgroundColor: "#3f51b5" }}
      className='nav'
    >
      <NavLink
        exact
        to='/'
        activeClassName='active'
        style={{ marginRight: 20, textDecoration: "none" }}
      >
        PRODUCT
      </NavLink>
      <NavLink
        to='/Profile'
        activeClassName='active'
        style={{ marginRight: 20, textDecoration: "none" }}
      >
        PROFILE
      </NavLink>
      <NavLink
        to='/Others'
        activeClassName='active'
        style={{ marginRight: 20, textDecoration: "none" }}
      >
        OTHERS
      </NavLink>
    </div>
  );
}
