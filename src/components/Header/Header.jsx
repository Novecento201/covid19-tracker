import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <NavLink to="/">
            <h1>Covid-19 tracker</h1>
          </NavLink>
        </div>

        <nav className="navbar">
          <NavLink className="nav_item" to="/">
            Home
          </NavLink>

          <NavLink className="nav_item" to="/usa">
            USA
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
