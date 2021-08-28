// ? импортируем инфраструктуру
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// ? импортируем компоненты
import './App.css';
import './_black/app_black.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import SignIn from '../SignIn/SignIn';
import Register from '../Register/Register';
import Profile from '../Profile/Profile';
import MenuPopup from '../MenuPopup/MenuPopup';
import PageNotFound from '../PageNotFound/PageNotFound';

// ? импортируем контекст
import ThemeContext from '../../contexts/ThemeContext';

// ? импортируем API
import * as moviesApi from '../../utils/MoviesApi';

function App() {

  // ? реализация загрузки фильмов из общей базы
  const [moviesList, setMoviesList] = React.useState([]);

  // const getMoviesList = () => {
  //   moviesApi.getMovies()
  //   .then((movies) => {
  //     setMoviesList(movies);
  //   });
  // }

  const getMoviesList = async () => {
    try {
      const movies = await moviesApi.getMovies();
      setMoviesList(movies);
    } catch (e) {
      console.log(e);
    }
  }


  // ? реализация работы всплывающего меню-бургера на малых разрешениях
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleMenuOpenClick = () => {
    setIsMenuOpen(true);
  }

  const closeMenu = () => {
    setIsMenuOpen(false);
  }

  // ? контекст цветовой темы
  const [day, setDay] = React.useState(false);

  // console.log(day);

  const changeTheme = () => {
    setDay(!day);
  }

  // ? флажок, показывающий, сохранен ли фильм в нашу базу
  const [isFilmSaved, setIsFilmSaved] = React.useState(false);

  const saveFilm = () => {
    setIsFilmSaved(true);
  }

  return (
    <ThemeContext.Provider value={day} >
      <div className={`page ${!day && `page_black`}`}>
        <Header onMenuClick={handleMenuOpenClick} changeTheme={changeTheme}/>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/movies">
            <Movies
              saveFilm={saveFilm}
              isFilmSaved={isFilmSaved}
              moviesList={moviesList}
              getMoviesList={getMoviesList}
            />
          </Route>
          <Route path="/saved-movies">
            <SavedMovies />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/signup">
            <Register />
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
        <Footer />
        <MenuPopup isOpen={isMenuOpen} onClose={closeMenu}/>
      </div>
    </ThemeContext.Provider>
  )
}

export default App;