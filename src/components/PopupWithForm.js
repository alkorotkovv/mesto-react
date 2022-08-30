function PopupWithForm(props) {
  return (
    <div className={`popup popup_type_${props.name}`}>
      <div className="popup__container">
        <form className="form form_profile_edit" name = {`form_${props.name}`} noValidate>
          <h2 className="form__title">{props.title}</h2>
          {props.children}
        </form>
          <button className="popup__close-button" type="button" aria-label="Close"></button>
      </div>
    </div>
  );
}

export default PopupWithForm;