import logo from "./logo.svg";

//импорт рисунков

import "./App.css";

function App() {
  return (
    <>
      <div className="page">
        <div className="page__container">
          <header className="header page__container-item">
            <a className="header__link" href="#" target="_self">
              <img
                src="<%=require('./images/header_logo_white.svg')%>"
                className="header__logo"
                alt="Лого"
              />
            </a>
          </header>
          <main className="main page__container-item page__container-item_stretch_narrow">
            <section className="profile">
              <div className="profile__avatar-container">
                <div className="profile__avatar-box">
                  <img
                    src="#"
                    className="profile__avatar"
                    alt="Аватар пользователя"
                  />

                  <button
                    type="button"
                    className="button button_type_change-avatar"
                    aria-label="Кнопка редактирования аватара"
                  ></button>
                </div>
                <div className="profile__info">
                  <h1 className="profile__name"></h1>
                  <button
                    type="button"
                    className="button button_type_edit-profile"
                    aria-label="Кнопка редактирования профиля"
                  ></button>
                  <p className="profile__description"></p>
                </div>
              </div>
              <button
                type="button"
                className="button button_type_add-element"
                aria-label="Кнопка добавления элемента"
              ></button>
            </section>
            <section className="cards">
              <ul className="cards__list"></ul>
            </section>
          </main>
          <footer className="footer page__container-item page__container-item_stretch_narrow">
            <p className="footer__copyright">© 2021 Mesto Russia</p>
          </footer>
        </div>

        <article className="popup popup_type_profile">
          <div className="popup__overlay"></div>
          <div className="popup__container">
            <h2 className="popup__title">Редактировать профиль</h2>
            <form className="form" name="editProfile" novalidate>
              <section className="form__section">
                <input
                  type="text"
                  className="form__input"
                  name="edit-profile-name"
                  id="edit-profile-name"
                  required
                  minlength="2"
                  maxlength="40"
                />
                <span
                  className="form__span-error"
                  id="edit-profile-name-error"
                ></span>
              </section>
              <section className="form__section">
                <input
                  type="text"
                  className="form__input"
                  name="edit-profile-description"
                  id="edit-profile-description"
                  required
                  minlength="2"
                  maxlength="200"
                />
                <span
                  className="form__span-error"
                  id="edit-profile-description-error"
                ></span>
              </section>
              <button type="submit" className="button button_type_save-form">
                Сохранить
              </button>
            </form>
            <button
              type="button"
              className="button button_type_close-popup"
              aria-label="Кнопка закрытия попапа редактирования"
            ></button>
          </div>
        </article>

        <article className="popup popup_type_card">
          <div className="popup__overlay"></div>
          <div className="popup__container">
            <h2 className="popup__title">Новое место</h2>
            <form className="form" name="addCard" novalidate>
              <section className="form__section">
                <input
                  type="text"
                  className="form__input"
                  name="add-card-name"
                  id="add-card-name"
                  placeholder="Название"
                  required
                  minlength="2"
                  maxlength="30"
                />
                <span
                  className="form__span-error"
                  id="add-card-name-error"
                ></span>
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
                <span
                  className="form__span-error"
                  id="add-card-url-error"
                ></span>
              </section>
              <button type="submit" className="button button_type_save-form">
                Создать
              </button>
            </form>
            <button
              type="button"
              className="button button_type_close-popup"
              aria-label="Кнопка закрытия попапа добавления карточки"
            ></button>
          </div>
        </article>
        <article className="popup popup_type_image">
          <div className="popup__overlay"></div>
          <div className="popup__container popup__container_type_image">
            <figure className="figure">
              <img src="#" className="figure__image" alt="#" />
              <figcaption className="figure__caption"></figcaption>
            </figure>
            <button
              type="button"
              className="button button_type_close-popup"
              aria-label="Кнопка закрытия зума"
            ></button>
          </div>
        </article>
        <article className="popup popup_type_submit">
          <div className="popup__overlay"></div>
          <div className="popup__container">
            <h2 className="popup__title popup__title_type_submit">
              Вы уверены?
            </h2>
            <form className="form" name="askDeleteCard" novalidate>
              <button type="submit" className="button button_type_save-form">
                Да
              </button>
            </form>
            <button
              type="button"
              className="button button_type_close-popup"
              aria-label="Кнопка закрытия попапа уточнения удаления"
            ></button>
          </div>
        </article>
        <article className="popup popup_type_avatar">
          <div className="popup__overlay"></div>
          <div className="popup__container">
            <h2 className="popup__title">Обновить аватар</h2>
            <form className="form" name="updateAvatar" novalidate>
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
              <button type="submit" className="button button_type_save-form">
                Сохранить
              </button>
            </form>
            <button
              type="button"
              className="button button_type_close-popup"
              aria-label="Кнопка закрытия попапа изменения аватара"
            ></button>
          </div>
        </article>
      </div>
      <template id="card-template">
        <li className="card">
          <img src="#" alt="#" className="card__image" />
          <div className="card__sign">
            <h2 className="card__description"></h2>
            <div className="card__heart-container">
              <button
                type="button"
                className="card__heart"
                aria-label="Иконка лайка"
              ></button>
              <span className="card__heart-voices"></span>
            </div>
          </div>
          <button className="button button_type_delete-card button_hidden"></button>
        </li>
      </template>
    </>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
