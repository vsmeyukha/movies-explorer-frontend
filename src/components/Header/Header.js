import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { headerSelectors } from '../../utils/consts';
import HeaderNotLoggedIn from './HeaderNotLoggedIn';
import HeaderLoggedIn from './HeaderLoggedIn';

function Header(props) {
  const location = useLocation();

  let isHeader;

  if (location.pathname === '/' || location.pathname === '/movies' || location.pathname === '/saved-movies' || location.pathname === '/profile') {
    isHeader = true;
  }

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

  if (isHeader) {
    return (
      <header className={setHeaderSelector()}>
        <Link to="/">
          <div className={!isLoggedIn ? headerSelectors.logo : `${headerSelectors.logo} ${headerSelectors.logoLoggedIn}`}></div>
        </Link>
        {
          !isLoggedIn
            ?
            <HeaderNotLoggedIn changeTheme={props.changeTheme}/>
            :
            <HeaderLoggedIn onMenuClick={props.onMenuClick} />
        }
  
      </header>
    )
  } else return null;

};

export default Header;