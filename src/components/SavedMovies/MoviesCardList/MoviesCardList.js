import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import { BASE_URL } from '../../../utils/consts';

function MoviesCardList(props) {

  // ? отрисовка карточки
  const renderCard = movie => (
    <MoviesCard
      key={movie._id}
      title={movie.nameRU}
      time={movie.duration}
      imgSrc={movie.image}
      saveFilm={props.saveFilm}
      identificator={movie.movieId}
      deleteFilmFromTheBase={props.deleteFilmFromTheBase}
      trailer={movie.trailer}
    />
  )

  // ? отрисовка "Вы еще не сохранили ни одного фильма"
  const renderNoSavedFilms = () => {
    return (
      <section className="movies-card-list__nothing-found-container">
        <h2 className="movies-card-list__nothing-found-title">!</h2>
        <h3 className="movies-card-list__nothing-found-text">Вы еще не сохранили ни одного фильма</h3>
      </section>
    )
  }

  const renderCardList = arr => arr.map(movie => renderCard(movie));

  return (
    <section className="movies-card-list">
      {props.savedMoviesList.length === 0
        ?
        renderNoSavedFilms()
        :
        props.shortFilms
          ?
          renderCardList(props.onlyShortSavedMovies)
          :
          renderCardList(props.savedMoviesList)
        
      }
    </section>
  );
};

export default MoviesCardList;