import React, {useState} from 'react';
import profileImage from '../images/image.jpg';
import api from '../utils/Api.js';
import Card from './Card.js';
import CurrentUserContext from '../context/CurrentUserContext';

function Main(props) {

  const currentUser = React.useContext(CurrentUserContext);

  //const [userName, setUserName] = useState("Жак Ив Кусто");
  //const [userDescription, setUserDescription] = useState("Исследователь");
  //const [userAvatar, setUserAvatar] = useState(profileImage);
  const [cards, setCards] = useState([]);

  React.useEffect(() => {
      Promise.all([api.getInitialCards()])
        .then(([initialCards]) => {
          //setUserName(userInfo.name);
          //setUserDescription(userInfo.about);
          //setUserAvatar(userInfo.avatar);
          setCards(initialCards);
        })
        .catch((err) => {
          console.log(err);
        })

  }, []);

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
                <Card card={element} onCardClick={props.onCardClick} key={element._id}/>)
            }

          </ul>
        </section>
      </main>
    </CurrentUserContext.Provider>
  );
}

export default Main;