import React from 'react';
import { Link } from 'react-router-dom';
import FilterCheckbox from '../Movies/FilterCheckbox/FilterCheckbox';

function HeaderNotLoggedIn(props) {
  return (
    <div className="header__auth-and-theme">
      {/* <FilterCheckbox clickFunction={props.changeTheme} checkboxName="Светлая тема"/> */}
      <div className="header__auth">
        <Link to="/signup" className="link link_header">Регистрация</Link>
        <Link to="/signin">
          <button className="header__reg-button">Войти</button>
        </Link>
      </div>
    </div>

  );
};

export default HeaderNotLoggedIn;