import React from 'react';
import ThemeContext from '../../../contexts/ThemeContext';

function Portfolio() {
  const day = React.useContext(ThemeContext);

  return (
    <section className="portfolio">
      <h4 className={`portfolio__title ${!day && `portfolio__title_black`}`}>Портфолио</h4>
      <ul className="portfolio__links">
        <li className="portfolio__paragraph">
          <div className="portfolio__link-container">
            <a className={`link link_portfolio portfolio__link ${!day && `link_white`}`} href="https://github.com/vsmeyukha/how-to-learn" target="_blank" rel="noreferrer">Статичный сайт</a>
            <a className={`link link_portfolio link_portfolio-arrow portfolio__link-arrow ${!day && `link_white`}`} href="https://github.com/vsmeyukha/how-to-learn" target="_blank" rel="noreferrer">&rarr;</a>
          </div>
          <div className={`portfolio__borderline ${!day && `portfolio__borderline_black`}`}></div>
        </li>
        <li className="portfolio__paragraph">
          <div className="portfolio__link-container">
            <a className={`link link_portfolio portfolio__link ${!day && `link_white`}`} href="https://github.com/vsmeyukha/russian-travel" target="_blank" rel="noreferrer">Адаптивный сайт</a>
            <a className={`link link_portfolio link_portfolio-arrow portfolio__link-arrow ${!day && `link_white`}`} href="https://github.com/vsmeyukha/russian-travel" target="_blank" rel="noreferrer">&rarr;</a>
          </div>
          <div className={`portfolio__borderline ${!day && `portfolio__borderline_black`}`}></div>
        </li>
        <li className="portfolio__paragraph">
          <div className="portfolio__link-container">
            <a className={`link link_portfolio portfolio__link ${!day && `link_white`}`} href="https://github.com/vsmeyukha/react-mesto-api-full" target="_blank" rel="noreferrer">Одностраничное приложение</a>
            <a className={`link link_portfolio link_portfolio-arrow portfolio__link-arrow ${!day && `link_white`}`} href="https://github.com/vsmeyukha/react-mesto-api-full" target="_blank" rel="noreferrer" >&rarr;</a>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Portfolio;