import React from "react";
import PopupWithForm from "./../PopupWithForm/PopupWithForm.js";

function AddPlacePopup(props) {
  
  const newCardNameRef = React.useRef();
  const newCardUrlRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();

    props.onAddPlace({
      description: newCardNameRef.current.value,
      url: newCardUrlRef.current.value,
    });
  }

  return (
    <PopupWithForm
      name="add-card"
      headerText="Новое место"
      buttonSaveText="Создать"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <section className="form__section">
        <input
          type="text"
          className="form__input"
          name="add-card-name"
          id="add-card-name"
          placeholder="Название"
          required
          minLength="2"
          maxLength="30"
          ref={newCardNameRef}
        />
        <span className="form__span-error" id="add-card-name-error"></span>
      </section>
      <section className="form__section">
        <input
          type="url"
          className="form__input"
          name="add-card-url"
          id="add-card-url"
          placeholder="Ссылка на картинку"
          required
          ref={newCardUrlRef}
        />
        <span className="form__span-error" id="add-card-url-error"></span>
      </section>
    </PopupWithForm>
  );
}

export default AddPlacePopup;