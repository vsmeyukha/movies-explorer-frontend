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
    props.handleUpdateUser(
      email || thisUser.email,
      username || thisUser.name
    );
  }

  const handleDisabled = () => {
    if (
      username === undefined && email === undefined) {
      return true;
    } else return false;
  }

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
            onChange={validation.handleChange}
            placeholder={thisUser.name}
            name="username"
          ></input>
        </fieldset>
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
            onChange={validation.handleChange}
            placeholder={thisUser.email}
            title="Адрес электронной почты должен содержать часть до @, часть после @, точку и национальный домен после точки"
          ></input>
        </fieldset>
        <button
          className={`profile__edit-button ${!day && `profile__edit-button_black`}`}
          type="submit"
          disabled={handleDisabled()}
        >Редактировать</button>
        {handleDisabled() && <span className="profile__caution">Новые данные пользователя должны отличаться от уже имеющихся в базе</span> }
      </form>
      <button className={`profile__exit-button ${!day && `profile__exit-button_black`}`} onClick={props.signOut}>Выйти из аккаунта</button>
    </section>
  );
};

export default Profile;