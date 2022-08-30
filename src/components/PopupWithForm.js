function PopupWithForm(props) {
  return (
    <div className={`popup popup_type_${props.name}`}>
      <div className="popup__container">
        <form className="form form_profile_edit" name = {`form_${props.name}`} noValidate>
          <h2 className="form__title">{props.title}</h2>
          <fieldset className="form__info">
            <label className="form__field">
              <input className="form__input form__input_content_name" id="input-name" type="text" name="name" placeholder="Имя" required minLength="2" maxLength="40"/>
              <span className="form__input-error input-name-error" ></span>
            </label>
            <label className="form__field">
              <input className="form__input form__input_content_job" id="input-job" type="text" name="job" placeholder="О себе" required minLength="2" maxLength="200"/>
              <span className="form__input-error input-job-error" ></span>
            </label>
          </fieldset>
          <button className="form__save-button form__save-button_disabled" type="submit" disabled>Сохранить</button>
        </form>
          <button className="popup__close-button" type="button" aria-label="Close"></button>
      </div>
    </div>
  );
}

export default PopupWithForm;