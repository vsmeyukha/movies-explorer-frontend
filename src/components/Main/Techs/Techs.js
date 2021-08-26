import React from 'react';
import ThemeContext from '../../../contexts/ThemeContext';

function Techs() {
  const day = React.useContext(ThemeContext);

  return (
    <section className={`techs ${!day && `techs_black`}`} id="techs">
      <h4 className="title">Технологии</h4>
      <div className={`borderline ${!day && `borderline_white`}`}></div>
      <h3 className="techs__number">7 технологий</h3>
      <p className="techs__description">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      <div className="techs__icons">
        <div className={`techs__icon ${!day && `techs__icon_black`}`}>
          <p className="techs__icon-text">HTML</p>
        </div>
        <div className={`techs__icon ${!day && `techs__icon_black`}`}>
          <p className="techs__icon-text">CSS</p>
        </div>
        <div className={`techs__icon ${!day && `techs__icon_black`}`}>
          <p className="techs__icon-text">JS</p>
        </div>
        <div className={`techs__icon ${!day && `techs__icon_black`}`}>
          <p className="techs__icon-text">React</p>
        </div>
        <div className={`techs__icon ${!day && `techs__icon_black`}`}>
          <p className="techs__icon-text">Git</p>
        </div>
        <div className={`techs__icon ${!day && `techs__icon_black`}`}>
          <p className="techs__icon-text">Express.js</p>
        </div>
        <div className={`techs__icon ${!day && `techs__icon_black`}`}>
          <p className="techs__icon-text">mongoDB</p>
        </div>
      </div>
    </section>
  );
};

export default Techs;