import { useState } from 'react';
import FormComment from '../../components/FormComment';
import ReviewList from '../../components/ReviewList';
import Map from '../../components/Map';
import CardsList from '../../components/CardsList';
import {mockOfferDetail, mockReviewList,mockOffersNearBy} from '../../mocks/offers';
import {CITY, nearByPoints} from '../../mocks/city';
export default function Offer() {
  const ratingWidth = 100 / 5 * mockOfferDetail.rating;


  const [activeCard, setActiveCard] = useState('');
  const handleMouseMove = (value: string) => {
    setActiveCard(value);
  };
  return (
    <div className="page">


      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {mockOfferDetail.images.map((z) => (
                <div key={z}className="offer__image-wrapper">
                  <img className="offer__image" src={z} alt="Photo studio" />
                </div>))}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {mockOfferDetail.isFavorite ?
                <div className="offer__mark">
                  <span>Premium</span>
                </div> :
                null}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {mockOfferDetail.title}
                </h1>
                <button className="offer__bookmark-button button" type="button">
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
                <button className="offer__bookmark-button button" type="button">
                  {mockOfferDetail.isFavorite ?
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                      <path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"/>
                    </svg>
                    :
                    <svg className="offer__bookmark-icon" width="31" height="33">
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
                <span className="offer__rating-value rating__value">4.8</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {mockOfferDetail.type}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {mockOfferDetail.bedrooms}
                </li>
                <li className="offer__feature offer__feature--adults">
                                    Max {mockOfferDetail.maxAdults} adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{mockOfferDetail.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {mockOfferDetail.goods.map((c) => (
                    <li className="offer__inside-item" key={c}>
                      {c}
                    </li>))}

                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="offer__avatar user__avatar" src="img/avatar-angelina.jpg" width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="offer__user-name">
                    {mockOfferDetail.host.name}
                  </span>
                  <span className="offer__user-status">
                    {mockOfferDetail.host.isPro ? 'Pro' : null}
                  </span>
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    {mockOfferDetail.description}
                  </p>
                </div>
              </div>
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">Reviews &middot;
                  <span className="reviews__amount">{mockReviewList.length}</span>
                </h2>
                <ReviewList reviewList={mockReviewList}/>
                <FormComment/>
              </section>
            </div>
          </div>
          <section className="offer__map map">
            <Map city={CITY} points={nearByPoints} activeCard={activeCard}/>
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <CardsList offers={mockOffersNearBy} onMouseMove={handleMouseMove} cardType='near-places'/>

            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
