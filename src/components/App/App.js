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
      console.log('это нефильтрованный список');
      console.log(moviesList);
    } catch (e) {
      console.log(e);
      setMoviesError(e);
    }
  }

  // ? на простых переменных
  // let moviesList;

  // const getMoviesList = async () => {
  //   try {
  //     moviesList = await moviesApi.getMovies();
  //     console.log('это нефильтрованный список');
  //     console.log(moviesList);
  //   } catch (e) {
  //     console.log(e);
  //     setMoviesError(e);
  //   }
  // }

  // ? работа с инпутом
  const [wantedFilm, setWantedFilm] = React.useState('');

  const handleFilmSearchChange = (evt) => {
    setWantedFilm(evt.target.value);
  }
  
  // ? фильтрация первично полученного массива
  const [filteredMoviesList, setFilteredMoviesList] = React.useState([]);

  const filterMovies = () => {
    setFilteredMoviesList(
      moviesList.filter(movie =>
        movie.nameRU.toLowerCase().includes(wantedFilm.toLowerCase())
      )
    );
    console.log('это фильтрованный список:');
    console.log(filteredMoviesList);
  }

  // ? сохраняем отфильтрованный массив в LocalStorage
  const saveFilteredMoviesListToLocalStorage = () => {
    localStorage.setItem('filteredMoviesList', JSON.stringify(filteredMoviesList));
    console.log('это то, что сохранено в storage:')
    console.log(JSON.parse(localStorage.getItem('filteredMoviesList')));
  }

  // ! разные советы даются: пихать в юз эффект все, чтобы оно ререндерилось принудительно. надо проверить, но зачем запрос к апи пихать при рендеринге первичном. странно. второй вариант - перенести переменные в movies из app и посмотреть, как оно будет

  // ? собираем все действия с массивом фильмов в одну функцию, прежде чем отправим ее вниз по цепочке
  const downloadMovies = async () => {
    await getMoviesList();
    await filterMovies();
    await saveFilteredMoviesListToLocalStorage();
  }

  React.useEffect(() => {
    const moviesFromTheStorage = JSON.parse(localStorage.getItem('filteredMoviesList'));
    setFilteredMoviesList(moviesFromTheStorage);
  }, []);

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