import React from 'react'
import './preloader.css'

const Preloader = (props) => {
    return (
        <div className="preloader">
            <div className="preloader__container">
                <span className="preloader__round"></span>
            </div>
        </div>
    )
};

export default Preloader;




//   // ? переменная состояния, от которой зависит появление прелоадера
//   let isLoading = false;

//   const createPreloader = () => {
//     isLoading = true;
//     console.log(isLoading);
//   }

//   const removePreloader = () => {
//     isLoading = false;
//   }

//   // ? появление прелоадера и загрузка фильмов
//   const downloadMovies = () => {
//     createPreloader();
//     console.log(`создали прелоадер: ${isLoading}`);
//     setTimeout(() => {
//       props.getMoviesList();
//       removePreloader();
//       console.log(`убрали прелоадер: ${isLoading}`);
//     }, 5000);
    

//   }