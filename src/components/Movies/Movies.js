import React from 'react';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import MoreFilmsButton from './MoreFilmsButton/MoreFilmsButton';
import SearchForm from './SearchForm/SearchForm';

function Movies(props) {
  return (
    <>
      <SearchForm onSubmit={props.getMoviesList} />
      <MoviesCardList
        saveFilm={props.saveFilm}
        isFilmSaved={props.isFilmSaved}
        moviesList={props.moviesList}
      />
      <MoreFilmsButton />
    </>
  );
};

export default Movies;