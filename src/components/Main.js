import profileImage from '../images/image.jpg';

function Main() {

  function handleEditProfileClick() {
    const popupElement = document.querySelector('.popup_type_profile_edit');
    popupElement.classList.add('popup_opened');
  }

  function handleAddPlaceClick() {
    const popupElement = document.querySelector('.popup_type_card_add');
    popupElement.classList.add('popup_opened');
  }

  function handleEditAvatarClick() {
    const popupElement = document.querySelector('.popup_type_avatar_edit');
    popupElement.classList.add('popup_opened');
  }

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__main">
          <div className="profile__avatar" onClick={handleEditAvatarClick}>
            <img className="profile__image" src={profileImage} alt="аватар" />
          </div>
          <div className="profile__info">
            <div className="profile__name-line">
              <h1 className="profile__title">Жак-Ив Кусто</h1>
              <button className="profile__edit-button" type="button" aria-label="Edit" onClick={handleEditProfileClick}></button>
            </div>
            <p className="profile__subtitle">Исследователь океана</p>
          </div>
        </div>
        <button className="profile__add-button" type="button" aria-label="Add" onClick={handleAddPlaceClick}></button>
      </section>
      <section className="elements">
        <ul className="elements__cards">
        </ul>
      </section>
    </main>
  );
}

export default Main;