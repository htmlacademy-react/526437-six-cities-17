import Page404 from '../pages/404-page';
import { TOffer, TOfferDetails, TReviewOffer } from '../types/offer-types';
import FormComment from '../components/form-comment';
import ReviewList from '../components/review-list';
import Map from '../components/Map';
import CardsList from '../components/cards-list';
import { TCity, TLocation } from '../types/city-types';


type TProps = {
    currentOffer: TOfferDetails;
    images: string[];
    buttonDisable: boolean;
    buttonActiveClass: boolean;
    handleChangeStatus: (status: number) => void;
    ratingWidth: number;
    currentOfferReviews: TReviewOffer[];
    isAuth: boolean;
    selectedCity: TCity;
    nearByOffersPoints: TLocation[];
    activeCard: string;
    handleMouseMove: (e: string) => void;
    nearByOffers: TOffer[];
}
export default function OfferDetail(props: TProps) {
  const { currentOffer,
    images,
    buttonDisable,
    buttonActiveClass,
    handleChangeStatus,
    ratingWidth,
    currentOfferReviews,
    isAuth,
    selectedCity,
    nearByOffersPoints,
    activeCard,
    handleMouseMove,
    nearByOffers } = props;

  return (
    Object.keys(currentOffer).length ?

      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {images.map((z) => (
                <div key={z} className="offer__image-wrapper">
                  <img className="offer__image" src={z} alt="Photo studio" />
                </div>
              ))}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {currentOffer?.isPremium ?
                <div className="offer__mark">
                  <span>Premium</span>
                </div> :
                null}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {currentOffer.title}
                </h1>
                <button
                  disabled={buttonDisable}
                  className={
                    `offer__bookmark-button button ${buttonActiveClass ? 'offer__bookmark-button--active' : ''}`
                  }
                  type="button"
                  onClick={() => {
                    const status = Number(!currentOffer.isFavorite);
                    handleChangeStatus(status);
                  }}
                >

                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>

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
                  {currentOffer.bedrooms} bedrooms
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
                  <div className={`offer__avatar-wrapper
                        ${currentOffer.host.isPro ? 'offer__avatar-wrapper--pro' : ''}
                        user__avatar-wrapper`}
                  >
                    <img className="offer__avatar user__avatar" src={currentOffer.host?.avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="offer__user-name">
                    {currentOffer.host.name}
                  </span>
                  {currentOffer.host.isPro ?
                    <span className="offer__user-status">
                                            Pro
                    </span> : null}
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
                <ReviewList reviewList={currentOfferReviews} />
                {isAuth && <FormComment />}
              </section>
            </div>
          </div>
          <section className="offer__map map">
            <Map city={selectedCity} points={nearByOffersPoints} activeCard={activeCard} />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <CardsList offers={nearByOffers} onMouseMove={handleMouseMove} cardType='near-places' />
            </div>
          </section>
        </div>
      </main>
      : <Page404 />
  );
}
