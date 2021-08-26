import React from 'react';
import ThemeContext from '../../../contexts/ThemeContext';

function FilterCheckBox(props) {
  const day = React.useContext(ThemeContext);

  return (
      <fieldset className="filter-checkbox">
        <label htmlFor="short-film" className={`filter-checkbox__label ${day && `link_white`}`}>{props.checkboxName}</label>
      <input type="checkbox" id="short-film" className="filter-checkbox__input" onClick={props.clickFunction}></input>
      </fieldset>

  );
};

export default FilterCheckBox;