import React from 'react';

function FilterCheckBox(props) {
  return (
      <fieldset className="filter-checkbox">
        <label htmlFor="short-film" className="filter-checkbox__label">{props.checkboxName}</label>
      <input type="checkbox" id="short-film" className="filter-checkbox__input" onClick={props.clickFunction}></input>
      </fieldset>

  );
};

export default FilterCheckBox;