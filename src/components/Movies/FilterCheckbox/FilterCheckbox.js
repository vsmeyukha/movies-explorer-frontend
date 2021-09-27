import React from 'react';
import { useLocation } from 'react-router-dom';
import ThemeContext from '../../../contexts/ThemeContext';

function FilterCheckBox(props) {
  const day = React.useContext(ThemeContext);

  const location = useLocation();

  let checkBoxForFilmsPage;

  if (location.pathname === '/movies' || location.pathname === '/saved-movies') {
    checkBoxForFilmsPage = 'filter-checkbox_films';
  } else {
    checkBoxForFilmsPage = '';
  }

  return (
      <fieldset className={`filter-checkbox ${checkBoxForFilmsPage}`}>
        <label htmlFor="short-film" className={`filter-checkbox__label ${day && `link_white`}`}>{props.checkboxName}</label>
        <input type="checkbox" id="short-film" className="filter-checkbox__input" value={props.shortFilms} onClick={props.handleShortFilmsSearch}></input>
      </fieldset>

  );
};

export default FilterCheckBox;