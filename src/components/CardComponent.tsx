
import { Link } from 'react-router-dom';
import { TOffer} from '../types/cardTypes';


type TProps = {
  card: TOffer;
  onMouseMove: (id: string) => void;
}


export default function CardComponent(props: TProps) {

  const {
    previewImage,
    isPremium,
    price,
    isFavorite,
    rating,
    title,
    id,
  } = props.card;

  const ratingWidth = 100 / 5 * rating;


  return (
    <article className="cities__card place-card" onMouseEnter={() => props.onMouseMove(id)}
      id={id}
    >
      {isPremium ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div> : null}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`offer/${id}`}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€ {price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            {isFavorite ?
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"/></svg> : <svg className="place-card__bookmark-icon" width="18" height="19"><use xlinkHref="#icon-bookmark"/></svg>}

            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            {/* rating by procents in next span from mocks or api */}
            <span style={{ width: `${ratingWidth}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">Apartment</p>
      </div>
    </article>
  );
}
