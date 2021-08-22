import React from 'react';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import MoreFilmsButton from './MoreFilmsButton/MoreFilmsButton';
import SearchForm from './SearchForm/SearchForm';

function Movies() {
  return (
    <>
      <SearchForm />
      <MoviesCardList />
      <MoreFilmsButton />
    </>
  );
};

export default Movies;