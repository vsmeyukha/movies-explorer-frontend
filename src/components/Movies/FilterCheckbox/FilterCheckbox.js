import React from 'react';

function FilterCheckBox() {
  return (
      <fieldset className="filter-checkbox">
        <label htmlFor="short-film" className="filter-checkbox__label">Короткометражки</label>
        <input type="checkbox" id="short-film" className="filter-checkbox__input"></input>
      </fieldset>

  );
};

export default FilterCheckBox;