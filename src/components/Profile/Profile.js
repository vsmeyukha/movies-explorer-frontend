import React from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import ThemeContext from '../../contexts/ThemeContext';
import { useFormWithValidation } from '../../hooks/validation';

function Profile(props) {
  // ? контекст темы оформления
  const day = React.useContext(ThemeContext);

  // ? контекст каррент юзера
  const thisUser = React.useContext(CurrentUserContext);
  console.log(thisUser);

  // ? валидация
  const validation = useFormWithValidation();

  const email = validation.values.email;
  const username = validation.values.username;

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const deleteSpace = (str) => {
      if (str.startsWith(' ')) {
        return str.slice(1);
      } if (str.endsWith(' ')) {
        return str.slice(0, -1);
      } else return str;
    }
    props.handleUpdateUser(
      deleteSpace(email || thisUser.email),
      deleteSpace(username || thisUser.name)
    );
  }

  const handleDisabled = () => {
    if (!validation.isValid) {
      return true;
    } else
      if (email === thisUser.email || username === thisUser.name) {
        return true;
      } else return false;
  }

  const handleChange = (event) => {
    validation.handleChange(event);
    console.log(validation.values);
  }

  // const inputs = document.querySelectorAll('.profile__input');
  // const inputsArr = Array.from(inputs);

  // const whatErrorToShow = () => {
  //   let message;

  //   const emailInput = inputsArr.find(input => input.name === 'email');
  //   const usernameInput = inputsArr.find(input => input.name === 'username');

  //   inputsArr.forEach((input) => {
  //     if (input.name === 'email') {
  //       if (email === thisUser.email) {
  //         message = 'Новый почтовый адрес должен отличаться от уже сохраненного в базе';
  //       } return;
  //     } else
  //       if (input.name === 'username') {
  //         if (username === thisUser.name) {
  //           message = 'Новое имя пользователя должно отличаться от уже сохраненного в базе';
  //         } return;
  //       } return;
  //   });

  //   return message;
  // }

  return (
    <section className="profile">
      <h2 className="profile__title">{`Привет, ${thisUser.name}!`}</h2>
      <form
        className="profile__form"
        onSubmit={handleSubmit}
      >
        <fieldset className="profile__fieldset">
          <label
            htmlFor="user-name"
            className="profile__label"
          >Имя</label>
          <input
            type="text"
            className={`profile__input ${!day && `profile__input_black`}`}
            id="user-name"
            value={username || thisUser.name}
            onChange={handleChange}
            placeholder={thisUser.name}
            name="username"
            minLength="2"
            maxLength="30"
          ></input>
        </fieldset>
        <span className="profile__caution">{validation.errors.username}</span>
        <div className="profile__borderline"></div>
        <fieldset className="profile__fieldset">
          <label
            htmlFor="user-email"
            className="profile__label"
          >Почта</label>
          <input
            type="email"
            name="email"
            className={`profile__input ${!day && `profile__input_black`}`}
            id="user-email"
            value={email || thisUser.email}
            onChange={handleChange}
            placeholder={thisUser.email}
            title="Адрес электронной почты должен содержать часть до @, часть после @, точку и национальный домен после точки"
          ></input>
        </fieldset>
        <span className="profile__caution">{validation.errors.email}</span>
        <button
          className={`profile__edit-button ${!day && `profile__edit-button_black`}`}
          type="submit"
          disabled={handleDisabled()}
        >Редактировать</button>
        {handleDisabled() && <span className="profile__caution">Введенные вами данные некорректны</span> }
      </form>
      <button className={`profile__exit-button ${!day && `profile__exit-button_black`}`} onClick={props.signOut}>Выйти из аккаунта</button>
    </section>
  );
};

export default Profile;