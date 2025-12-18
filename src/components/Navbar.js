import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";
import logo from "../assets/logo.jpg";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="nav">
      <div className="nav__inner">

        {/* BRAND */}
        <div className="nav__brand">
          <img src={logo} alt="Cryonix-IT Logo" className="nav__logo" />
          <span className="nav__title">Cryonix-IT</span>
        </div>

        {/* NAV LINKS */}
        <nav className={menuOpen ? "nav__links nav-open" : "nav__links"}>
          <NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink to="/about" onClick={() => setMenuOpen(false)}>About Us</NavLink>
          <NavLink to="/services" onClick={() => setMenuOpen(false)}>Services</NavLink>
          <NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</NavLink>

          {/* Mobile Login Button */}
          <NavLink to="/login" className="btn mobile-login">Login</NavLink>
        </nav>

        {/* Desktop Login */}
        <NavLink to="/login" className="btn desktop-login">Login</NavLink>

        {/* HAMBURGER */}
        <div
          className={menuOpen ? "hamburger active" : "hamburger"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
}
