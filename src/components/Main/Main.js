import React from "react";
import { api } from "../../utils/api";
import Card from "./../Card/Card.js";
import Button from "./../Button/Button.js";

function Main(props) {
  //исходные данные пользователя
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");

  //карточки
  const [cards, setCards] = React.useState([]);

  const [isButtonChangeAvatarVisible, setCssButtonEditAvatarStyles] = React.useState(false);

  //инициализация исходных данных
  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([user, cardsData]) => {
        debugger;
        //установка исходных данных
        setUserName(user.name);
        setUserDescription(user.about);
        setUserAvatar(user.avatar);

        //прорисовка карточек
        setCards(cardsData);
      })
      .catch((err) => console.log(err));
  }, []);

  function makeButtonChangeAvatarProfileVisible() {
    debugger;
    setCssButtonEditAvatarStyles(true);
  }
  
  function makeButtonChangeAvatarProfileUnvisible() {
    debugger;
    setCssButtonEditAvatarStyles(false);
  }

  const cssEditAvatarButton = {
    visibility: 'visible',
    opacity: 1,
  };

  return (
    <main className="main page__container-item page__container-item_stretch_narrow">
      <section className="profile">
        <div className="profile__avatar-container">
          <div className="profile__avatar-box">
            <div
              style={{ backgroundImage: `url(${userAvatar})` }}
              className="profile__avatar"              
            ></div>

            {/* <Button
              type="button"
              className="button button_type_change-avatar"
              ariaLabel="Кнопка редактирования аватара"
              onMouseOver={makeButtonChangeAvatarProfileVisible}
              onMouseOut={makeButtonChangeAvatarProfileUnvisible}
              style={isButtonChangeAvatarVisible ? {cssEditAvatarButton} : {}}
            ></Button> */}
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
              <Card
                key={card._id}
                cardData={card}
                onCardClick={() => props.onCardClick(card)}
              ></Card>
            );
          })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
