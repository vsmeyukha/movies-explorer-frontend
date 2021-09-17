import React from 'react';

function MoviesCard(props) {
  const handleDelete = () => {
    props.deleteFilmFromTheBase(props.identificator);
  }

  return (
    <div className="movies-card">
      <div className="movies-card__info">
        <p className="movies-card__title">{props.title}</p>
        <p className="movies-card__time">{props.time} мин</p>
      </div>
      <a
        href={props.trailer}
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={props.imgSrc}
          className="movies-card__photo"
          alt={props.title}
        ></img>
      </a>
      <button className="movies-card__like" onClick={handleDelete}>
        <p className="movies-card__like-text movies-card__like-text_saved">x</p>
      </button>
    </div>
  );
};

export default MoviesCard;