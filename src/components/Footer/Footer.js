import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <h4 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h4>
      <div className="footer__borderline"></div>
      <div className="footer__info">
        <p className="footer__copyright">&copy; 2021</p>
        <ul className="footer__links">
          <li className="footer__paragraph"><a className="link link_footer" href="/">Яндекс.Практикум</a></li>
          <li className="footer__paragraph"><a className="link link_footer" href="/">Github</a></li>
          <li className="footer__paragraph"><a className="link link_footer" href="/">Facebook</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;