import React from 'react';
import { Link } from 'react-router-dom';
import ThemeContext from '../../contexts/ThemeContext';
import { useFormWithValidation } from '../../hooks/validation';

function AuthForm(props) {
  const day = React.useContext(ThemeContext);

  const validation = useFormWithValidation();

  const submitForm = (e) => {
    e.preventDefault();
    props.onSubmit(validation.values.email, validation.values.password, props.name);
    console.log(validation.values.email);
    console.log(validation.values.password);
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
            value={validation.values.email || ''}
            onChange={validation.handleChange}
            required
            name="email"
            title="Адрес электронной почты должен содержать часть до @, часть после @, точку и национальный домен после точки"
          ></input>
          {!validation.isValid && <span className="auth-form__caution">{`${validation.errors.email || ''}`}</span>}
          <label
            className="auth-form__label"
            htmlFor="password"
          >Пароль</label>
          <input
            className={`auth-form__input ${!day && `auth-form__input_black`}`}
            id="password"
            type="password"
            value={validation.values.password || ''}
            onChange={validation.handleChange}
            required
            minLength="6"
            name="password"
            title="Пароль должен быть не менее 6 символов в длину"
          ></input>
          {!validation.isValid && <span className="auth-form__caution">{`${validation.errors.password || ''}`}</span>}
        </fieldset>
        <button
          type="submit"
          className="auth-form__submit"
          disabled={!validation.isValid}
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