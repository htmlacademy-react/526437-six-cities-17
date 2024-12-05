
import { Link } from 'react-router-dom';
import {TCard} from '../types/cardTypes';


type TProps = {
  card: TCard;
  handleMouseMove: (id: string) => void;
}


export default function CardComponent(props: TProps) {
  const checkCurrency = (currency: string) => {
    switch(currency){
      case 'euro':
        return '€';
      case 'rb':
        return '₽';
    }
  };
  const {
    imageUrl,
    premium,
    price,
    currency,
    priceBy,
    favorite,
    rating,
    description,
    navToOffer,id,
  } = props.card;


  return (
    <article className="cities__card place-card" onMouseEnter={() => props.handleMouseMove(id)}
      id={id}
    >
      {premium ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div> : null}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`offer${navToOffer}`}>
          <img className="place-card__image" src={imageUrl} width="260" height="200" alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">{checkCurrency(currency)} {price}</b>
            <span className="place-card__price-text">&#47;&nbsp;{priceBy}</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            {favorite ?
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"/></svg> : <svg className="place-card__bookmark-icon" width="18" height="19"><use xlinkHref="#icon-bookmark"/></svg>}

            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            {/* rating by procents in next span from mocks or api */}
            <span style={{ width: `${rating}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`offer${navToOffer}`}>{description}</Link>
        </h2>
        <p className="place-card__type">Apartment</p>
      </div>
    </article>
  );
}
