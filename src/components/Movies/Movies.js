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
    await props.getMoviesList();
    removePreloader();
  }

  // ? эффект - при первичном рендере компонента вызывается функция загрузки фильмов с прелоадером 
  React.useEffect(() => {
    addPreloader();
  }, []);

  return (
    <>
      <SearchForm
        onSubmit={addPreloader}
        wantedFilm={props.wantedFilm}
        handleFilmSearchChange={props.handleFilmSearchChange}
        handleShortFilmsSearch={props.handleShortFilmsSearch}
        shortFilms={props.shortFilms}
      />
      {isLoading && <Preloader />}
      {props.moviesError &&
        <ErrorPopup
          moviesError={props.moviesError}
          eraseMoviesError={props.eraseMoviesError}
        />
      }
      {!isLoading
        &&
        <>
          <MoviesCardList
            saveFilm={props.saveFilm}
            moviesList={props.moviesList}
            wantedFilm={props.wantedFilm}
            filteredMoviesList={props.filteredMoviesList}
            filteredShortMoviesList={props.filteredShortMoviesList}
            shortFilms={props.shortFilms}
            preparedMoviesList={props.preparedMoviesList}
            saveFilmToTheBase={props.saveFilmToTheBase}
          savedMoviesList={props.savedMoviesList}
          deleteFilmFromTheBase={props.deleteFilmFromTheBase}
          getMoviesList={props.getMoviesList}
          isFilmSaved={props.isFilmSaved}
          setErrMessage={props.setErrMessage}
          setErrorHappened={props.setErrorHappened}
          />
          {props.hasAdditionalFilms
            &&
            <MoreFilmsButton
              handleShowMoreMovies={props.handleShowMoreMovies}
              handleAddMovies={props.handleAddMovies}
            />
          }
        </>
      }
    </>
  );
};

export default Movies;