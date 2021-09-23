import React from 'react';
import { Link } from 'react-router-dom';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import ThemeContext from '../../contexts/ThemeContext';
import AuthForm from '../AuthForm/AuthForm';
import { useFormWithValidation } from '../../hooks/validation';

function Register(props) {
  const validation = useFormWithValidation();

  const day = React.useContext(ThemeContext);

  const thisUser = React.useContext(CurrentUserContext);
  
  return (
    <>
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
          onSubmit={props.handleRegistration}
          email={props.email}
          password={props.password}
          handleEmailChange={props.handleEmailChange}
          handlePasswordChange={props.handlePasswordChange}
          name={validation.values.username}
        >
          <label
            className="auth-form__label"
            htmlFor="name"
          >Имя</label>
          <input
            className={`auth-form__input ${!day && `auth-form__input_black`}`}
            id="name"
            required
            placeholder="Введите ваше имя"
            value={validation.values.username || ''}
            onChange={validation.handleChange}
            minLength="2"
            maxLength="30"
            name="username"
          ></input>
          {!validation.isValid && <span className="auth-form__caution">{`${validation.errors.username || ''}`}</span>}
        </ AuthForm>
      </section>
    </>
  );
};

export default Register;