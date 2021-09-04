import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import MoreFilmsButton from '../MoreFilmsButton/MoreFilmsButton';
import { BASE_URL } from '../../../utils/consts';

function MoviesCardList(props) {

  // ? отрисовка карточки
  const renderCard = movie => (
    <MoviesCard
      key={movie.id}
      title={movie.nameRU}
      time={movie.duration}
      imgSrc={`${BASE_URL}${movie.image.url}`}
      saveFilm={props.saveFilm}
      isFilmSaved={props.isFilmSaved}
    />
  )

  // ? отрисовка "ничего не найдено"
  const renderNothingFound = () => {
    return (
      <section className="movies-card-list__nothing-found-container">
        <h2 className="movies-card-list__nothing-found-title">!</h2>
        <h3 className="movies-card-list__nothing-found-text">Ничего нет!</h3>
      </section>
    )
  }

  // ? отрисовка списка карточек в зависимости от длины списка и фильтра короткометражек

  const renderCardList = arr => arr.map(movie => renderCard(movie));

  // const whatToRender = () => {
  //   if (props.shortFilms) {
  //     return renderCardList(props.filteredShortMoviesList);
  //   } else
  //     if (props.filteredMoviesList.length > 12) {
  //       const slicedMoviesList = props.filteredMoviesList.slice(0, 12);
  //       return renderCardList(slicedMoviesList);
  //     } else
  //       if (props.filteredMoviesList.length > 12 && props.shortFilms) {
  //         return renderCardList(props.filteredShortMoviesList);
  //       } else {
  //         return renderCardList(props.filteredMoviesList);
  //       }
  // }

  // // ? отрисовка скрытой части массива по нажатию на кнопку "еще"
  // const showMoreFilms = () => {
  //   for (let i = 12; i >= 12 && i < props.filteredMoviesList.length; i = i + 3) {
  //     const threeMovies = props.filteredMoviesList.slice(i, i + 3);
  //     console.log(threeMovies);
  //     return renderCardList(threeMovies);
  //   }
  // }

  // ? не самое крутое решение, моргает nothingFound до загрузки. пока неясно, как пофиксить, если мы отправляем при первом рендере запрос к АПИ
  return (
    <section className="movies-card-list">
      {
        props.filteredMoviesList.length === 0
          ?
          renderNothingFound()
          :
          props.preparedMoviesList.map(movie => renderCard(movie))
      }
      {props.hasAdditionalFilms &&
      <MoreFilmsButton
        handleShowMoreMovies={props.handleShowMoreMovies}
        handleAddMovies={props.handleAddMovies}
      />
      }
    </section>
  );
};

export default MoviesCardList;