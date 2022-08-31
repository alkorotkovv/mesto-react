import React from 'react';
import ReactDOM from 'react-dom/client';

import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import PopupWithImage from './PopupWithImage.js';

function App() {

  const [isEditProfilePopupOpen, setEditProfilePopupState] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupState] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupState] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  function handleEditProfileClick() {
    setEditProfilePopupState(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupState(true);
  }

  function handleEditAvatarClick() {
    setEditAvatarPopupState(true);
  }

  function closeAllPopups() {
    setEditProfilePopupState(false);
    setAddPlacePopupState(false);
    setEditAvatarPopupState(false);
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
      <PopupWithImage card={selectedCard} onClose = {closeAllPopups} />
      <PopupWithForm name="profile_edit" title="Редактировать профиль" onClose = {closeAllPopups} isOpen={isEditProfilePopupOpen} children={
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
            <button className="form__save-button form__save-button_disabled" type="submit" disabled>Сохранить</button>
        </>
        }  />

      <PopupWithForm name="card_add" title="Новое место" onClose = {closeAllPopups} isOpen={isAddPlacePopupOpen} children={
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
            <button className="form__save-button form__save-button_disabled" type="submit" disabled>Создать</button>
        </>
        }  />  

      <PopupWithForm name="avatar_edit" title="Обновить аватар" onClose = {closeAllPopups} isOpen={isEditAvatarPopupOpen} children={
        <>
            <fieldset className="form__info">
              <label className="form__field">
                <input className="form__input form__input_content_url" id="input-avatarurl" type="url" name="avatarurl" placeholder="Ссылка на аватар" required/>
                <span className="form__input-error input-avatarurl-error" ></span>
              </label>
            </fieldset>
            <button className="form__save-button form__save-button_disabled" type="submit" disabled>Сохранить</button>
        </>
        }  /> 

      <PopupWithForm name="card_delete" title="Вы уверены?" children={
            <button className="form__save-button" type="submit">Да</button>}  /> 

    </div>
  )
}

export default App;
