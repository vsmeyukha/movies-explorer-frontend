import React from 'react';

function AboutProject() {
  return (
    <section className="about-project" id="about-project">
      <h3 className="title">О проекте</h3>
      <div className="borderline"></div>
      <div className="about-project__description-container">
        <div className="about-project__small-description-container">
          <h4 className="about-project__description-title">Дипломный проект включал 5 этапов</h4>
          <p className="about-project__description">Составление плана, работу над бэкендом, верстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className="about-project__small-description-container">
          <h4 className="about-project__description-title">На выполнение диплома ушло 5 недель</h4>
          <p className="about-project__description">У каждого этапа был мягкий и жесткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <div className="about-project__scale-container">
        <div className="about-project__scale-small-part">
          <p className="about-project__scale-text">1 неделя</p>
        </div>
        <div className="about-project__scale-big-part">
          <p className="about-project__scale-text">4 недели</p>
        </div>
        <p className="about-project__scale-description about-project__scale-description_small">Back-end</p>
        <p className="about-project__scale-description about-project__scale-description_big">Front-end</p>
      </div>
      
    </section>
  )
};

export default AboutProject;