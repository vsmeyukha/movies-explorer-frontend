import React from 'react';
import imgPath from '../../../images/moviesCard.jpg';

// function MoviesCard() {
//   return (
//     <div className="movies-card">
//       <div className="movies-card__photo"></div>
//       <div className="movies-card__info">
//         <p className="movies-card__title">Kill Bill</p>
//         <button className="movies-card__like">
//           <div className="movies-card__heart"></div>
//         </button>
//       </div>
//       <div className="movies-card__borderline"></div>
//       <p className="movies-card__time">1 hour 42 minutes</p>
//     </div>
//   );
// };

function MoviesCard(props) {
  const likeClassName = (`movies-card__like ${props.isFilmSaved && `movies-card__like_active`}`);

  return (
    <div className="movies-card">
      <div className="movies-card__info">
        <p className="movies-card__title">Kill Bill</p>
        <p className="movies-card__time">1 hour 42 minutes</p>
      </div>
      <img src={imgPath} className="movies-card__photo" alt="Kill Bill"></img>
      <button className={likeClassName} onClick={props.saveFilm}>
        {!props.isFilmSaved
          ?
          (<p className="movies-card__like-text">Сохранить</p>)
          :
          (<div className="movies-card__heart"></div>)
        }
      </button>
    </div>
  );
};

export default MoviesCard;