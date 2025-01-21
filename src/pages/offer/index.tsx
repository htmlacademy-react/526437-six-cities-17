import { useEffect, useRef } from 'react';
import FormComment from '../../components/FormComment';
import ReviewList from '../../components/ReviewList';
import Map from '../../components/Map';
import CardsList from '../../components/CardsList';
import {fetchOffer,
  fetchComments,
  fetchNearByOffers,
  fetchFavoriteStatus,
  fetchFavoriteOffers

} from '../../store/actions/apiActions';
import {dispatchRedirect} from '../../store/offerProcess';
import {useLocation} from 'react-router-dom';
import { RootState, store } from '../../store';
import { useSelector } from 'react-redux';
import {OFFER_COUNT} from '../../constant';
export default function Offer() {

  const pathItem = useLocation().pathname.split('/');
  const offerId = pathItem[pathItem.length - 1];
  const loaded = useRef(false);


  const currentOffer = useSelector((state: RootState)=> state.OFFER.currentOffer);
  const currentOfferReviews = useSelector((state: RootState)=> state.OFFER.currentOfferComments);
  const selectedCity = useSelector((state: RootState)=> state.OFFER.selectedCity);
  const isAuth = useSelector((state: RootState)=> state.USER.authorizationStatus);
  const nearByOffers = useSelector((state: RootState)=> state.OFFER.nearByOffers).slice(0,OFFER_COUNT);

  useSelector((state: RootState)=> state.OFFER.nearByOffers).slice(0,OFFER_COUNT);

  const nearByOffersPoints = nearByOffers.map((item)=> item.location);

  if(currentOffer && currentOffer.location){
    nearByOffersPoints.push(currentOffer.location);
  }

  const ratingWidth = 100 / 5 * currentOffer.rating;

  const activeCard = currentOffer.location?.id;

  const handleMouseMove = (value: string) => value;
  const handleChangeStatus = async(status: number) => {
    const payload = {offerId, status: status};
    await store.dispatch(fetchFavoriteStatus(payload));
    await store.dispatch(fetchOffer({offerId: offerId}));
    await store.dispatch(fetchFavoriteOffers());
  };

  useEffect(() => {
    store.dispatch(fetchComments({offerId: offerId}));
    store.dispatch(fetchNearByOffers({offerId: offerId}));
    try{
      store.dispatch(fetchOffer({offerId: offerId}));
    }catch(e){
      store.dispatch(dispatchRedirect());
    }

    loaded.current = true;
  }, [offerId]);
  return (
    <div className="page">
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {currentOffer.images && currentOffer.images.map((z) => (
                <div key={z}className="offer__image-wrapper">
                  <img className="offer__image" src={z} alt="Photo studio" />
                </div>))}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {currentOffer.isFavorite ?
                <div className="offer__mark">
                  <span>Premium</span>
                </div> :
                null}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {currentOffer.title}
                </h1>
                <button className="offer__bookmark-button button" type="button">
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
                <button className="offer__bookmark-button button" type="button">
                  {currentOffer.isFavorite ?

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"
                      onClick={() => {
                        void handleChangeStatus(0);
                      }}
                    >
                      <path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"/>
                    </svg>
                    :
                    <svg className="offer__bookmark-icon" width="31" height="33"
                      onClick={() => {
                        void handleChangeStatus(1);
                      }}
                    >
                      <use xlinkHref="#icon-bookmark"></use>
                    </svg>}

                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{ width: `${ratingWidth}%` }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{currentOffer.rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {currentOffer.type}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {currentOffer.bedrooms}
                </li>
                <li className="offer__feature offer__feature--adults">
                                    Max {currentOffer.maxAdults} adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{currentOffer.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {currentOffer.goods && currentOffer.goods.map((c) => (
                    <li className="offer__inside-item" key={c}>
                      {c}
                    </li>))}

                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="offer__avatar user__avatar" src={currentOffer.host?.avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="offer__user-name">
                    {currentOffer?.host?.name}
                  </span>
                  <span className="offer__user-status">
                    {currentOffer?.host?.isPro ? 'Pro' : null}
                  </span>
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    {currentOffer.description}
                  </p>
                </div>
              </div>
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">Reviews &middot;
                  <span className="reviews__amount">{currentOfferReviews.length}</span>
                </h2>
                <ReviewList reviewList={currentOfferReviews}/>
                {isAuth && <FormComment offerId={offerId}/>}
              </section>
            </div>
          </div>
          <section className="offer__map map">
            <Map city={selectedCity} points={nearByOffersPoints} activeCard={activeCard}/>
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <CardsList offers={nearByOffers} onMouseMove={handleMouseMove} cardType='near-places'/>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
