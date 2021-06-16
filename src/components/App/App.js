import Header from './../Header/Header.js';
import Footer from './../Footer/Footer.js';
import Main from './../Main/Main.js';

import PopupWithForm from './../PopupWithForm/PopupWithForm.js';
import ImagePopup from './../ImagePopup/ImagePopup.js';

import React from 'react';

function App() {

  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  const handleEditProfileClick = () => setEditProfilePopupOpen(true);
  const handleAddPlaceClick = () => setAddPlacePopupOpen(true);
  const handleEditAvatarClick = () => setEditAvatarPopupOpen(true);
  const handleCardClick = (cardData) => setSelectedCard(cardData);

  const closeAllPopups = () => {
    if(isEditProfilePopupOpen)
      setEditProfilePopupOpen(false);
    if(isAddPlacePopupOpen)
      setAddPlacePopupOpen(false);
    if(isEditAvatarPopupOpen)
      setEditAvatarPopupOpen(false);
    if(selectedCard){      
      setSelectedCard(null);
    }
  }
  
  return (
    <>
      <div className="page">
        <div className="page__container">
          <Header/>
          <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick}/> 
          <Footer/>
        </div>

        <PopupWithForm name='edit-profile' headerText='Редактировать профиль' buttonSaveText='Сохранить' isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
          <section className="form__section">
            <input type="text" className="form__input" name="edit-profile-name" id="edit-profile-name" required minLength="2" maxLength="40"/>
            <span className="form__span-error" id="edit-profile-name-error"></span>
          </section>
          <section className="form__section">
            <input type="text" className="form__input" name="edit-profile-description" id="edit-profile-description" required minLength="2" maxLength="200"/>
            <span className="form__span-error" id="edit-profile-description-error"></span>
          </section>
        </PopupWithForm>

        <PopupWithForm name='add-card' headerText='Новое место' buttonSaveText='Создать' isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
          <section className="form__section">
            <input type="text" className="form__input" name="add-card-name" id="add-card-name" placeholder="Название" required minLength="2" maxLength="30"/>
            <span className="form__span-error" id="add-card-name-error"></span>
          </section>
          <section className="form__section">
            <input type="url" className="form__input" name="add-card-url" id="add-card-url" placeholder="Ссылка на картинку" required/>
            <span className="form__span-error" id="add-card-url-error"></span>
          </section>
        </PopupWithForm>

        <PopupWithForm name='submit-delete' headerText='Вы уверены?' buttonSaveText='Да'></PopupWithForm>

        <PopupWithForm name='update-avatar' headerText='Обновить аватар' buttonSaveText='Сохранить' isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
          <section className="form__section">
            <input type="url" className="form__input" name="update-avatar-url" id="update-avatar-url" placeholder="Ссылка на аватар" required/>
            <span className="form__span-error" id="update-avatar-url-error"></span>
          </section>
        </PopupWithForm>

        <ImagePopup card={selectedCard}  onClose={closeAllPopups}></ImagePopup>
      </div>          
    </>
  );
}

export default App;
