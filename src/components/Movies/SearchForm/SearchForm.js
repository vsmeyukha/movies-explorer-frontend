import React from 'react';
import FilterCheckBox from '../FilterCheckbox/FilterCheckbox';

function SearchForm(props) {
  // todo перенести эти селекторы в consts
  const fieldsetSelectors = {
    passive: 'search-form__fieldset',
    active: 'search-form__fieldset_active'
  }

  // ? отображение активного и неактивного состояния филдсета
  const [fieldset, setFieldset] = React.useState(false);

  const enableFieldset = () => {
    setFieldset(true);
  }

  const disableFieldset = () => {
    setFieldset(false);
  }

  // ? сабмитим форму
  function handleSubmit(e) {
    e.preventDefault();
    props.onSubmit();
  }

  return (
    <>
      <form className="search-form" onSubmit={handleSubmit}>
        <fieldset
          className={
            !fieldset ? fieldsetSelectors.passive : `${fieldsetSelectors.passive} ${fieldsetSelectors.active}`
          }>
          <input
            type="text"
            placeholder="Фильм"
            min="2"
            max="30"
            name="film"
            className="search-form__input"
            onClick={enableFieldset}
            onMouseOut={disableFieldset}
            value={props.wantedFilm}
            onChange={props.handleFilmSearchChange}
          ></input>
          <button type="submit" className="search-form__submit"></button>
        </fieldset>
        <div className="search-form__borderline"></div>
        <FilterCheckBox
          checkboxName="Короткометражки"
          handleShortFilmsSearch={props.handleShortFilmsSearch}
          shortFilms={props.shortFilms}
        />
      </form>
        
    </>

  );
};

export default SearchForm;