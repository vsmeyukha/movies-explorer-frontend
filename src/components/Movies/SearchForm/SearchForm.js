import React from 'react';
import FilterCheckBox from '../FilterCheckbox/FilterCheckbox';

function SearchForm(props) {
  const fieldsetSelectors = {
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

  function handleSubmit(e) {
    e.preventDefault();
    props.onSubmit();
  }

  return (
    <>
      <form className="search-form" onSubmit={handleSubmit}>
        <fieldset className={!fieldset ? fieldsetSelectors.passive : `${fieldsetSelectors.passive} ${fieldsetSelectors.active}`}>
          <input type="text" placeholder="Фильм" required min="2" max="30" name="film" className="search-form__input" onClick={enableFieldset} onMouseOut={disableFieldset}></input>
          <button type="submit" className="search-form__submit"></button>
        </fieldset>
        <div className="search-form__borderline"></div>
        <FilterCheckBox checkboxName="Короткометражки"/>
      </form>
        
    </>

  );
};

export default SearchForm;