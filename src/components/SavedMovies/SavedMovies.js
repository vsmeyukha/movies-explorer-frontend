import React from 'react';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import * as mainApi from '../../utils/MainApi';

function SavedMovies(props) {

  React.useEffect(() => {
    const getSavedMovies = async () => {
      const list = await mainApi.getInitialSavedMovies();
      console.log(list);
      props.setSavedMoviesList(list);
    }

    getSavedMovies();
  }, []);

  const onlyShortSavedMovies = props.filterShortMovies(props.savedMoviesList);

  const submitSearchForm = async () => {
    const list = await mainApi.getInitialSavedMovies();
    props.setSavedMoviesList(props.filterMovies(list, props.wantedFilm));
  }


  return (
    <>
      <SearchForm
        handleShortFilmsSearch={props.handleShortFilmsSearch}
        wantedFilm={props.wantedFilm}
        handleFilmSearchChange={props.handleFilmSearchChange}
        onSubmit={submitSearchForm}
      />
      <MoviesCardList
        deleteFilmFromTheBase={props.deleteFilmFromTheBase}
        savedMoviesList={props.savedMoviesList}
        setSavedMoviesList={props.setSavedMoviesList}
        shortFilms={props.shortFilms}
        onlyShortSavedMovies={onlyShortSavedMovies}
      />
    </>
  );
};

export default SavedMovies;