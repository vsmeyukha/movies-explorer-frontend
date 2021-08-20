import React from 'react';

function Header(props) {
  return (
    <header className="header">
      <div className="header__logo"></div>
      <div className="header__auth">
      <a href="/" className="link link_header">Registration</a>
        <button className="header__button">Войти</button>
      </div>
    </header>
  )
};

export default Header;