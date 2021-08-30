import React from 'react';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import MoreFilmsButton from './MoreFilmsButton/MoreFilmsButton';
import SearchForm from './SearchForm/SearchForm';
import Preloader from './Preloader/Preloader';
import ErrorPopup from '../ErrorPopup/ErrorPopup';

function Movies(props) {

  // ? делаем прелоадер
  const [isLoading, setIsLoading] = React.useState(false);

  const createPreloader = () => {
    setIsLoading(true);
  }

  const removePreloader = () => {
    setIsLoading(false);
  }

  // ? добавляем прелоадер к функции рендера списка фильмов
  const addPreloader = async () => {
    createPreloader();
    await props.downloadMovies();
    removePreloader();
  }

  return (
    <>
      <SearchForm
        onSubmit={addPreloader}
        wantedFilm={props.wantedFilm}
        handleFilmSearchChange={props.handleFilmSearchChange}
      />
      {isLoading && <Preloader />}
      {props.moviesError &&
        <ErrorPopup
          moviesError={props.moviesError}
          eraseMoviesError={props.eraseMoviesError}
        />
      }
      <MoviesCardList
        saveFilm={props.saveFilm}
        isFilmSaved={props.isFilmSaved}
        moviesList={props.moviesList}
        wantedFilm={props.wantedFilm}
        filteredMoviesList={props.filteredMoviesList}
      />
      <MoreFilmsButton />
    </>
  );
};

export default Movies;