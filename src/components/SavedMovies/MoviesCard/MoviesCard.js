import React from 'react';
import imgPath from '../../../images/saved-film-pic.jpg';

function MoviesCard(props) {
  return (
    <div className="movies-card">
      <div className="movies-card__info">
        <p className="movies-card__title">Kill Bill</p>
        <p className="movies-card__time">1 hour 42 minutes</p>
      </div>
      <img src={imgPath} className="movies-card__photo" alt="Some film"></img>
      <button className="movies-card__like" onClick={props.saveFilm}>
        <p className="movies-card__like-text movies-card__like-text_saved">x</p>
      </button>
    </div>
  );
};

export default MoviesCard;