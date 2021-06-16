import React from "react";
import { api } from "./../../utils/Api";
import Card from './../Card/Card.js';

function Main(props) {
  //исходные данные пользователя
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");

  //карточки
  const [cards, setCards] = React.useState([]);

  //инициализация исходных данных
  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([user, cardsData]) => {
        //установка исходных данных
        setUserName(user.name);
        setUserDescription(user.about);
        setUserAvatar(user.avatar);

        //прорисовка карточек
        setCards(cardsData);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="main page__container-item page__container-item_stretch_narrow">
      <section className="profile">
        <div className="profile__avatar-container">
          <div className="profile__avatar-box">
            <div
              style={{ backgroundImage: `url(${userAvatar})` }}
              className="profile__avatar"
            ></div>
            <button
              type="button"
              className="button button_type_change-avatar"
              aria-label="Кнопка редактирования аватара"
              onClick={props.onEditAvatar}
            ></button>
          </div>
          <div className="profile__info">
            <h1 className="profile__name">{userName}</h1>
            <button
              type="button"
              className="button button_type_edit-profile"
              aria-label="Кнопка редактирования профиля"
              onClick={props.onEditProfile}
            ></button>
            <p className="profile__description">{userDescription}</p>
          </div>
        </div>
        <button
          type="button"
          className="button button_type_add-element"
          aria-label="Кнопка добавления элемента"
          onClick={props.onAddPlace}
        ></button>
      </section>
      <section className="cards">
        <ul className="cards__list">
          {cards.map((card) => {
            return (
              <li key={card._id} className="card">
                <Card cardData={card} onCardClick={()=> props.onCardClick(card)}></Card>
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
