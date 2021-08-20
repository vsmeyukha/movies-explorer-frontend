import React from 'react';

function NavTab() {
  return (
    <nav className="nav-tab">
    <ul className="nav-tab__list">
      <li className="nav-tab__link"><a href="/" className="link link_nav-tab">About project</a></li>
      <li className="nav-tab__link"><a href="/" className="link link_nav-tab">Techs</a></li>
      <li className="nav-tab__link"><a href="/" className="link link_nav-tab">Student</a></li>
    </ul>
  </nav>
  )
};

export default NavTab;