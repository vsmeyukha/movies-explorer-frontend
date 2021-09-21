import React from 'react';
import CurrentUserContext from '../../../contexts/CurrentUserContext';
import * as duration from '../../../utils/duration';

function MoviesCard(props) {
  const thisUser = React.useContext(CurrentUserContext);

  const likeClassName = (`movies-card__like ${props.isFilmSaved && `movies-card__like_active`}`);

  const getMovie = async () => {
    if (props.identificator === undefined) debugger;
      await props.saveFilmToTheBase(props.identificator);
    
      // props.getMoviesList();
  }

  const deleteMovie = () => {
    if (props.identificator === undefined) debugger;
      props.deleteFilmFromTheBase(props.identificator);
      // props.getMoviesList();
  }

  const handleButtonClick = () => {
    props.isFilmSaved ? deleteMovie() : getMovie()
  }

  const hours = duration.getHours(props.duration);
  const minutes = duration.getMinutes(props.duration, hours);

  const hoursTitle = duration.getHoursTitle(hours);
  const minutesTitle = duration.getMinutesTitle(minutes);

  return (
    <div className="movies-card">
      <div className="movies-card__info">
        <p className="movies-card__title">{props.title}</p>
        <p className="movies-card__time">{`${hours} ${hoursTitle} ${minutes} ${minutesTitle}`}</p>
      </div>
      <a href={props.movie.trailerLink} target="_blank" rel="noreferrer">
      <img src={props.imgSrc} className="movies-card__photo" alt={props.title}></img>
      </a>
      <button className={likeClassName} type="button" onClick={handleButtonClick}>
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