// ? импортируем инфраструктуру
import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';

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

// ? импортируем контексты
import ThemeContext from '../../contexts/ThemeContext';
import CurrentUserContext from '../../contexts/CurrentUserContext';

// ? импортируем API
import * as moviesApi from '../../utils/MoviesApi';
import * as mainApi from '../../utils/MainApi';

// ? конфиги для разных разрешений
const configDesktop = {
  INITIAL_MOVIES_COUNT: 12,
  MOVIES_COUNT_INCREMENT: 3
}

const configTablet = {
  INITIAL_MOVIES_COUNT: 8,
  MOVIES_COUNT_INCREMENT: 2
}

const configMobile = {
  INITIAL_MOVIES_COUNT: 5,
  MOVIES_COUNT_INCREMENT: 1
}

function App() {

  const history = useHistory();

    // ? создаем переменную состояния для задания контекста
    const [currentUser, setCurrentUser] = React.useState({
      email: '',
      name: ''
    });

  // ? записываем в стейт данные из инпутов почты, пароля, имени
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [name, setName] = React.useState('');

  // ? передаем в стейт значение инпута
  const handleEmailChange = (evt) => {
    setEmail(evt.target.value);
  }

  // ? передаем в стейт значение инпута
  const handlePasswordChange = (evt) => {
    setPassword(evt.target.value);
  }

  // ? передаем в стейт значение инпута
  const handleNameChange = (evt) => {
    setName(evt.target.value);
  }

  // ? регистрация в приложении
  function handleRegistration(email, password, name) {
    mainApi.register(email, password, name)
    .then((res) => {
      if (res) {
        console.log(res);
        history.push('/signin');
      } else {
        return;
      }
    })
    .catch((err) => {
      console.error(err);
    });
  }

  // ? стейт логина
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  // ? меняем флажок логина
  const handleLogin = () => {
    setIsLoggedIn(true);
  }

  // ? функция авторизации => отправляем запрос к АПИ. если все ок, то переключаем флажок логина на true и перекидываем пользователя на страницу фильмов
  function handleAuthorization(email, password) {
    mainApi.authorize(email, password)
      .then((res) => {
        handleLogin();
        history.push('/movies');
      })
      .catch(err => console.error(err));
  }

  // ? функция обновления данных профиля
  function handleUpdateUser(email, name) {
    console.log(email);
    console.log(name);
    mainApi.editProfile(email, name)
      .then(data => {
        setCurrentUser(data);
      })
      .catch(err => console.error(`Ошибка при редактировании данных профиля: ${err}`));
  }

  // ? функция разлогина => отправляем запрос к АПИ, который удаляет jwt-токен из кук. меняем флажок логина на false и перебрасываем пользователя на главную страницу, не требующую авторизации
  function signOut() {
    mainApi.signOut()
      .then((data) => {
        console.log(data);
        setIsLoggedIn(false);
        history.push('/');
      })
      .catch((err) => console.error(err));
  }

  // ? остается написать эффект, обращающийся к АПИ за значениями юзера, чтобы записать их в контекст юзера
  React.useEffect(() => {
    function authForTheFirstTime() {
      mainApi.getUserData()
      .then((data) => {
        if (data) {

          handleLogin();

          setCurrentUser(data);
          
          history.push('/movies');
        } else {
          console.log('не пришли данные о юзере');
        }
      })
      .catch(err => console.error(err));
    };

    // ! вызывать токенчек только когда пользоваетль не залогинен 
    if (!isLoggedIn) {
      authForTheFirstTime();
    } return;
  }, [isLoggedIn, history]);

  // ? реализуем загрузку разного числа фильмов в зависимости от ширины экрана
  const [config, setConfig] = React.useState({});

  // ? при монтировании компонента решаем, сколько фильмов изначально показываем и какое кол-во фильмов прибавляется дополнительно при клике на кнопку "еще"
  React.useEffect(() => {
    function getConfig() {
      if (window.matchMedia("(max-width: 480px)").matches) {
        setConfig(configMobile);
      } else
        if (window.matchMedia("(max-width: 768px)").matches) {
          setConfig(configTablet);
        } else {
          setConfig(configDesktop);
        }
    }

    getConfig();
  }, []);

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

  // ? значение wantedFilm при первом рендере берется из локал стореджа
  const [wantedFilm, setWantedFilm] = React.useState(localStorage.getItem('filmRequest'));

  const [additionalFilmsCount, setAdditionalFilmsCount] = React.useState(0);
  
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
  }

  // ? фильтрация первично полученного массива
  const filterMovies = (moviesList, wantedFilm) => {
    return (
      moviesList.filter(movie =>
        movie.nameRU.toLowerCase().includes(wantedFilm.toLowerCase())
      )
    );
  }

  // ? написать коммент
  const handleAddMovies = () => {
    setAdditionalFilmsCount((previousAdditionalFilmsCount) => previousAdditionalFilmsCount + config.MOVIES_COUNT_INCREMENT);
  }

  // ? в эту переменную складывается результат работы функции filterMovies при каждом изменении любой из dependencies
  const filteredMoviesList = React.useMemo(() => filterMovies(moviesList, wantedFilm), [moviesList, wantedFilm]);

  // ? написать коммент
  const preparedMoviesList = React.useMemo(() => filteredMoviesList.slice(0, config.INITIAL_MOVIES_COUNT + additionalFilmsCount), [filteredMoviesList, additionalFilmsCount, config.INITIAL_MOVIES_COUNT]);

  // ? написать коммент
  const hasAdditionalFilms = filteredMoviesList.length > 12;

  // ? формируем список короткометражек
  const filterShortMovies = (filteredMoviesList) => {
    return filteredMoviesList.filter(movie => movie.duration <= 40);
  }

  // ? написать коммент
  const filteredShortMoviesList = React.useMemo(() => filterShortMovies(filteredMoviesList), [filteredMoviesList]);

  // ? вызывается функция saveFilmRequestToLocalStorage и соответственно сохраняется в локал сторедж значение стейта wantedFilm при каждом изменении зависимости
  React.useMemo(() => saveFilmRequestToLocalStorage(wantedFilm), [wantedFilm]);

  // ? сохраняем отфильтрованный массив в LocalStorage
  function saveFilmRequestToLocalStorage(wantedFilm) {
    const moviesFromTheStorage = localStorage.setItem('filmRequest', wantedFilm);
    return moviesFromTheStorage;
  }

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
      <CurrentUserContext.Provider value={currentUser} >
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
              <Profile
                handleUpdateUser={handleUpdateUser}
                name={name}
                email={email}
                handleEmailChange={handleEmailChange}
                handleNameChange={handleNameChange}
                signOut={signOut}
              />
            </Route>
            <Route path="/signin">
              <SignIn
                handleAuthorization={handleAuthorization}
                email={email}
                password={password}
                handleEmailChange={handleEmailChange}
                handlePasswordChange={handlePasswordChange}
              />
            </Route>
            <Route path="/signup">
              <Register
                handleRegistration={handleRegistration}
                name={name}
                email={email}
                password={password}
                handleEmailChange={handleEmailChange}
                handlePasswordChange={handlePasswordChange}
                handleNameChange={handleNameChange}
              />
            </Route>
            <Route path="*">
              <PageNotFound />
            </Route>
          </Switch>
          <Footer />
          <MenuPopup isOpen={isMenuOpen} onClose={closeMenu}/>
        </div>
      </CurrentUserContext.Provider>
    </ThemeContext.Provider>
  )
}

export default App;