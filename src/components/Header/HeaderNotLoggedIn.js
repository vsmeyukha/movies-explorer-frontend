import React from 'react';

function HeaderNotLoggedIn() {
  return (
    <div className="header__auth">
      <a href="/" className="link link_header">Registration</a>
      <button className="header__reg-button">Войти</button>
    </div>
  );
};

export default HeaderNotLoggedIn;