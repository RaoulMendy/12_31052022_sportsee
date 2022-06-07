import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo_sportsee.svg";
import Icon from "./Icon";
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
      <div className="sidebar">
          <nav className="sidebar__buttons">
            <Icon type="yoga"/>
            <Icon type="swim"/>
            <Icon type="cycle"/>
            <Icon type="weight"/>
       
          </nav>
          <div className="sidebar__copyright">
              <p className="sidebar__copyright__text">Copyright, SportSee 2022</p>
          </div>
      </div>
    </div>
  );
}

export default Navigation;
