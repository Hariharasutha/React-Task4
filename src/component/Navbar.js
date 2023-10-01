import React, { useState } from "react";
import "../styles/navbar.css";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="/" className="title">
        COOLORS
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
      <li>
          <NavLink to="/">HOME</NavLink>
        </li>
        <li>
          <NavLink to="/about">ABOUT US</NavLink>
        </li>
        <li>
          <NavLink to="/color">COLOR LIST</NavLink>
        </li>
        
      </ul>
    </nav>
  );
};