import React from 'react';

function NavTab() {
  return (
    <nav className="nav-tab">
    <ul className="nav-tab__list">
      <li className="nav-tab__link"><a href="/#about-project" className="link link_nav-tab" title="Как шла работа над проектом">About project</a></li>
      <li className="nav-tab__link"><a href="/#techs" className="link link_nav-tab" title="Использованные в проекте технологии">Techs</a></li>
      <li className="nav-tab__link"><a href="/#about-me" className="link link_nav-tab" title="Обо мне">Student</a></li>
    </ul>
  </nav>
  )
};

export default NavTab;