import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList(props) {
  return (
    <section className="movies-card-list">
      <MoviesCard saveFilm={props.saveFilm} isFilmSaved={props.isFilmSaved}/>
      <MoviesCard saveFilm={props.saveFilm} isFilmSaved={props.isFilmSaved}/>
      <MoviesCard saveFilm={props.saveFilm} isFilmSaved={props.isFilmSaved}/>
      <MoviesCard saveFilm={props.saveFilm} isFilmSaved={props.isFilmSaved}/>
      <MoviesCard saveFilm={props.saveFilm} isFilmSaved={props.isFilmSaved}/>
      <MoviesCard saveFilm={props.saveFilm} isFilmSaved={props.isFilmSaved}/>
      <MoviesCard saveFilm={props.saveFilm} isFilmSaved={props.isFilmSaved}/>
    </section>
  );
};

export default MoviesCardList;