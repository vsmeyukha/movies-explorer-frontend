import React from 'react';
import { Link } from 'react-router-dom';
import AuthForm from '../AuthForm/AuthForm';

function Register() {
  return (
    <section className="sign-in-page">
      <Link to="/">
        <div className="sign-in-page__logo"></div>
      </Link>
      <AuthForm
        titleText="Добро пожаловать!"
        buttonText="Зарегистрироваться"
        authText="Уже зарегистрированы?"
        authLink="/signin"
        authLinkText="Войти"
      >
        <label className="auth-form__label" htmlFor="name">Имя</label>
        <input className="auth-form__input" id="name"></input>
      </ AuthForm>
    </section>
  );
};

export default Register;