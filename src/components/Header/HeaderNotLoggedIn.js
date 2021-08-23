import React from 'react';
import { Link } from 'react-router-dom';

function HeaderNotLoggedIn() {
  return (
    <div className="header__auth">
      <Link to="/signup" className="link link_header">Регистрация</Link>
      <Link to="/signin">
        <button className="header__reg-button">Войти</button>
      </Link>
    </div>
  );
};

export default HeaderNotLoggedIn;