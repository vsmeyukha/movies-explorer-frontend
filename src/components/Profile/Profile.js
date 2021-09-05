import React from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import ThemeContext from '../../contexts/ThemeContext';

function Profile(props) {
  // ? контекст темы оформления
  const day = React.useContext(ThemeContext);

  // ? контекст каррент юзера
  const thisUser = React.useContext(CurrentUserContext);

  const dataToSend = {
    email: props.email,
    name: props.name
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.handleUpdateUser(props.email, props.name);
  }

  return (
    <section className="profile">
      <h2 className="profile__title">{`Привет, ${thisUser.name}!`}</h2>
      <form className="profile__form" onSubmit={handleSubmit}>
        <fieldset className="profile__fieldset">
          <label htmlFor="user-name" className="profile__label">Имя</label>
          <input type="text" className={`profile__input ${!day && `profile__input_black`}`} id="user-name" value={props.name} onChange={props.handleNameChange} placeholder={thisUser.name}></input>
        </fieldset>
        <div className="profile__borderline"></div>
        <fieldset className="profile__fieldset">
          <label htmlFor="user-email" className="profile__label">Почта</label>
          <input type="email" className={`profile__input ${!day && `profile__input_black`}`} id="user-email" value={props.email} onChange={props.handleEmailChange} placeholder={thisUser.email}></input>
        </fieldset>
        <button className={`profile__edit-button ${!day && `profile__edit-button_black`}`} type="submit">Редактировать</button>
      </form>
      <button className={`profile__exit-button ${!day && `profile__exit-button_black`}`} onClick={props.signOut}>Выйти из аккаунта</button>
    </section>
  );
};

export default Profile;