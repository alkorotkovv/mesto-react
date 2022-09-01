import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';

import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupState] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupState] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupState] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  function handleEditProfileClick() {
    setIsEditProfilePopupState(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupState(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupState(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupState(false);
    setIsAddPlacePopupState(false);
    setIsEditAvatarPopupState(false);
    setSelectedCard({});
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  return (
    <div className="page">
      <Header />
      <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick}/>
      <Footer />
      <ImagePopup card={selectedCard} onClose = {closeAllPopups} />
      <PopupWithForm name="profile_edit" title="Редактировать профиль" buttonText="Сохранить" onClose = {closeAllPopups} isOpen={isEditProfilePopupOpen} children={
        <>
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
        </>
        }  />

      <PopupWithForm name="card_add" title="Новое место" buttonText="Создать" onClose = {closeAllPopups} isOpen={isAddPlacePopupOpen} children={
        <>
            <fieldset className="form__info">
              <label className="form__field">
                <input className="form__input form__input_content_place" id="input-place" type="text" name="place" placeholder="Название" required minLength="2" maxLength="30"/>
                <span className="form__input-error input-place-error" ></span>
              </label>
              <label className="form__field">
                <input className="form__input form__input_content_url" id="input-url" type="url" name="url" placeholder="Ссылка на картинку" required/>
                <span className="form__input-error input-url-error" ></span>
              </label>
            </fieldset>
        </>
        }  />  

      <PopupWithForm name="avatar_edit" title="Обновить аватар" buttonText="Сохранить" onClose = {closeAllPopups} isOpen={isEditAvatarPopupOpen} children={
        <>
            <fieldset className="form__info">
              <label className="form__field">
                <input className="form__input form__input_content_url" id="input-avatarurl" type="url" name="avatarurl" placeholder="Ссылка на аватар" required/>
                <span className="form__input-error input-avatarurl-error" ></span>
              </label>
            </fieldset>
        </>
        }  /> 

      <PopupWithForm name="card_delete" title="Вы уверены?" children={<></>}  /> 

    </div>
  )
}

export default App;
