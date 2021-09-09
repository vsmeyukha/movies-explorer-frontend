import React from 'react';

function MoviesCard(props) {
  const likeClassName = (`movies-card__like ${props.isFilmSaved && `movies-card__like_active`}`);

  const getMovie = () => {
    props.getMovieID(props.identificator);
  }

  return (
    <div className="movies-card">
      <div className="movies-card__info">
        <p className="movies-card__title">{props.title}</p>
        <p className="movies-card__time">{props.time} мин</p>
      </div>
      <img src={props.imgSrc} className="movies-card__photo" alt={props.title}></img>
      <button className={likeClassName} type="button" onClick={getMovie}>
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