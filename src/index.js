import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();



//из файла index.js mesto
// import { apiUserData } from "../utils/apiUserData.js";

// import { FormValidator } from "../components/FormValidator.js";
// import { Card } from "../components/Card.js";
// import { Section } from "../components/Section.js";
// import { PopupWithImage } from "../components/PopupWithImage.js";
// import { PopupWithForm } from "../components/PopupWithForm.js";
// import { UserInfo } from "../components/UserInfo.js";
// import { Api } from "../components/Api.js";

// import "../pages/index.css";

// const profileAvatar = document.querySelector(".profile__avatar");

// const editProfileInputName = document.querySelector(
//   'input[name="edit-profile-name"]'
// );
// const editProfileInputDescription = document.querySelector(
//   'input[name="edit-profile-description'
// );

// let currentUser = null;

// const userInfo = new UserInfo({
//   profileNameSelector: ".profile__name",
//   profileDescriptionSelector: ".profile__description",
// });

// const section = new Section(
//   {
//     renderer: (data) => section.addItem(returnCard(data)),
//   },
//   ".cards__list"
// );

// const api = new Api({
//   baseUrl: `${apiUserData.ariBaseUrl}/${apiUserData.userGroupNumber}`,
//   headers: { authorization: apiUserData.userAuthorizationToken},
// });

// const validationConfig = {
//   formSelector: ".form",
//   inputSelector: ".form__input",
//   submitButtonSelector: ".button_type_save-form",
//   inactiveButtonClass: "button_inactive",
//   inputErrorClass: "form__input_type_error",
//   errorClass: "form__span-error_active",
// };

// const addCardFormValidator = new FormValidator(
//   validationConfig,
//   document.forms['add-card']
// );

// const editProfileFormValidator = new FormValidator(
//   validationConfig,
//   document.forms['edit-profile']
// );

// const changeAvatarFormValidator = new FormValidator(
//   validationConfig,
//   document.forms['update-avatar']
// );

// //кнопки
// const addNewCardButton = document.querySelector(".button_type_add-element");

// const popupEditProfileEditButton = document.querySelector(
//   ".button_type_edit-profile"
// );

// const buttonChangeAvatarProfile = document.querySelector(
//   ".button_type_change-avatar"
// );
// //кнопки

// //попапы
// const popupAddCart = new PopupWithForm({
//   popupSelector: ".popup_type_add-card",
//   submitFormCb: (formData) => {
//     changeButtonTextWhenDoing(popupAddCart.buttonSubmit);
//     api
//       .addNewCard({
//         cardName: formData["add-card-name"],
//         cardLink: formData["add-card-url"],
//       })
//       .then((newCardData) => {
//         section.addItem(returnCard(newCardData));
//         popupAddCart.close();
//       })
//       .catch((err) => console.log(err))
//       .finally(() => {
//         popupAddCart.buttonSubmit.textContent = "Создать";
//       });
//   },
// });

// const popupEditForm = new PopupWithForm({
//   popupSelector: ".popup_type_edit-profile",

//   submitFormCb: (formData) => {
//     changeButtonTextWhenDoing(popupEditForm.buttonSubmit);

//     api
//       .editUserInfo({
//         newName: formData["edit-profile-name"],
//         newAbout: formData["edit-profile-description"],
//       })
//       .then((user) => {
//         userInfo.setUserInfo(user["name"], user["about"]);
//         popupEditForm.close();
//       })
//       .catch((err) => console.log(err))
//       .finally(() => {
//         popupEditForm.buttonSubmit.textContent = "Сохранить";
//       });
//   },
// });

// const popupZoom = new PopupWithImage(".popup_type_image");

// const popupChangeAvatar = new PopupWithForm({
//   popupSelector: ".popup_type_update-avatar",

//   submitFormCb: (formData) => {
//     changeButtonTextWhenDoing(popupChangeAvatar.buttonSubmit);

//     api
//       .changeAvatar({ newAvatarLink: formData["update-avatar-url"] })
//       .then((data) => {
//         profileAvatar.src = data.avatar;
//         popupChangeAvatar.close();
//       })
//       .catch((err) => console.log(err))
//       .finally(() => {
//         popupChangeAvatar.buttonSubmit.textContent = "Сохранить";
//       });
//   },
// });

// let popupAskDeleteCard = null;
// //попапы

