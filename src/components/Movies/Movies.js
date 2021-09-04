import React from 'react';
import MoviesCardList from './MoviesCardList/MoviesCardList';
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

  // ? делаем подгрузку фильмов по клику на кнопку "еще"

  // // ? в этой переменной - число постов, которые будут загружены после клика на кнопку "еще"
  // const postsPerPage = 3;
  // // ? а в массиве ниже - будут лежать сами посты до того, как мы им сделаем видимыми
  // let arrayForHoldingPosts = [];

  // const [moviesToShow, setMoviesToShow] = React.useState([]);
  // const [next, setNext] = React.useState(3);

  // // ? делаем урезанный массив из полного массива. и записываем урехзанный массив в стейт постов, которые будем показывать
  // const loopWithSlice = (start, end) => {
  //   const slicedMovies = props.filteredMoviesList.slice(start, end);
  //   arrayForHoldingPosts = [...arrayForHoldingPosts, ...slicedMovies];
  //   setMoviesToShow(arrayForHoldingPosts);
  // }

  // const handleShowMoreMovies = () => {
  //   loopWithSlice(next, next + postsPerPage);
  //   setNext(next + postsPerPage);
  // }

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
      <MoviesCardList
        saveFilm={props.saveFilm}
        isFilmSaved={props.isFilmSaved}
        moviesList={props.moviesList}
        wantedFilm={props.wantedFilm}
        filteredMoviesList={props.filteredMoviesList}
        filteredShortMoviesList={props.filteredShortMoviesList}
        shortFilms={props.shortFilms}
        handleAddMovies={props.handleAddMovies}
        preparedMoviesList={props.preparedMoviesList}
        hasAdditionalFilms={props.hasAdditionalFilms}
      />
    </>
  );
};

export default Movies;