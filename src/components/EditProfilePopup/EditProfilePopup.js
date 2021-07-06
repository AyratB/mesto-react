import React from "react";
import PopupWithForm from "./../PopupWithForm/PopupWithForm.js";
import { CurrentUserContext } from "./../../contexts/CurrentUserContext.js";

import { FormValidator } from "./../../utils/FormValidator.js";
import { validationConfig } from "./../../utils/validationConfig.js";

function EditProfilePopup(props) {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [isFormWasClosedWithoutSaving, setIsFormWasClosedWithoutSaving] =
    React.useState(false);

  function handleChangeName(e) {
    let input = e.target;

    if (editProfileFormValidator.isInputValidity(input)) setName(input.value);
  }

  function handleChangeDescription(e) {
    let input = e.target;

    if (editProfileFormValidator.isInputValidity(input))
      setDescription(input.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateUser({
      name,
      about: description,
    });
  }

  const currentUser = React.useContext(CurrentUserContext);

  if (
    props.isOpen &&
    isFormWasClosedWithoutSaving &&
    (currentUser.name !== name || currentUser.about !== description)
  ) {
    setName(currentUser.name);
    setDescription(currentUser.about);

    setIsFormWasClosedWithoutSaving(false);
  }

  let editProfileFormValidator;

  if (props.isOpen && document.forms["edit-profile"]) {
    editProfileFormValidator = new FormValidator(
      validationConfig,
      document.forms["edit-profile"]
    );

    editProfileFormValidator.enableValidation();
  } else {
    editProfileFormValidator = null;
  }

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleFormClose(e) {
    if (currentUser.name !== name || currentUser.about !== description) {
      setIsFormWasClosedWithoutSaving(true);
    }

    props.onClose();
  }

  return (
    <PopupWithForm
      name="edit-profile"
      headerText="Редактировать профиль"
      buttonSaveText="Сохранить"
      isOpen={props.isOpen}
      onClose={handleFormClose}
      onSubmit={handleSubmit}
    >
      <section className="form__section">
        <input
          type="text"
          className="form__input"
          name="edit-profile-name"
          id="edit-profile-name"
          required
          minLength="2"
          maxLength="40"
          value={name}
          onChange={handleChangeName}
        />
        <span className="form__span-error" id="edit-profile-name-error"></span>
      </section>
      <section className="form__section">
        <input
          type="text"
          className="form__input"
          name="edit-profile-description"
          id="edit-profile-description"
          required
          minLength="2"
          maxLength="200"
          value={description}
          onChange={handleChangeDescription}
        />
        <span
          className="form__span-error"
          id="edit-profile-description-error"
        ></span>
      </section>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
