import Button from "./../Button/Button.js";
import React from "react";

function PopupWithForm(props) {
  const formRef = React.useRef();

  function handleFormSubmit(e) {
    const submitButton = formRef.current.querySelector(
      ".button_type_save-form"
    );
    submitButton.textContent = "Сохранение...";

    props.onSubmit(e);

    submitButton.textContent = props.buttonSaveText;
  }

  return (
    <article
      className={`popup popup_type_${props.name} ${
        props.isOpen ? "popup_opened" : ""
      }`}
    >
      <div className="popup__overlay"></div>
      <div className="popup__container">
        <h2 className="popup__title">{props.headerText}</h2>
        <form
          className="form"
          name={props.name}
          onSubmit={handleFormSubmit}
          ref={formRef}
        >
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
