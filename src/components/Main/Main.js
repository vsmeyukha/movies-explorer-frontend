import React from 'react';
import Promo from './Promo/Promo';
import NavTab from './NavTab/NavTab';
import AboutProject from './AboutProject/AboutProject';

function Main() {
  return (
    <main className="main">
      <Promo></Promo>
      <NavTab></NavTab>
      <AboutProject></AboutProject>
    </main>
  )
}

export default Main;