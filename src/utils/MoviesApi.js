function _getResponseData(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

// export const getMovies = () => {
//   return fetch('https://api.nomoreparties.co/beatfilm-movies', {
//     method: 'GET',
//   })
//     .then(res =>_getResponseData(res));
// };

export const getMovies = async () => {
  const response = await fetch('https://api.nomoreparties.co/beatfilm-movies', { method: 'GET' });
  const data = _getResponseData(response);
  return data;
};