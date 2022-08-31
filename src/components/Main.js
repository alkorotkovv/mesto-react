import React from 'react';
import profileImage from '../images/image.jpg';
import api from '../utils/Api.js';
import Card from './Card.js';

/*
{ 
  cards.map(element => 
    <li className="card" key={element._id}>
      <img className="card__image" src={element.link} alt={element.name}/>
      <div className="card__description">
        <h2 className="card__title">{element.name}</h2>
        <div className="card__likes">
          <button className="card__like" type="button" aria-label="Like"></button>
          <p className="card__count">{element.likes.length}</p>
        </div>
      </div>
      <button className="card__delete" type="button" aria-label="Delete"></button>
    </li>)
}
*/

function Main(props) {

  const [userName, setUserName] = React.useState("Жак Ив Кусто");
  const [userDescription, setUserDescription] = React.useState("Исследователь");
  const [userAvatar, setUserAvatar] = React.useState(profileImage);
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
      Promise.all([api.getUserInfo(), api.getInitialCards()])
        .then(([userInfo, initialCards]) => {
          setUserName(userInfo.name);
          setUserDescription(userInfo.about);
          setUserAvatar(userInfo.avatar);
          setCards(initialCards);
        })
        .catch((err) => {
          console.log(err);
        })

  }, []);


  return (
    <main className="content">
      <section className="profile">
        <div className="profile__main">
          <div className="profile__avatar" onClick={props.onEditAvatar}>
            <img className="profile__image" src={userAvatar} alt="аватар" />
          </div>
          <div className="profile__info">
            <div className="profile__name-line">
              <h1 className="profile__title">{userName}</h1>
              <button className="profile__edit-button" type="button" aria-label="Edit" onClick={props.onEditProfile}></button>
            </div>
            <p className="profile__subtitle">{userDescription}</p>
          </div>
        </div>
        <button className="profile__add-button" type="button" aria-label="Add" onClick={props.onAddPlace}></button>
      </section>
      <section className="elements">
        <ul className="elements__cards">
          
          
          { 
            cards.map(element => 
              <Card card={element} key={element._id}/>)
          }

        </ul>
      </section>
    </main>
  );
}

export default Main;