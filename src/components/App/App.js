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
  // ? на стейт-переменных
  const [moviesList, setMoviesList] = React.useState([]);

  const getMoviesList = async () => {
    try {
      const movies = await moviesApi.getMovies();
      setMoviesList(movies);
    } catch (e) {
      console.log(e);
      setMoviesError(e);
    }
  }

  // todo починить все нахуй - done
  // todo сделать, чтобы при первичной загрузке wantedFilm в него приходило значение из локалсторедж - done
  // todo сделать, чтобы в локалсторедж сохранялся не фильтрованный массив, а wantedFilm - done
  // todo сделать, чтобы в локалсторедж попадало нужное значение при первом же сабмите формы - done
  // todo сделать, чтобы при первичной загрузке загружался результат предыдущего поиска - done

  // ? работа с инпутом
  // ? можно отдавать в локал сторедж значение инпута, а не массив
  // ? const [wantedFilm, setWantedFilm] = React.useState(() => { });
  // ? отсюда можно обратиться локалсторедж и забирать из него значение при первом рендере
  const [wantedFilm, setWantedFilm] = React.useState(localStorage.getItem('filmRequest'));

  // function setWantedFilmWithLocalStorage() {
  //   setWantedFilm(saveFilteredMoviesListToLocalStorage);
  // }
  

  // ? вроде получилось, но это костыли, на мой взгляд. потому что если в сторедж сохранять не evt.target.value, а стейт wantedFilm, то оно работает все равно блять сука с запаздыванием на один шаг. обязательно это проговорить
  const handleFilmSearchChange = (evt) => {
    setWantedFilm(evt.target.value);
    localStorage.setItem('filmInputValue', evt.target.value);
  }
  
  // ? фильтрация первично полученного массива
  const filterMovies = (moviesList, wantedFilm) => {
    return (
      moviesList.filter(movie =>
        movie.nameRU.toLowerCase().includes(wantedFilm.toLowerCase())
      )
    );
  }

  const filteredMoviesList = React.useMemo(() => filterMovies(moviesList, wantedFilm), [moviesList, wantedFilm]);
  const searchRequestFromTheStorage = React.useMemo(() => saveFilmRequestToLocalStorage(wantedFilm), [wantedFilm]);
  console.log(localStorage.getItem('filmRequest'));

  // ? сохраняем отфильтрованный массив в LocalStorage
  function saveFilmRequestToLocalStorage(wantedFilm) {
    const moviesFromTheStorage = localStorage.setItem('filmRequest', wantedFilm);
    return moviesFromTheStorage;
  }

  // ! разные советы даются: пихать в юз эффект все, чтобы оно ререндерилось принудительно. надо проверить, но зачем запрос к апи пихать при рендеринге первичном. странно. второй вариант - перенести переменные в movies из app и посмотреть, как оно будет

  // ? собираем все действия с массивом фильмов в одну функцию, прежде чем отправим ее вниз по цепочке
  // ? а уже и нет никаких действий, которые надо отправлять по цепочке вниз. можно wrapper downloadMovies убрать
  const downloadMovies = () => {
    getMoviesList();
  }

  React.useEffect(() => {
    getMoviesList();
  }, []);

  // ? снова ни хуя не работает из-за вот этой вот пиздохуйни ререндерной
  // React.useEffect(() => {
  //   setWantedFilm(localStorage.getItem('filmSearch'));
  //   getMoviesList();
  //   filterMovies()
  // }, []);

  // React.useEffect(() => {
  //   const moviesFromTheStorage = JSON.parse(localStorage.getItem('filteredMoviesList'));
  //   setFilteredMoviesList(moviesFromTheStorage);
  // }, []);

  // React.useEffect(() => {
  //   console.log(JSON.parse(localStorage.getItem('filteredMoviesList')));
  //   const listFromTheStorage = JSON.parse(localStorage.getItem('filteredMoviesList'));
  //   getMoviesList();
  //   filterMovies(moviesList, wantedFilm);
  //   console.log(filteredMoviesList);
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
              downloadMovies={downloadMovies}
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