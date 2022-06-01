import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo_sportsee.svg";
import "../sass/styles.css";

function Navigation() {
  return (
    <div className="wrapper">
      <div className="header">
        <div className="header__logo">
          <img className="header__logo__img" src={logo} alt="logo" />
        </div>

        <nav className="header__nav">
          <Link to="/" className="header__nav__home">
            Accueil
          </Link>
          <Link to="/about" className="header__nav__profile">
            Profil
          </Link>
          <Link to="/" className="header__nav__settings">
            Réglages
          </Link>
          <Link to="/about" className="header__nav__social">
            Communauté
          </Link>
        </nav>
      </div>
      <div className="sidebar">SIDEBAR</div>
    </div>
  );
}

export default Navigation;
