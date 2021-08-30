import React from 'react';
import ThemeContext from '../../contexts/ThemeContext';

function Profile() {
  const day = React.useContext(ThemeContext);

  return (
    <section className="profile">
      <h2 className="profile__title">Привет, Виктор!</h2>
      <form className="profile__form">
        <fieldset className="profile__fieldset">
          <label htmlFor="user-name" className="profile__label">Имя</label>
          <input type="text" className={`profile__input ${!day && `profile__input_black`}`} id="user-name" placeholder="Виктор"></input>
        </fieldset>
        <div className="profile__borderline"></div>
        <fieldset className="profile__fieldset">
          <label htmlFor="user-email" className="profile__label">Почта</label>
          <input type="email" className={`profile__input ${!day && `profile__input_black`}`} id="user-email" placeholder="email@email.ru"></input>
        </fieldset>
        <button className={`profile__edit-button ${!day && `profile__edit-button_black`}`} type="submit">Редактировать</button>
      </form>
      <button className={`profile__exit-button ${!day && `profile__exit-button_black`}`}>Выйти из аккаунта</button>
    </section>
  );
};

export default Profile;