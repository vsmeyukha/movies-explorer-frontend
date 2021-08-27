import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import { BASE_URL } from '../../../utils/consts';

function MoviesCardList(props) {
  return (
    <section className="movies-card-list">
      {props.moviesList.map((movie) => {
        return (
          <MoviesCard
            key={movie.id}
            title={movie.nameRU}
            time={movie.duration}
            imgSrc={`${BASE_URL}${movie.image.url}`}
          />
        )
      })}
    </section>
  );
};



// function MoviesCardList(props) {
//   return (
//     <section className="movies-card-list">
//       <MoviesCard saveFilm={props.saveFilm} isFilmSaved={props.isFilmSaved}/>
//       <MoviesCard saveFilm={props.saveFilm} isFilmSaved={props.isFilmSaved}/>
//       <MoviesCard saveFilm={props.saveFilm} isFilmSaved={props.isFilmSaved}/>
//       <MoviesCard saveFilm={props.saveFilm} isFilmSaved={props.isFilmSaved}/>
//       <MoviesCard saveFilm={props.saveFilm} isFilmSaved={props.isFilmSaved}/>
//       <MoviesCard saveFilm={props.saveFilm} isFilmSaved={props.isFilmSaved}/>
//       <MoviesCard saveFilm={props.saveFilm} isFilmSaved={props.isFilmSaved}/>
//     </section>
//   );
// };

export default MoviesCardList;