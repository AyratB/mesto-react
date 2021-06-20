import Button from "./../Button/Button.js";

function PopupWithForm(props) {
  return (
    <article
      className={`popup popup_type_${props.name} ${
        props.isOpen ? "popup_opened" : ""
      }`}
    >
      <div className="popup__overlay"></div>
      <div className="popup__container">
        <h2 className="popup__title">{props.headerText}</h2>
        <form className="form" name={props.name}>
          {props.children}
          <Button
            type="submit"
            className="button button_type_save-form"
            buttonText={props.buttonSaveText}
          ></Button>
        </form>
        <Button
          type="button"
          className="button button_type_close-popup"
          ariaLabel="Кнопка закрытия попапа"
          onClick={props.onClose}
        ></Button>
      </div>
    </article>
  );
}

export default PopupWithForm;
