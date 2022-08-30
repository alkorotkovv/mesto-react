import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';

import PopupWithImage from './PopupWithImage.js';

function App() {
  return (
    <div className="page">
      <Header />
      <Main />
      <Footer />
      


      <div className="popup popup_type_edit">
        <div className="popup__container">
          <form className="form form_profile_edit" name="form_profile_edit" noValidate>
            <h2 className="form__title">Редактировать профиль</h2>
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

      <div className="popup popup_type_add">
        <div className="popup__container">
          <form className="form form_card_add" name="form_card_add" noValidate>
            <h2 className="form__title">Новое место</h2>
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
          </form>
          <button className="popup__close-button" type="button" aria-label="Close"></button>
        </div>
      </div>

      <PopupWithImage />

      <div className="popup popup_type_delete">
        <div className="popup__container">
          <form className="form form_card_delete" name="form_card_delete" noValidate>
            <h2 className="form__title">Вы уверены?</h2>
            <button className="form__save-button" type="submit">Да</button>
          </form>
          <button className="popup__close-button" type="button" aria-label="Close"></button>
        </div>
      </div>

      <div className="popup popup_type_avatar">
        <div className="popup__container">
          <form className="form form_avatar_edit" name="form_avatar_edit" noValidate>
            <h2 className="form__title">Обновить аватар</h2>
            <fieldset className="form__info">
              <label className="form__field">
                <input className="form__input form__input_content_url" id="input-avatarurl" type="url" name="avatarurl" placeholder="Ссылка на аватар" required/>
                <span className="form__input-error input-avatarurl-error" ></span>
              </label>
            </fieldset>
            <button className="form__save-button form__save-button_disabled" type="submit" disabled>Сохранить</button>
          </form>
          <button className="popup__close-button" type="button" aria-label="Close"></button>
        </div>
      </div>



    <template id="cardTemplate">
      <li className="card">
        <img className="card__image" src="./images/elbrus.jpg" alt="фотография"/>
        <div className="card__description">
          <h2 className="card__title">Гора Эльбрус</h2>
          <div className="card__likes">
            <button className="card__like" type="button" aria-label="Like"></button>
            <p className="card__count">100</p>
          </div>
        </div>
        <button className="card__delete" type="button" aria-label="Delete"></button>
      </li>
    </template>
    </div>
  );
}

export default App;
