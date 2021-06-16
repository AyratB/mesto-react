function Card(props) {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${props.cardData.link})` }}
        className="card__image"
      ></div>
      <div className="card__sign">
        <h2 className="card__description">{props.cardData.name}</h2>
        <div className="card__heart-container">
          <button
            type="button"
            className="card__heart"
            aria-label="Иконка лайка"
          ></button>
          <span className="card__heart-voices">
            {props.cardData.likes.length}
          </span>
        </div>
      </div>
      <button className="button button_type_delete-card button_hidden"></button>
    </>
  );
}

export default Card;
