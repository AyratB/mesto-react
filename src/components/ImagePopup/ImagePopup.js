function ImagePopup() {
  return (
    <article className="popup popup_type_image">
      <div className="popup__overlay"></div>
      <div className="popup__container popup__container_type_image">
        <figure className="figure">
          <img src="#" className="figure__image" alt="#" />
          <figcaption className="figure__caption"></figcaption>
        </figure>
        <button
          type="button"
          className="button button_type_close-popup"
          aria-label="Кнопка закрытия зума"
        ></button>
      </div>
    </article>
  );
}

export default ImagePopup;
