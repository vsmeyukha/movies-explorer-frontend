import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { headerSelectors } from '../../utils/consts';
import HeaderNotLoggedIn from './HeaderNotLoggedIn';
import HeaderLoggedIn from './HeaderLoggedIn';

function Header(props) {
  const location = useLocation();

  let isLoggedIn;

  if (location.pathname === '/movies' || location.pathname === '/saved-movies' || location.pathname === '/profile') {
    isLoggedIn = true;
  }

  const setHeaderSelector = () => {
    if (location.pathname === '/') {
      return `${headerSelectors.header}`;
    } else {
      return `${headerSelectors.header} ${headerSelectors.headerFilms}`
    }
  };

  return (
    <header className={setHeaderSelector()}>
      <Link to="/">
        <div className={!isLoggedIn ? headerSelectors.logo : `${headerSelectors.logo} ${headerSelectors.logoLoggedIn}`}></div>
      </Link>
      {
        !isLoggedIn
          ?
          <HeaderNotLoggedIn />
          :
          <HeaderLoggedIn />
      }

    </header>
  )
};

export default Header;