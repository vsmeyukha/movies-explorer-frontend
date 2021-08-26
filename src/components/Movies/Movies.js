import React from 'react';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import MoreFilmsButton from './MoreFilmsButton/MoreFilmsButton';
import SearchForm from './SearchForm/SearchForm';

function Movies(props) {
  return (
    <>
      <SearchForm />
      <MoviesCardList saveFilm={props.saveFilm} isFilmSaved={props.isFilmSaved} />
      <MoreFilmsButton />
    </>
  );
};

export default Movies;