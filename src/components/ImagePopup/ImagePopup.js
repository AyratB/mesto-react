function ImagePopup(props) {
  return (
    <article
      className={`popup popup_type__image ${props.card ? "popup_opened" : ""}`}
    >
      <div className="popup__overlay"></div>
      <div className="popup__container popup__container_type_image">
        <figure className="figure">
          <img
            src={`${props.card ? props.card.link : "#"}`}
            className="figure__image"
            alt="#"
          />
          <figcaption className="figure__caption">{`${
            props.card ? props.card.name : ""
          }`}</figcaption>
        </figure>
        <button
          type="button"
          className="button button_type_close-popup"
          aria-label="Кнопка закрытия зума"
          onClick={props.onClose}
        ></button>
      </div>
    </article>
  );
}

export default ImagePopup;
