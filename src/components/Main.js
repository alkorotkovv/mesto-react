import profileImage from '../images/image.jpg';

function Main() {
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__main">
          <div className="profile__avatar">
            <img className="profile__image" src={profileImage} alt="аватар"/>
          </div>
          <div className="profile__info">
            <div className="profile__name-line">
              <h1 className="profile__title">Жак-Ив Кусто</h1>
              <button className="profile__edit-button" type="button" aria-label="Edit"></button>
            </div>
            <p className="profile__subtitle">Исследователь океана</p>
          </div>
        </div>
        <button className="profile__add-button" type="button" aria-label="Add"></button>
      </section>
      <section className="elements">
        <ul className="elements__cards">
        </ul>
      </section>
    </main>
  );
}

export default Main;