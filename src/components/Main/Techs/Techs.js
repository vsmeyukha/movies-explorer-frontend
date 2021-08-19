import React from 'react';

function Techs() {
  return (
    <section className="techs">
      <h4 className="techs__title">Технологии</h4>
      <div className="techs__borderline"></div>
      <h3 className="techs__number">7 технологий</h3>
      <p className="techs__description">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      <div className="techs__icons">
        <div className="techs__icon">
          <p className="techs__icon-text">HTML</p>
        </div>
        <div className="techs__icon">
          <p className="techs__icon-text">CSS</p>
        </div>
        <div className="techs__icon">
          <p className="techs__icon-text">JS</p>
        </div>
        <div className="techs__icon">
          <p className="techs__icon-text">React</p>
        </div>
        <div className="techs__icon">
          <p className="techs__icon-text">Git</p>
        </div>
        <div className="techs__icon">
          <p className="techs__icon-text">Express.js</p>
        </div>
        <div className="techs__icon">
          <p className="techs__icon-text">mongoDB</p>
        </div>
      </div>
    </section>
  );
};

export default Techs;