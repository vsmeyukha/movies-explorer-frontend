import React from 'react';

function Popup(props) {
  const handleClick = () => {
    props.onButtonClick();
  }

  return (
    <div className="popup">
      <div className="popup__message-container">
        <h3 className="popup__message">{props.errorText || 'Какая-то хуйня приключилась'}</h3>
        <button className="popup__try-again-button" onClick={handleClick} type="button">Попробовать ещё разок</button>
      </div>
    </div>
  )
}

export default Popup;