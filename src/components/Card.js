function Card(props) {

  function handleClick() {
    props.onCardClick(props.card);
  }  

  return (
    <li className="card">
      <img className="card__image" src={props.card.link} alt={props.card.name} onClick={handleClick}/>
      <div className="card__description">
        <h2 className="card__title">{props.card.name}</h2>
        <div className="card__likes">
          <button className="card__like" type="button" aria-label="Like"></button>
          <p className="card__count">{props.card.likes.length}</p>
        </div>
      </div>
      <button className="card__delete" type="button" aria-label="Delete"></button>
    </li>
  )
}

export default Card;