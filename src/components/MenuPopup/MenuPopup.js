import React from 'react';
import { NavLink, Link } from "react-router-dom";
import ThemeContext from '../../contexts/ThemeContext';

function MenuPopup(props) {
  const day = React.useContext(ThemeContext);

  return (
    <section className={`menu-popup ${props.isOpen && `menu-popup_active`}`}>
      <div className={`menu-popup__nav ${!day && `menu-popup__nav_black`}`}>
        <button className="menu-popup__close-button" onClick={props.onClose}></button>
        <div className="menu-popup__all-links">
          <nav className="menu-popup__nav-links">
            <NavLink
              className={`menu-popup__navlink ${!day && `menu-popup__navlink_black`}`}
              activeClassName={`menu-popup__navlink_active ${!day && `menu-popup__navlink_active_black`}`}
              exact
              to="/">
              Главная
            </NavLink>
            <NavLink
              className={`menu-popup__navlink ${!day && `menu-popup__navlink_black`}`}
              activeClassName={`menu-popup__navlink_active ${!day && `menu-popup__navlink_active_black`}`}
              to="/movies">
              Фильмы
            </NavLink>
            <NavLink
              className={`menu-popup__navlink ${!day && `menu-popup__navlink_black`}`}
              activeClassName={`menu-popup__navlink_active ${!day && `menu-popup__navlink_active_black`}`}
              to="/saved-movies">
              Сохраненные фильмы
            </NavLink>
          </nav>
          <div className="menu-popup__profile">
            <Link to="/profile" className={`menu-popup__link ${!day && `menu-popup__link_black`}`}>Account</Link>
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