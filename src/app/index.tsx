import IndexPage from '../pages/main/index';
import Favorites from '../pages/favorites';
import Login from '../pages/login';
import Offer from '../pages/offer';
import Page404 from '../pages/404-page';
import {AppRouter, PrivateStatus} from '../constant';
import PrivateRoute from '../private-route';
import DefaultLayout from '../layouts/default-layout';
import { HelmetProvider } from 'react-helmet-async';
import {GetOffers} from '../api/cities';
import { TOffer } from '../types/offerTypes';
import {store} from '../store';
import {setOffersAction, setCityesAction} from '../store/actions';
import {convertCitiesById} from '../helpers/convertCitiesById';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { TCity } from '../types/cityTypes';


export default function App() {
  const setCities = (offers: TOffer[]) =>{
    const uniqueCityesNames = offers.map((offer) => offer.city.name)
      .filter((value, index, array) =>
        array.indexOf(value) === index);

    const resOffers = uniqueCityesNames.reduce((acc: TCity[], val) => {
      const item = offers.find((offer) => offer.city.name === val);
      if(item){
        acc.push(item.city);
      }
      return acc;
    }, []);

    return resOffers;
  };


  const getOffers = async(): Promise<void> => {
    const preOffers: TOffer[] = await GetOffers();
    const offers = convertCitiesById(preOffers);
    const cityes = setCities(offers);
    store.dispatch(setOffersAction(offers));
    store.dispatch(setCityesAction(cityes));
  };
  useEffect(()=> {
    getOffers();
  });


  return (
    <BrowserRouter>
      <HelmetProvider>
        <Routes>
          <Route path={AppRouter.Root} element={<DefaultLayout/>}>

            <Route index element={<IndexPage />} />
            <Route path={AppRouter.Favorites } element={
              <PrivateRoute status={PrivateStatus.Auth}>
                <Favorites/>
              </PrivateRoute>
            }
            >
            </Route>
            <Route path={AppRouter.Login } element={<Login/>}/>
            <Route path={AppRouter.Offer } element={<Offer/>}/>
            <Route path='*' element={<Page404/>}/>
          </Route>
        </Routes>
      </HelmetProvider>
    </BrowserRouter>
  );
}
