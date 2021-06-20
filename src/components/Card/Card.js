import Button from "./../Button/Button.js";

function Card(props) {
  function handleClick() {
    props.onCardClick(props.cardData);
  }

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
      <Button
        type="button"
        className="button button_type_delete-card button_hidden"
      ></Button>
    </li>
  );
}

export default Card;
