import React from 'react';
import { NavLink, Link } from 'react-router-dom';

function HeaderLoggedIn() {
  return (
    <div className="header__logged-in-navigation">
      <nav className="header__films">
        <NavLink to="/movies" className="header__link" activeClassName="header__link_active">Films</NavLink>
        <NavLink to="/saved-movies" className="header__link" activeClassName="header__link_active">Saved Films</NavLink>
      </nav>
      <div className="header__profile">
        <Link to="/profile" className="header__link">Account</Link>
        <Link to="/profile">
          <div className="header__to-profile-button"></div>
        </Link>
      </div>
    </div>
  );
};

export default HeaderLoggedIn;