import Header from "./../Header/Header.js";
import Footer from "./../Footer/Footer.js";
import Main from "./../Main/Main.js";
import { api } from "../../utils/api";

import PopupWithForm from "./../PopupWithForm/PopupWithForm.js";
import ImagePopup from "./../ImagePopup/ImagePopup.js";

import EditProfilePopup from "./../EditProfilePopup/EditProfilePopup.js";

import React from "react";

import { CurrentUserContext } from "./../../contexts/CurrentUserContext.js";

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  const handleEditProfileClick = () => setEditProfilePopupOpen(true);
  const handleAddPlaceClick = () => setAddPlacePopupOpen(true);
  const handleEditAvatarClick = () => setEditAvatarPopupOpen(true);
  const handleCardClick = (cardData) => setSelectedCard(cardData);

  const closeAllPopups = () => {
    if (isEditProfilePopupOpen) setEditProfilePopupOpen(false);
    if (isAddPlacePopupOpen) setAddPlacePopupOpen(false);
    if (isEditAvatarPopupOpen) setEditAvatarPopupOpen(false);
    if (selectedCard) {
      setSelectedCard(null);
    }
  };

  const [currentUser, setCurrentState] = React.useState({
    name: "Загрузка...",
    about: "Загрузка...",
    avatar: "",
    currentUserId: "",
  });

  React.useEffect(() => {
    Promise.all([api.getUserInfo()])
      .then(([user]) => {
        setCurrentState({
          name: user.name,
          about: user.about,
          avatar: user.avatar,
          currentUserId: user._id,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  function handleUpdateUser({ name, about }) {
    api
      .editUserInfo({
        newName: name,
        newAbout: about,
      })
      .then((user) => {
        setCurrentState({ ...currentUser, name: user.name, about: user.about });
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="page__container">
          <Header />
          <Main
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            onCardClick={handleCardClick}
          />
          <Footer />
        </div>

        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />

        <PopupWithForm
          name="add-card"
          headerText="Новое место"
          buttonSaveText="Создать"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
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
            />
            <span className="form__span-error" id="add-card-url-error"></span>
          </section>
        </PopupWithForm>

        <PopupWithForm
          name="submit-delete"
          headerText="Вы уверены?"
          buttonSaveText="Да"
        ></PopupWithForm>

        <PopupWithForm
          name="update-avatar"
          headerText="Обновить аватар"
          buttonSaveText="Сохранить"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        >
          <section className="form__section">
            <input
              type="url"
              className="form__input"
              name="update-avatar-url"
              id="update-avatar-url"
              placeholder="Ссылка на аватар"
              required
            />
            <span
              className="form__span-error"
              id="update-avatar-url-error"
            ></span>
          </section>
        </PopupWithForm>

        <ImagePopup card={selectedCard} onClose={closeAllPopups}></ImagePopup>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
