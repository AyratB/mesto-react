import Header from './../Header/Header.js';
import Footer from './../Footer/Footer.js';
import Main from './../Main/Main.js';

import PopupWithForm from './../PopupWithForm/PopupWithForm.js';
import ImagePopup from './../ImagePopup/ImagePopup.js';

function App() {
  return (
    <>
      <div className="page">
        <div className="page__container">
          <Header/>
          <Main/> 
          <Footer/>
        </div>

        <PopupWithForm name='edit-profile' headerText='Редактировать профиль' buttonSaveText='Сохранить'>
          <section className="form__section">
            <input type="text" className="form__input" name="edit-profile-name" id="edit-profile-name" required minLength="2" maxLength="40"/>
            <span className="form__span-error" id="edit-profile-name-error"></span>
          </section>
          <section className="form__section">
            <input type="text" className="form__input" name="edit-profile-description" id="edit-profile-description" required minLength="2" maxLength="200"/>
            <span className="form__span-error" id="edit-profile-description-error"></span>
          </section>
        </PopupWithForm>

        <PopupWithForm name='add-card' headerText='Новое место' buttonSaveText='Создать'>
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

        <PopupWithForm name='update-avatar' headerText='Обновить аватар' buttonSaveText='Сохранить'>
          <section className="form__section">
            <input type="url" className="form__input" name="update-avatar-url" id="update-avatar-url" placeholder="Ссылка на аватар" required/>
            <span className="form__span-error" id="update-avatar-url-error"></span>
          </section>
        </PopupWithForm>

        <ImagePopup></ImagePopup>

        

        

        
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
