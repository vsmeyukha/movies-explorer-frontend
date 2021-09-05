import React from 'react';
import { Link } from 'react-router-dom';
import ThemeContext from '../../contexts/ThemeContext';

function AuthForm(props) {
  const day = React.useContext(ThemeContext);

  const submitForm = (e) => {
    e.preventDefault();
    props.onSubmit(props.email, props.password, props.name);
    console.log(props.email);
    console.log(props.password);
    console.log(props.name);
  }

  return (
    <>
      <h2 className="auth-form__title">{props.titleText}</h2>
      <form className="auth-form" onSubmit={submitForm}>
        <fieldset className="auth-form__fieldset">
          {props.children}
        </fieldset>
        <fieldset className="auth-form__fieldset">
          <label
            className="auth-form__label"
            htmlFor="email"
          >Почта</label>
          <input
            className={`auth-form__input ${!day && `auth-form__input_black`}`}
            id="email"
            placeholder="email@email.ru"
            type="email"
            value={props.email}
            onChange={props.handleEmailChange}
            required
          ></input>
          <label
            className="auth-form__label"
            htmlFor="password"
          >Пароль</label>
          <input
            className={`auth-form__input ${!day && `auth-form__input_black`}`}
            id="password"
            type="password"
            value={props.password}
            onChange={props.handlePasswordChange}
            required
          ></input>
        </fieldset>
        <button
          type="submit"
          className="auth-form__submit"
        >{props.buttonText}</button>
      </form>
      <div className="auth-form__link-container">
        <p className="auth-form__text">{props.authText}</p>
        <Link to={props.authLink} className="auth-form__link">{ props.authLinkText }</Link>
      </div>
    </>
  );
};

export default AuthForm;