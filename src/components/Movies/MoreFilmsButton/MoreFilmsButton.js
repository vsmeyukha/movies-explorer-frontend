import React from 'react';

function MoreFilmsButton(props) {

  return (
    <button type="button" className="more-films-button" onClick={props.handleAddMovies}>Ещё</button>
  );
};

export default MoreFilmsButton;