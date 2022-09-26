import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';

import api from '../utils/Api.js';
import CurrentUserContext from '../context/CurrentUserContext';

import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import EditProfilePopup from './EditProfilePopup.js';
import EditAvatarPopup from './EditAvatarPopup.js';
import ImagePopup from './ImagePopup.js';

function App() {

  const [currentUser, setCurrentUser] = useState({name: "", about: "", avatar: ""});
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  React.useEffect(() => {
    api.getUserInfo()
      .then((userInfo) => {
        setCurrentUser(userInfo);
      })
      .catch((err) => {
        console.log(err);
      })
}, []);



  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({});
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleUpdateUser(userObject) {
    api.setUserInfo(userObject)
      .then((userInfo) => {
        setCurrentUser(userInfo);
        setIsEditProfilePopupOpen(false);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  function handleUpdateAvatar(avatarObject) {
    api.setUserAvatar(avatarObject)
      .then((userInfo) => {
        setCurrentUser(userInfo);
        setIsEditAvatarPopupOpen(false);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick}/>
        <Footer />
        <ImagePopup card={selectedCard} onClose = {closeAllPopups} />
        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />

        <PopupWithForm name="card_add" title="Новое место" buttonText="Создать" onClose = {closeAllPopups} isOpen={isAddPlacePopupOpen} >
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
        </PopupWithForm>

        <PopupWithForm name="card_delete" title="Вы уверены?" /> 

      </div>
    </CurrentUserContext.Provider>
  )
}

export default App;
