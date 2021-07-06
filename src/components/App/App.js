import React from "react";

import Header from "./../Header/Header.js";
import Footer from "./../Footer/Footer.js";
import Main from "./../Main/Main.js";
import { api } from "../../utils/api";

import ImagePopup from "./../ImagePopup/ImagePopup.js";

import EditProfilePopup from "./../EditProfilePopup/EditProfilePopup.js";
import EditAvatarPopup from "./../EditAvatarPopup/EditAvatarPopup.js";
import AddPlacePopup from "./../AddPlacePopup/AddPlacePopup.js";
import SubmitDeletePopup from "./../SubmitDeletePopup/SubmitDeletePopup.js";

import { CurrentUserContext } from "./../../contexts/CurrentUserContext.js";

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [isSubmitDeletePopupOpen, setSubmitDeletePopupOpen] =
    React.useState(false);

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
    if (isSubmitDeletePopupOpen) setSubmitDeletePopupOpen(false);
  };

  const [cardToDelete, setcardToDelete] = React.useState({});

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

  function handleUpdateAvatar({ url }) {
    api
      .changeAvatar({
        newAvatarLink: url,
      })
      .then((user) => {
        setCurrentState({
          ...currentUser,
          avatar: user.avatar,
        });
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  }

  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getInitialCards()])
      .then(([cardsData]) => {
        setCards(cardsData);
      })
      .catch((err) => console.log(err));
  }, []);

  function handleCardLike(card) {
    const isLiked = card.likes.some(
      (liker) => liker._id === currentUser.currentUserId
    );

    api
      .toggleApiLike({ cardId: card._id, isSetLike: !isLiked })
      .then((newCard) => {
        setCards((state) =>
          state.map((c) => (c._id === card._id ? newCard : c))
        );
      });
  }

  function handleCardDelete(cardToDelete) {
    setSubmitDeletePopupOpen(true);
    setcardToDelete(cardToDelete);
  }

  function handleSubmitCardDelete() {
    api.deleteCard({ cardId: cardToDelete._id }).then((someData) => {
      setCards(cards.filter((card) => card._id !== cardToDelete._id));
      setcardToDelete({});
      closeAllPopups();
    });
  }

  function handleAddPlaceSubmit({ description, url }) {
    api.addNewCard({ cardName: description, cardLink: url }).then((newCard) => {
      setCards([newCard, ...cards]);
      closeAllPopups();
    });
  }

  //валидация форм
  // addCardFormValidator.enableValidation();
  // editProfileFormValidator.enableValidation();
  // changeAvatarFormValidator.enableValidation();
  //валидация форм

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
            cards={cards}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
          />
          <Footer />
        </div>

        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />

        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlaceSubmit}
          formName={document.forms.addCard}
        />

        <SubmitDeletePopup
          isOpen={isSubmitDeletePopupOpen}
          onClose={closeAllPopups}
          onSubmitDeleteCard={handleSubmitCardDelete}
        />

        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />

        <ImagePopup card={selectedCard} onClose={closeAllPopups}></ImagePopup>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
