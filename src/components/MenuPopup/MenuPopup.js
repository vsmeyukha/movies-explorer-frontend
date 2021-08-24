import React from 'react';
import { NavLink, Link } from "react-router-dom";

function MenuPopup(props) {
  return (
    <section className={`menu-popup ${props.isOpen && `menu-popup_active`}`}>
      <div className="menu-popup__nav">
        <button className="menu-popup__close-button" onClick={props.onClose}></button>
        <div className="menu-popup__all-links">
          <nav className="menu-popup__nav-links">
            <NavLink
              className="menu-popup__navlink"
              activeClassName="menu-popup__navlink_active"
              exact
              to="/">
              Главная
            </NavLink>
            <NavLink
              className="menu-popup__navlink"
              activeClassName="menu-popup__navlink_active"
              to="/movies">
              Фильмы
            </NavLink>
            <NavLink
              className="menu-popup__navlink"
              activeClassName="menu-popup__navlink_active"
              to="/saved-movies">
              Сохраненные фильмы
            </NavLink>
          </nav>
          <div className="menu-popup__profile">
            <Link to="/profile" className="menu-popup__link">Account</Link>
            <Link to="/profile">
              <div className="menu-popup__to-profile-button"></div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuPopup;