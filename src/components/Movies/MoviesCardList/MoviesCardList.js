import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import { BASE_URL } from '../../../utils/consts';

function MoviesCardList(props) {

  // ? отрисовка карточки
  const renderCard = movie => (
    <MoviesCard
      key={movie.id}
      identificator={movie.id}
      title={movie.nameRU}
      duration={movie.duration}
      imgSrc={`${BASE_URL}${movie.image.url}`}
      saveFilm={props.saveFilm}
      isFilmSaved={props.isFilmSaved}
      getMovieID={props.getMovieID}
      movie={movie}
      trailer={movie.trailerLink}
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

  // ? не самое крутое решение, моргает nothingFound до загрузки. пока неясно, как пофиксить, если мы отправляем при первом рендере запрос к АПИ
  return (
    <section className="movies-card-list">
      {
        props.filteredMoviesList.length === 0
          ?
          renderNothingFound()
          :
          props.shortFilms
            ?
            renderCardList(props.filteredShortMoviesList)
            :
            renderCardList(props.preparedMoviesList)
      }
    </section>
  );
};

export default MoviesCardList;