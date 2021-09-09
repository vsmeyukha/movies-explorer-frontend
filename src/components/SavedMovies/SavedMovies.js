import React from 'react';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';

function SavedMovies(props) {
  return (
    <>
      <SearchForm />
      <MoviesCardList
        deleteFilmFromTheBase={props.deleteFilmFromTheBase}
        savedMoviesList={props.savedMoviesList}
        setSavedMoviesList={props.setSavedMoviesList}
      />
    </>
  );
};

export default SavedMovies;