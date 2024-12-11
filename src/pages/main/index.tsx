
import { useState } from 'react';
import { TOffer } from '../../types/offerTypes';
import CardsList from '../../components/CardsList';
import Map from '../../components/Map';
import {CITY, points} from '../../mocks/city';

export default function IndexPage(props: {offers: TOffer[]}) {

  const {offers} = props;

  const [activeCard, setActiveCard] = useState('');
  const handleMouseMove = (value: string) => {
    setActiveCard(value);
  };

  return (
    <div className="page page--gray page--main">
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities </h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Paris </span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Cologne</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Brussels</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item tabs__item--active">
                  <span>Amsterdam</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Hamburg</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Dusseldorf</span>
                </a>
              </li>
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">312 places to stay in Amsterdam</b>
              <div className="cities__places-list places__list tabs__content" >
                <CardsList cardType="cities" offers={offers} onMouseMove={handleMouseMove}/>
              </div>
            </section>
            <div className="cities__right-section">
              <Map city={CITY} points={points} activeCard={activeCard}/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
