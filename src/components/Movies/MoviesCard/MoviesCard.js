import React from 'react';

function MoviesCard() {
  return (
    <div className="movies-card">
      <div className="movies-card__photo"></div>
      <div className="movies-card__info">
        <p className="movies-card__title">Kill Bill</p>
        <button className="movies-card__like">
          <div className="movies-card__heart"></div>
        </button>
      </div>
      <div className="movies-card__borderline"></div>
      <p className="movies-card__time">1 hour 42 minutes</p>
    </div>
  );
};

export default MoviesCard;