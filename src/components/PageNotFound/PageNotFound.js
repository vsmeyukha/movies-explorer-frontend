import React from 'react';
import { useHistory } from 'react-router-dom';

function PageNotFound() {
  const history = useHistory();

  return (
    <section className="page-not-found">
      <h1 className="page-not-found__title">404</h1>
      <p className="page-not-found__text">Страница не найдена</p>
      <button className="page-not-found__back" onClick={history.goBack}>Назад</button>
    </section>
  );
};

export default PageNotFound;