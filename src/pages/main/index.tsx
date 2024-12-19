
import { useState } from 'react';
import { RootState } from '../../types/rootStateTypes';
import CardsList from '../../components/CardsList';
import Map from '../../components/Map';
import CityList from '../../components/CityList';
import { store } from '../../store';
import { useSelector } from 'react-redux';
import { TCity } from '../../types/cityTypes';

export default function IndexPage() {

  const selectedCity: TCity = useSelector((state: RootState) => state.selectedCity);

  const x = useSelector((state: RootState) => state.offers);

  const offers = x.filter((y) => y.city.name === selectedCity.name);
  const offersPoints = offers.map((offer) => offer.location);
  const cityes = store.getState().cityes;

  const [activeCard, setActiveCard] = useState('');
  const handleMouseMove = (value: string) => {
    setActiveCard(value);
  };

  const activeCity = useSelector((state: RootState) => state.selectedCity);

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
              <b className="places__found">{offers.length} places to stay in {selectedCity.name}</b>
              <div className="cities__places-list places__list tabs__content" >
                <CardsList cardType="cities" offers={offers} onMouseMove={handleMouseMove}/>
              </div>
            </section>
            <div className="cities__right-section">
              <Map city={activeCity} points={offersPoints} activeCard={activeCard}/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
