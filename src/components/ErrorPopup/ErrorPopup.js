import React from 'react';

function ErrorPopup(props) {
  return (
    <section className="error-popup">
      <h2 className="error-popup__title">!</h2>
      <p className="error-popup__text">{props.moviesError ? props.moviesError : 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз'}</p>
      <button className="error-popup__close-button" onClick={props.eraseMoviesError} >ok</button>
    </section>
  );
}

export default ErrorPopup;