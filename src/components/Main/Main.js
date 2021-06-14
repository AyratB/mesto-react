function Main() {
  return (
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
  );
}

export default Main;
