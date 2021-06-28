import React from "react";
import { api } from "../../utils/api";
import Card from "./../Card/Card.js";
import Button from "./../Button/Button.js";

import { CurrentUserContext } from "./../../contexts/CurrentUserContext.js";

function Main(props) {
  const currentUserContext = React.useContext(CurrentUserContext);

  const [cards, setCards] = React.useState([]);

  const [isButtonChangeAvatarVisible, setCssButtonEditAvatarStyles] =
    React.useState(false);

  React.useEffect(() => {
    Promise.all([api.getInitialCards()])
      .then(([cardsData]) => {
        setCards(cardsData);
      })
      .catch((err) => console.log(err));
  }, []);

  function makeButtonChangeAvatarProfileVisible() {
    setCssButtonEditAvatarStyles(true);
  }

  function makeButtonChangeAvatarProfileUnvisible() {
    setCssButtonEditAvatarStyles(false);
  }

  const cssEditAvatarButton = {
    opacity: 1,
  };

  return (
    <main className="main page__container-item page__container-item_stretch_narrow">
      <section className="profile">
        <div className="profile__avatar-container">
          <div className="profile__avatar-box">
            <div
              style={{ backgroundImage: `url(${currentUserContext.avatar})` }}
              className="profile__avatar"
            ></div>
            <Button
              type="button"
              className="button button_type_change-avatar"
              ariaLabel="Кнопка редактирования аватара"
              onMouseEnter={makeButtonChangeAvatarProfileVisible}
              onMouseLeave={makeButtonChangeAvatarProfileUnvisible}
              onClick={props.onEditAvatar}
              style={isButtonChangeAvatarVisible ? cssEditAvatarButton : null}
            ></Button>
          </div>
          <div className="profile__info">
            <h1 className="profile__name">{currentUserContext.name}</h1>
            <Button
              type="button"
              className="button button_type_edit-profile"
              ariaLabel="Кнопка редактирования профиля"
              onClick={props.onEditProfile}
            ></Button>
            <p className="profile__description">{currentUserContext.about}</p>
          </div>
        </div>
        <Button
          type="button"
          className="button button_type_add-element"
          ariaLabel="Кнопка добавления элемента"
          onClick={props.onAddPlace}
        ></Button>
      </section>
      <section className="cards">
        <ul className="cards__list">
          {cards.map((card) => {
            return (
              <CurrentUserContext.Provider
                value={currentUserContext}
                key={card._id}
              >
                <Card
                  cardData={card}
                  onCardClick={() => props.onCardClick(card)}
                />
              </CurrentUserContext.Provider>
            );
          })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
