import React from "react";

import Header from "./Header.js";
import Footer from "./Footer.js";
import Main from "./Main.js";

import api from "./../utils/api";

import ImagePopup from "./ImagePopup.js";

import EditProfilePopup from "./EditProfilePopup.js";
import EditAvatarPopup from "./EditAvatarPopup.js";
import AddPlacePopup from "./AddPlacePopup.js";
import SubmitDeletePopup from "./SubmitDeletePopup.js";

import { CurrentUserContext } from "./../contexts/CurrentUserContext.js";

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


  const [updateUserIsLoading, setUpdateUserIsLoading] = React.useState(false);
  const [updateAvatarIsLoading, setUpdateAvatarIsLoading] = React.useState(false);
  const [addCardIsLoading, setAddCardIsLoading] = React.useState(false);

  const closeAllPopups = () => {
    if (isEditProfilePopupOpen) setEditProfilePopupOpen(false);
    if (isAddPlacePopupOpen) setAddPlacePopupOpen(false);
    if (isEditAvatarPopupOpen) setEditAvatarPopupOpen(false);
    if (selectedCard) {
      setSelectedCard(null);
    }
    if (isSubmitDeletePopupOpen) setSubmitDeletePopupOpen(false);
  };

  const [cardToDelete, setCardToDelete] = React.useState({});

  const [currentUser, setCurrentState] = React.useState({
    name: "Загрузка...",
    about: "Загрузка...",
    avatar: "",
    currentUserId: "",
  });

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([user, cardsData]) => {
        setCurrentState({
          name: user.name,
          about: user.about,
          avatar: user.avatar,
          currentUserId: user._id,
        });

        setCards(cardsData);
      })
      .catch((err) => console.log(err));
  }, []);

  function handleUpdateUser({ name, about }) {

    setUpdateUserIsLoading(true);

    api
      .editUserInfo({
        newName: name,
        newAbout: about,
      })
      .then((user) => {
        setCurrentState({ ...currentUser, name: user.name, about: user.about });

        closeAllPopups();

        setUpdateUserIsLoading(false);
      })
      .catch((err) => console.log(err));
  }

  function handleUpdateAvatar({ url }) {

    setUpdateAvatarIsLoading(true);

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

        setUpdateAvatarIsLoading(false);
      })
      .catch((err) => console.log(err));
  }

  const [cards, setCards] = React.useState([]);

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
      })
      .catch((err) => console.log(err));
  }

  function handleCardDelete(cardToDelete) {
    setSubmitDeletePopupOpen(true);
    setCardToDelete(cardToDelete);
  }

  function handleSubmitCardDelete() {
    api
      .deleteCard({ cardId: cardToDelete._id })
      .then(() => {
        setCards(cards.filter((card) => card._id !== cardToDelete._id));
        setCardToDelete({});
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  }

  function handleAddPlaceSubmit({ description, url }) {

    setAddCardIsLoading(true);

    api
      .addNewCard({ cardName: description, cardLink: url })
      .then((newCard) => {
        setCards([newCard, ...cards]);        

        closeAllPopups();

        setAddCardIsLoading(false);
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
          formName={"edit-profile"}
          isLoading={updateUserIsLoading}
        />

        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlaceSubmit}
          formName={"add-card"}
          isLoading={addCardIsLoading}
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
          formName={"update-avatar"}
          isLoading={updateAvatarIsLoading}
        />

        <ImagePopup card={selectedCard} onClose={closeAllPopups}></ImagePopup>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
