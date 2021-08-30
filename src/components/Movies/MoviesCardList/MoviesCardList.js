import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import { BASE_URL } from '../../../utils/consts';

function MoviesCardList(props) {
  return (
    <section className="movies-card-list">
      {props.filteredMoviesList.map((movie) => {
        return (
          <MoviesCard
            key={movie.id}
            title={movie.nameRU}
            time={movie.duration}
            imgSrc={`${BASE_URL}${movie.image.url}`}
            saveFilm={props.saveFilm}
            isFilmSaved={props.isFilmSaved}
          />
        )
      })}
    </section>
  );
};

export default MoviesCardList;