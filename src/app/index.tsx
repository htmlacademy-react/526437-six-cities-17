import IndexPage from '../pages/main/index';
import Favorites from '../pages/favorites';
import Login from '../pages/login';
import Offer from '../pages/offer';
import Page404 from '../pages/404-page';
import {AppRouter} from '../constant';
import PrivateRoute from '../private-route';
import DefaultLayout from '../layouts/default-layout';
import { HelmetProvider } from 'react-helmet-async';
import {store} from '../store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import {fetchOffers, fetchCheckAuth, getFavoriteOffers} from '../store/actions/apiActions';
import { useSelector } from 'react-redux';
import { RootState } from '../types/rootStateTypes';


export default function App() {

  const authStatus = useSelector((state: RootState) => state.authorizationStatus || false) ;
  const loaded = useRef(false);
  useEffect(() => {
    store.dispatch(fetchOffers());
    store.dispatch(fetchCheckAuth());
    loaded.current = true;
  });

  useEffect(()=> {
    if(authStatus){
      store.dispatch(getFavoriteOffers());
    }
  }, [authStatus]);


  return (
    <BrowserRouter>
      <HelmetProvider>
        <Routes>
          <Route path={AppRouter.Root} element={<DefaultLayout/>}>
            <Route index element={<IndexPage />} />
            <Route path={AppRouter.Favorites}
              element={
                <PrivateRoute status={authStatus}>
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
