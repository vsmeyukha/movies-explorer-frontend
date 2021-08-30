import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import { BASE_URL } from '../../../utils/consts';


// немного не работает тут
function MoviesCardList(props) {

//   const renderCardList = () => {
//  if (props.filteredMoviesList.length > 12) {
//       const slicedMoviesList = props.filteredMoviesList.slice(0, 12);

//    console.log('test');
//       console.log(slicedMoviesList);
      
//       slicedMoviesList.map((movie) => {
//         return (
//           <MoviesCard
//             key={movie.id}
//             title={movie.nameRU}
//             time={movie.duration}
//             imgSrc={`${BASE_URL}${movie.image.url}`}
//             saveFilm={props.saveFilm}
//             isFilmSaved={props.isFilmSaved}
//           />
//         )
//       })
//     } else {
//       props.filteredMoviesList.map((movie) => {
//         return (
//           <MoviesCard
//             key={movie.id}
//             title={movie.nameRU}
//             time={movie.duration}
//             imgSrc={`${BASE_URL}${movie.image.url}`}
//             saveFilm={props.saveFilm}
//             isFilmSaved={props.isFilmSaved}
//           />
//         )
//       })
//     }
//   }

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