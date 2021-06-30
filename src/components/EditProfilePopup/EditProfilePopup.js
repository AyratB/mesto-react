import React from "react";
import PopupWithForm from "./../PopupWithForm/PopupWithForm.js";
import { CurrentUserContext } from "./../../contexts/CurrentUserContext.js";

function EditProfilePopup(props) {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
  
    props.onUpdateUser({
      name,
      about: description,
    });
  }

  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  return (
    <PopupWithForm
      name="edit-profile"
      headerText="Редактировать профиль"
      buttonSaveText="Сохранить"
      isOpen={props.isOpen}
      onClose={props.onClose}
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
