function PopupWithImage() {
  return (
    <div className="popup popup_type_card">
      <div className="popup__container">
        <figure className="card-scale">
            <img className="card-scale__image" src='https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg' alt="попап фотография"/>
            <figcaption className="card-scale__caption">Байкал</figcaption>
        </figure>
        <button className="popup__close-button" type="button" aria-label="Close"></button>
      </div>
    </div>
  );
}

export default PopupWithImage;