import React from 'react';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';

function Movies() {
  return (
    <>
      <SearchForm />
      <MoviesCardList />
    </>
  );
};

export default Movies;