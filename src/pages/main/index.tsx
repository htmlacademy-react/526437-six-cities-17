
import { useState } from 'react';
import { RootState } from '../../types/rootStateTypes';
import CardsList from '../../components/CardsList';
import Map from '../../components/Map';
import {CITY, points} from '../../mocks/city';
import CityList from '../../components/CityList';
import { store } from '../../store';
import { useSelector } from 'react-redux';

export default function IndexPage() {

  const selectedCity: string = useSelector((state: RootState) => state.selectedCity);

  const x = useSelector((state: RootState) => state.offers);

  const offers = x.filter((y) => y.city.name === selectedCity);
  const cityes = store.getState().cityes;

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
            <CityList cityes={cityes}/>
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
