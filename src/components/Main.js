import React, {useState} from 'react';
import profileImage from '../images/image.jpg';
import api from '../utils/Api.js';
import Card from './Card.js';
import CurrentUserContext from '../context/CurrentUserContext';

function Main(props) {

  const currentUser = React.useContext(CurrentUserContext);
  const [cards, setCards] = useState([]);

  React.useEffect(() => {
    api.getInitialCards()
      .then((initialCards) => {
        setCards(initialCards);
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);

  function handleCardLike(card) {
    const isLiked = card.likes.some(person => person._id === currentUser._id);
    api.toggleLikeCard(card, isLiked)
    .then((newCard) => {
      setCards(cards.map((c) => c._id === card._id ? newCard : c));
    });
  }

  function handleCardDelete(card) {
    api.deleteCard(card)
    .then((newCard) => {
      setCards(cards.filter((c) => c._id !== card._id));
    });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <main className="content">
        <section className="profile">
          <div className="profile__main">
            <div className="profile__avatar" onClick={props.onEditAvatar}>
              <img className="profile__image" src={currentUser.avatar} alt="аватар" />
            </div>
            <div className="profile__info">
              <div className="profile__name-line">
                <h1 className="profile__title">{currentUser.name}</h1>
                <button className="profile__edit-button" type="button" aria-label="Edit" onClick={props.onEditProfile}></button>
              </div>
              <p className="profile__subtitle">{currentUser.about}</p>
            </div>
          </div>
          <button className="profile__add-button" type="button" aria-label="Add" onClick={props.onAddPlace}></button>
        </section>
        <section className="elements">
          <ul className="elements__cards">

            { 
              cards.map(element => 
                <Card card={element} onCardClick={props.onCardClick} onCardLike={handleCardLike} onCardDelete={handleCardDelete} key={element._id}/>)
            }

          </ul>
        </section>
      </main>
    </CurrentUserContext.Provider>
  );
}

export default Main;