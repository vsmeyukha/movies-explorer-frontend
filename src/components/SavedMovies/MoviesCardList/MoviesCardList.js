import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import { BASE_URL } from '../../../utils/consts';
import * as mainApi from '../../../utils/MainApi';

function MoviesCardList(props) {


  React.useEffect(() => {
    const getSavedMovies = async () => {
      const list = await mainApi.getInitialSavedMovies();
      console.log(list);
      props.setSavedMoviesList(list);
    }

    getSavedMovies();
  }, []);

  // ? отрисовка карточки
  const renderCard = movie => (
    <MoviesCard
      key={movie._id}
      title={movie.nameRU}
      time={movie.duration}
      imgSrc={movie.image}
      saveFilm={props.saveFilm}
      isFilmSaved={props.isFilmSaved}
      identificator={movie.movieId}
      deleteFilmFromTheBase={props.deleteFilmFromTheBase}
    />
  )

  return (
    <section className="movies-card-list">
      {props.savedMoviesList.map(movie => renderCard(movie))}
    </section>
  );
};

export default MoviesCardList;