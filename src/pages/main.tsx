
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { RootState } from '../types/root-state-types.tsx';
import Map from '../components/map.tsx';
import CityList from '../components/city-list.tsx';
import Loader from '../components/loader.tsx';
import SortSelect from '../components/sort-select.tsx';
import { store } from '../store/index.ts';
import { SORTITEMS } from '../constant.ts';
import PlacesList from '../components/places-list.tsx';

export default function IndexPage() {

  const loaded = useSelector((state: RootState)=> state.OFFER.loaded);

  const selectedCity = useSelector((state: RootState) => state.OFFER.selectedCity);
  const stateOffers = useSelector((state: RootState) => state.OFFER.offers);
  const offers = stateOffers.filter((y) => y.city.name === selectedCity.name);
  const offersPoints = offers.map((offer) => offer.location);

  const [activeCard, setActiveCard] = useState('');

  const [activeSortSelect, setActiveSortSelect] = useState({title: 'Popular', type: 'default'});

  const cityes = useSelector(()=>store.getState().OFFER.cityes);


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

            <CityList cityes={cityes}/>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">


            <section className="cities__places places">
              <SortSelect
                selectedItem={activeSortSelect}
                selectItems={SORTITEMS}
                onSelect={handleSelect}
              />
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {`${offers.length || undefined} ${offers.length >= 2 ? 'places' : 'place'} to stay in ${selectedCity.name}`}
              </b>

              {!loaded ?
                <Loader/>
                :
                <PlacesList cardType="cities"
                  sortedOffers={sortedOffers}
                  handleMouseMove={handleMouseMove}
                />}
            </section>

            {offers && offers.length &&
            <div className="cities__right-section">
              <Map
                city={selectedCity}
                points={offersPoints}
                activeCard={activeCard}
              />
            </div>}
          </div>
        </div>
      </main>
    </div>
  );
}