// //функции
// function makeButtonChangeAvatarProfileVisible() {
//   buttonChangeAvatarProfile.style.visibility = "visible";
//   buttonChangeAvatarProfile.style.opacity = "1";
//   buttonChangeAvatarProfile.addEventListener(
//     "mouseout",
//     makeButtonChangeAvatarProfileUnvisible
//   );
// }

// function makeButtonChangeAvatarProfileUnvisible() {
//   buttonChangeAvatarProfile.style.visibility = "hidden";
//   buttonChangeAvatarProfile.style.opacity = "0";
//   buttonChangeAvatarProfile.removeEventListener(
//     "mouseout",
//     makeButtonChangeAvatarProfileUnvisible
//   );
// }

// function changeButtonTextWhenDoing(button) {
//   button.textContent = "Сохранение...";
// }

// function returnCard(data) {
//   const cardItem = new Card({
//     cardData: data,
//     handleCardClick: handleCardClick,
//     cardTemplateClassSelector: "#card-template",
//     handleDeleteIconClick: () => handleDeleteIconClick(cardItem),
//     currentOwner: currentUser,
//     handlerToggleLike: (isSetLike) => {
//       api
//         .toggleApiLike({ cardId: data._id, isSetLike: isSetLike })
//         .then((res) => {
//           cardItem.toggleCardLike(isSetLike);
//           cardItem.countHeartVoices(res.likes.length);
//         })
//         .catch((err) => console.log(err));
//     },
//   });

//   return cardItem.createCard();
// }

// function handleDeleteIconClick(cardItem) {
//   popupAskDeleteCard = new PopupWithForm({
//     popupSelector: ".popup_type_submit-delete",
//     submitFormCb: () => {
//       api
//         .deleteCard({ cardId: cardItem.getCardId() })
//         .then(() => {
//           cardItem.remove();
//           popupAskDeleteCard.close();
//         })
//         .catch((err) => console.log(err));
//     },
//   });

//   popupAskDeleteCard.setEventListeners();
//   popupAskDeleteCard.open();
// }

// function handleAddNewCardButton() {
//   addCardFormValidator.clearAllFormErrors();
//   addCardFormValidator.makeButtonDisable();
//   popupAddCart.open();
// }

// function getProfileData(userInfo) {
//   const { profileName, profileDescription } = userInfo.getUserInfo();

//   editProfileInputName.value = profileName;
//   editProfileInputDescription.value = profileDescription;
// }

// function dispatchInputEvent(form) {
//   const inputs = form.querySelectorAll(".form__input");

//   if (inputs.length > 0)
//     inputs[0].dispatchEvent(
//       new Event("input", { bubbles: true, cancelable: true })
//     );
// }

// function handleCardClick(name, link) {
//   popupZoom.open(name, link);
// }

// //функционал
// Promise.all([api.getUserInfo(), api.getInitialCards()])
//   .then(([user, cardsData]) => {
//     currentUser = user;
//     userInfo.setUserInfo(user["name"], user["about"]);
//     profileAvatar.src = user["avatar"];

//     section.renderItems(cardsData.reverse());
//   })
//   .catch((err) => console.log(err));

// //активация попапов
// popupAddCart.setEventListeners();
// popupEditForm.setEventListeners();
// popupZoom.setEventListeners();
// popupChangeAvatar.setEventListeners();
// //активация попапов

// //валидация форм
// addCardFormValidator.enableValidation();
// editProfileFormValidator.enableValidation();
// changeAvatarFormValidator.enableValidation();
// //валидация форм

// //обработчики событий кнопок
// addNewCardButton.addEventListener("click", handleAddNewCardButton);

// buttonChangeAvatarProfile.addEventListener("click", () => {
//   changeAvatarFormValidator.clearAllFormErrors();
//   changeAvatarFormValidator.makeButtonDisable();
//   popupChangeAvatar.open();
// });

// popupEditProfileEditButton.addEventListener("click", () => {
//   editProfileFormValidator.clearAllFormErrors();
//   editProfileFormValidator.makeButtonDisable();

//   getProfileData(userInfo);

//   popupEditForm.open();

//   dispatchInputEvent(popupEditForm.form);
// });

// profileAvatar.addEventListener(
//   "mouseover",
//   makeButtonChangeAvatarProfileVisible
// );
