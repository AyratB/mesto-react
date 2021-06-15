function PopupWithForm(props) {
    return (
        <article className={`popup popup_type_${props.name}`}>
        <div className="popup__overlay"></div>
        <div className="popup__container">
          <h2 className="popup__title">{props.headerText}</h2>
          <form className="form" name="editProfile" noValidate>
            
            {props.children}
            
            <button type="submit" className="button button_type_save-form">{props.buttonSaveText}</button>
          </form>
          <button type="button" className="button button_type_close-popup" aria-label="Кнопка закрытия попапа"></button>
        </div>
      </article>
    );
  }
  
  export default PopupWithForm;