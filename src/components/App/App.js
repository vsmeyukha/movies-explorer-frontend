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

// ? сколько фильмов изначально показываем
const INITIAL_MOVIES_COUNT = 12;
const MOVIES_COUNT_INCREMENT = 3;

function App() {

  // ? реализуем загрузку разного числа фильмов в зависимости от ширины экрана
  const [config, setConfig] = React.useState();

  React.useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    }

    function handleResize() {
      
    }
  }, []);

  // React.useEffect(() => {
  //   window.addEventListener('resize', handleResize);

  //   return () => {
  //     window.removeEventListener('resize', handleResize)
  //   }
  // }

//   function getConfig() {
//   if (window.matchMedia("(max-width: 768px)").matches) {
//     return {
//       INITIAL_MOVIES_COUNT: 12,
//       MOVIES_COUNT_INCREMENT: 3
//     }
//   }
// }


  // ? реализация загрузки фильмов из общей базы
  // ? на стейт-переменных
  const [moviesList, setMoviesList] = React.useState([]);

  const getMoviesList = async () => {
    try {
      const movies = await moviesApi.getMovies();
      setMoviesList(movies);
    } catch (e) {
      console.log(e);
      setMoviesError(e.message);
    }
  }

  // ? работа с инпутом
  // ? можно отдавать в локал сторедж значение инпута, а не массив
  // ? const [wantedFilm, setWantedFilm] = React.useState(() => { });
  // ? отсюда можно обратиться локалсторедж и забирать из него значение при первом рендере

  // ? значение wantedFilm при первом рендере берется из локал стореджа
  const [wantedFilm, setWantedFilm] = React.useState(localStorage.getItem('filmRequest'));

  const [additionalFilmsCount, setAdditionalFilmsCount] = React.useState(0);

    // ? а вот через функцию, как Глеб говорил, у меня не получилось. чекнуть
  // function setWantedFilmWithLocalStorage() {
  //   setWantedFilm(saveFilteredMoviesListToLocalStorage);
  // }
  
  // ? присваиваем стейту wantedFilm значение из инпута и сохраняем этот стейт в локалсторедж
  const handleFilmSearchChange = (evt) => {
    setWantedFilm(evt.target.value);
  }

  // ? стейт фильтра короткометражек
  const [shortFilms, setShortFilms] = React.useState(false);

  // ? return не работает тоже
  const handleShortFilmsSearch = () => {
    setShortFilms(!shortFilms);
    return shortFilms;
  }

  const tryToSearch = () => {
    handleShortFilmsSearch();
    console.log(shortFilms);
  }

  // ? useMemo не работает
  // const shorttttt = React.useMemo(() => handleShortFilmsSearch(), [shortFilms]);

  // ? фильтрация первично полученного массива
  const filterMovies = (moviesList, wantedFilm) => {
    return (
      moviesList.filter(movie =>
        movie.nameRU.toLowerCase().includes(wantedFilm.toLowerCase())
      )
    );
  }

  const handleAddMovies = () => {
    setAdditionalFilmsCount((previousAdditionalFilmsCount) => previousAdditionalFilmsCount + MOVIES_COUNT_INCREMENT);
  }

  // ? в эту переменную складывается результат работы функции filterMovies при каждом изменении любой из dependencies
  const filteredMoviesList = React.useMemo(() => filterMovies(moviesList, wantedFilm), [moviesList, wantedFilm]);
  const preparedMoviesList = React.useMemo(() => filteredMoviesList.slice(0, INITIAL_MOVIES_COUNT + additionalFilmsCount), [filteredMoviesList, additionalFilmsCount]);

  const hasAdditionalFilms = filteredMoviesList.length > 12;

  // ? формируем список короткометражек
  const filterShortMovies = (filteredMoviesList) => {
    return filteredMoviesList.filter(movie => movie.duration <= 40);
  }

  const filteredShortMoviesList = React.useMemo(() => filterShortMovies(filteredMoviesList), [filteredMoviesList]);
  console.log(filteredMoviesList);
  console.log(filteredShortMoviesList);

  // ? вызывается функция saveFilmRequestToLocalStorage и соответственно сохраняется в локал сторедж значение стейта wantedFilm при каждом изменении зависимости
  React.useMemo(() => saveFilmRequestToLocalStorage(wantedFilm), [wantedFilm]);

  // ? сохраняем отфильтрованный массив в LocalStorage
  function saveFilmRequestToLocalStorage(wantedFilm) {
    const moviesFromTheStorage = localStorage.setItem('filmRequest', wantedFilm);
    return moviesFromTheStorage;
  }

  // ? эффект при первичном рендере компонента. посылается запрос к АПИ. а все остальное работает автоматом из-за useMemo
  // ? перенес функционал эффекта в компонент Movies. все продолжает работать. надо чекнуть, какое решение более валидно
  // React.useEffect(() => {
  //   getMoviesList();
  // }, []);

  // ? отработка ошибки получения фильмов
  const [moviesError, setMoviesError] = React.useState('');

  const eraseMoviesError = () => {
    setMoviesError('');
  }

    // ? флажок, показывающий, сохранен ли фильм в нашу базу
    const [isFilmSaved, setIsFilmSaved] = React.useState(false);

    const saveFilm = () => {
      setIsFilmSaved(!isFilmSaved);
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

  const changeTheme = () => {
    setDay(!day);
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
              moviesError={moviesError}
              eraseMoviesError={eraseMoviesError}
              wantedFilm={wantedFilm}
              handleFilmSearchChange={handleFilmSearchChange}
              filteredMoviesList={filteredMoviesList}
              getMoviesList={getMoviesList}
              handleShortFilmsSearch={tryToSearch}
              shortFilms={shortFilms}
              filteredShortMoviesList={filteredShortMoviesList}
              handleAddMovies={handleAddMovies}
              preparedMoviesList={preparedMoviesList}
              hasAdditionalFilms={hasAdditionalFilms}
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

