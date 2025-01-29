import { useSelector, useDispatch } from 'react-redux';
import { TOffer, TFavorites } from '../../types/offer-types';
import { Link } from 'react-router-dom';
import { AppRouter } from '../../constant';
import {dispatchSelectedCity} from '../../store/offerProcess';
import { store } from '../../store';
import mapCityes from '../../helpers/map-cityes';

import { useMemo } from 'react';
import CardsList from '../../components/cards-list';


export default function Favorites() {
  const dispatch = useDispatch();
  const favoriteOffers: TOffer[] = useSelector(()=> store.getState().OFFER.favoriteOffers);
  const handleMouseMove = (value: string) => value;


  const sortedCardByCity:TFavorites = useMemo(()=> mapCityes(favoriteOffers), [favoriteOffers]);

  return (
    <div className="page">
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {
                Object.keys(sortedCardByCity).map((item) => (
                  <li className="favorites__locations-items" key={item}>
                    <div className="favorites__locations locations locations--current">
                      <div className="locations__item">
                        <Link className="locations__item-link"
                          onClick={()=> dispatch(dispatchSelectedCity(sortedCardByCity[item][0].city))}
                          to={AppRouter.Root}
                        >
                          <span>{item}</span>
                        </Link>
                      </div>
                    </div>

                    <div className="favorites__places">
                      <CardsList onMouseMove={handleMouseMove} offers={sortedCardByCity[item]} cardType='favorites'/>
                    </div>
                  </li>
                ))
              }
            </ul>
            {favoriteOffers.length === 0 &&
              <div className="page page--favorites-empty">
                <main className="page__main page__main--favorites page__main--favorites-empty">
                  <div className="page__favorites-container container">
                    <section className="favorites favorites--empty">
                      <h1 className="visually-hidden">Favorites (empty)</h1>
                      <div className="favorites__status-wrapper">
                        <b className="favorites__status">Nothing yet saved.</b>
                        <p className="favorites__status-description">Save properties to narrow down search or plan your future trips.</p>
                      </div>
                    </section>
                  </div>
                </main>
              </div> }
          </section>
        </div>
      </main>

    </div>
  );
}
