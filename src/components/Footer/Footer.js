import React from 'react';
import { useLocation } from 'react-router-dom';

function Footer() {
  let isFooter;
  const location = useLocation();

  if (location.pathname === "/" || location.pathname === "/movies" || location.pathname === "/saved-movies") {
    isFooter = true;
  }

  return (
    <footer className="footer">
      {isFooter && (
        <>
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
        </>
      )}
    </footer>
  );
};

export default Footer;