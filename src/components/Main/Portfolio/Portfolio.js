import React from 'react';

function Portfolio() {
  return (
    <section className="portfolio">
      <h4 className="portfolio__title">Портфолио</h4>
      <ul className="portfolio__links">
        <li className="portfolio__paragraph">
          <div className="portfolio__link-container">
            <a className="link link_portfolio portfolio__link" href="/">Статичный сайт</a>
            <a className="link link_portfolio link_portfolio-arrow portfolio__link-arrow" href="/">&rarr;</a>
          </div>
          <div className="portfolio__borderline"></div>
        </li>
        <li className="portfolio__paragraph">
          <div className="portfolio__link-container">
            <a className="link link_portfolio portfolio__link" href="/">Адаптивный сайт</a>
            <a className="link link_portfolio link_portfolio-arrow portfolio__link-arrow" href="/">&rarr;</a>
          </div>
          <div className="portfolio__borderline"></div>
        </li>
        <li className="portfolio__paragraph">
          <div className="portfolio__link-container">
            <a className="link link_portfolio portfolio__link" href="/">Одностраничное приложение</a>
            <a className="link link_portfolio link_portfolio-arrow portfolio__link-arrow" href="/">&rarr;</a>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Portfolio;