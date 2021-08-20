import React from 'react';

function AboutMe() {
  return (
    <section className="about-me" id="about-me">
      <h4 className="title">Студент</h4>
      <div className="borderline"></div>
      <div className="about-me__profile">
        <div className="about-me__info">
          <h3 className="about-me__name">Виктор</h3>
          <h5 className="about-me__regalia">Веб-разработчик, 29 лет</h5>
          <p className="about-me__description">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена 
            и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
          <ul className="about-me__links">
            <li className="about-me__link"><a href="https://www.facebook.com/victorsmeyukha" target="_blank" rel="noreferrer" className="link link_about-me">Facebook</a></li>
            <li className="about-me__link"><a href="https://github.com/vsmeyukha" target="_blank" rel="noreferrer" className="link link_about-me">GitHub</a></li>
            <li className="about-me__link"><a href="https://www.instagram.com/victorsmeyukha/" target="_blank" rel="noreferrer" className="link link_about-me">Instagram</a></li>
          </ul>
        </div>
        <div className="about-me__photo"></div>
      </div>
    </section>
  );
};

export default AboutMe;