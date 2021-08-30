import React from 'react';
import {Link} from 'react-router-dom'
import AuthForm from '../AuthForm/AuthForm';

function SignIn() {
  return (
    <section className="sign-in-page">
      <Link to="/">
        <div className="sign-in-page__logo"></div>
      </Link>
      <AuthForm
        titleText="Рады видеть!"
        buttonText="Войти"
        authText="Еще не зарегистрированы?"
        authLink="/signup"
        authLinkText="Регистрация"
      />
    </section>
  );
};

export default SignIn;