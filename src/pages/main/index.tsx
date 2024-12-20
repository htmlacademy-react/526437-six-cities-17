
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { RootState } from '../../types/rootStateTypes';
import CardsList from '../../components/CardsList';
import Map from '../../components/Map';
import CityList from '../../components/CityList';
import SortSelect from '../../components/SortSelect';
import { store } from '../../store';
import { SORTITEMS } from '../../constant';

export default function IndexPage() {

  const selectedCity = useSelector((state: RootState) => state.selectedCity);
  const stateOffers = useSelector((state: RootState) => state.offers);
  const offers = useSelector(()=> stateOffers.filter((y) => y.city.name === selectedCity.name));
  const offersPoints = useSelector(()=> offers.map((offer) => offer.location));

  const [activeCard, setActiveCard] = useState('');

  const [activeSortSelect, setActiveSortSelect] = useState({title: 'Popular', type: 'default'});

  const cityes = useSelector(()=>store.getState().cityes);


  const sortByType = (type: string)=> {
    switch(type) {
      case 'low':
        return offers.sort((a,b) => a.price - b.price);
      case 'hight':
        return offers.sort((a,b) => b.price - a.price);
      case 'top':
        return offers.sort((a,b) => b.rating - a.rating);
    }
    return offers;
  };

  const sortedOffers = useSelector(()=> sortByType(activeSortSelect.type));

  const handleMouseMove = (value: string) => {
    setActiveCard(value);
  };

  const handleSelect = (value: string) => {
    const item = SORTITEMS.find((y) => y.type === value);
    const defaultItem = {title: 'Popular', type: 'default'};
    setActiveSortSelect(item || defaultItem);
  };


  return (
    <div className="page page--gray page--main">
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities </h1>
        <div className="tabs">
          <section className="locations container">
            <SortSelect
              selectedItem={activeSortSelect}
              selectItems={SORTITEMS}
              onSelect={handleSelect}
            />
            <CityList cityes={cityes}/>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {offers.length}
                places to stay in
                {selectedCity.name}
              </b>
              <div className="cities__places-list places__list tabs__content" >
                <CardsList
                  cardType="cities"
                  offers={sortedOffers}
                  onMouseMove={handleMouseMove}
                />
              </div>
            </section>
            <div className="cities__right-section">
              <Map
                city={selectedCity}
                points={offersPoints}
                activeCard={activeCard}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
