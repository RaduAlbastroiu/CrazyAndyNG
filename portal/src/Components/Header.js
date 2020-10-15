import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

export default function Header() {
  return (
    <div style={{ paddingBottom: 30 }} className='nav'>
      <NavLink
        exact
        to='/'
        activeClassName='active'
        style={{ marginRight: 20, textDecoration: "none" }}
      >
        Product
      </NavLink>
      <NavLink
        to='/Profile'
        activeClassName='active'
        style={{ marginRight: 20, textDecoration: "none" }}
      >
        Profile
      </NavLink>
      <NavLink
        to='/Others'
        activeClassName='active'
        style={{ marginRight: 20, textDecoration: "none" }}
      >
        Others
      </NavLink>
    </div>
  );
}
