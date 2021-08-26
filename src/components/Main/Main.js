import React from 'react';
import Promo from './Promo/Promo';
import NavTab from './NavTab/NavTab';
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';
import AboutMe from './AboutMe/AboutMe';
import Portfolio from './Portfolio/Portfolio';
import ThemeContext from '../../contexts/ThemeContext';

function Main() {

  const day = React.useContext(ThemeContext);

  return (
    <main className="main">
      <Promo />
      {day && <NavTab />}
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
    </main>
  )
}

export default Main;