
import { Link, useNavigate } from 'react-router-dom';
import { TOffer} from '../types/offer-types';
import CSS from 'csstype';
import {fetchFavoriteStatus, fetchFavoriteOffers} from '../store/actions/api-actions';
import {dispatchNearByOfferToFavorite} from '../store/offer/offer-slice';
import { authStatus } from '../store/user/selector';
import { RootState, store } from '../store';
import { useSelector } from 'react-redux';
import { AppRouter } from '../constant';
import classNames from 'classnames';

type TProps = {
  card: TOffer;
  cardType: string;
  onMouseMove: (id: string) => void;
}


export default function CardComponent(props: TProps) {
  const placeCardStyle: CSS.Properties = {
    position: 'relative'
  };
  const isAuth = useSelector((state: RootState) =>(authStatus(state)));
  const navigate = useNavigate();
  const {
    previewImage,
    isPremium,
    price,
    isFavorite,
    rating,
    title,
    id,
    type
  } = props.card;
  const {cardType} = props;

  const handleChangeStatus = async(status: number) => {
    if(isAuth){
      const payload = {offerId: id, status: status};
      await store.dispatch(fetchFavoriteStatus(payload));
      store.dispatch(dispatchNearByOfferToFavorite({id}));
      await store.dispatch(fetchFavoriteOffers());
    }else {
      navigate({pathname: AppRouter.Login});
    }
  };
  const ratingWidth = 100 / 5 * Math.round(rating);

  const buttonFavoriteClasses = classNames({
    'place-card__bookmark-button': true,
    'button': true,
    'place-card__bookmark-button--active':isFavorite
  });


  return (
    <article style={placeCardStyle}
      className={`${cardType}__card place-card`}
      onMouseEnter={() => props.onMouseMove(id)}
      onMouseLeave={() => props.onMouseMove('0')}
      id={id}
    >
      {isPremium ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div> : null}
      <div className={`${cardType}__image-wrapper ${cardType}-card__image-wrapper`}>
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image" />
        </Link>
      </div>
      <div className={`${cardType}-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={buttonFavoriteClasses} type="button" >
            {isFavorite ?
              <svg onClick={() => {
                void handleChangeStatus(0);
              }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"
              ><path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"/>
              </svg>
              :
              <svg onClick={ () => {
                void handleChangeStatus(1);
              }} className="place-card__bookmark-icon" width="18" height="19"
              ><use xlinkHref="#icon-bookmark"/>
              </svg>}

            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${ratingWidth}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

