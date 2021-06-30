import React from "react";

import PopupWithForm from "./../PopupWithForm/PopupWithForm.js";

function EditAvatarPopup(props) {
  const avatarRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();
    
    props.onUpdateAvatar({
      url: avatarRef.current.value,
    });
  }

  return (
    <PopupWithForm
      name="update-avatar"
      headerText="Обновить аватар"
      buttonSaveText="Сохранить"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <section className="form__section">
        <input
          type="url"
          className="form__input"
          name="update-avatar-url"
          id="update-avatar-url"
          placeholder="Ссылка на аватар"
          required
          ref={avatarRef}
        />
        <span className="form__span-error" id="update-avatar-url-error"></span>
      </section>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
