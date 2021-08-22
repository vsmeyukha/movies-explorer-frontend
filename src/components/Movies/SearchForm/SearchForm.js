import React from 'react';
import FilterCheckBox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  let fieldsetSelectors = {
    passive: 'search-form__fieldset',
    active: 'search-form__fieldset_active'
  }

  const [fieldset, setFieldset] = React.useState(false);

  const enableFieldset = () => {
    setFieldset(true);
  }

  const disableFieldset = () => {
    setFieldset(false);
  }

  return (
    <>
        <form className="search-form">
          <fieldset className={!fieldset ? fieldsetSelectors.passive : `${fieldsetSelectors.passive} ${fieldsetSelectors.active}`}>
            <input type="text" placeholder="Фильм" required min="2" max="30" name="film" className="search-form__input" onClick={enableFieldset} onMouseOut={disableFieldset}></input>
          <button type="submit" className="search-form__submit"></button>
          </fieldset>
          <FilterCheckBox />
        </form>
        
    </>

  );
};

export default SearchForm;