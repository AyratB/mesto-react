import React from "react";
import Button from "./../Button/Button.js";
import { CurrentUserContext } from "./../../contexts/CurrentUserContext.js";

function Card(props) {
  const currentUserContext = React.useContext(CurrentUserContext);

  function handleClick() {
    props.onCardClick(props.cardData);
  }

  const isOwn = props.cardData.owner._id === currentUserContext.currentUserId;

  const cardDeleteButtonClassName = `button button_type_delete-card ${
    isOwn ? "" : "button_hidden"
  }`;

  return (
    <li className="card">
      <div
        style={{ backgroundImage: `url(${props.cardData.link})` }}
        className="card__image"
        onClick={handleClick}
      ></div>
      <div className="card__sign">
        <h2 className="card__description">{props.cardData.name}</h2>
        <div className="card__heart-container">
          <Button
            type="button"
            className="card__heart"
            ariaLabel="Иконка лайка"
          ></Button>
          <span className="card__heart-voices">
            {props.cardData.likes.length}
          </span>
        </div>
      </div>
      <Button type="button" className={cardDeleteButtonClassName}></Button>
    </li>
  );
}

export default Card;
