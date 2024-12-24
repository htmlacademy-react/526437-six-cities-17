import IndexPage from '../pages/main/index';
import Favorites from '../pages/favorites';
import Login from '../pages/login';
import Offer from '../pages/offer';
import Page404 from '../pages/404-page';
import {AppRouter, PrivateStatus} from '../constant';
import PrivateRoute from '../private-route';
import DefaultLayout from '../layouts/default-layout';
import { HelmetProvider } from 'react-helmet-async';
import {store} from '../store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import {fetchOffers} from '../store/actions/apiActions';


export default function App() {
  useEffect(()=> {
    store.dispatch(fetchOffers());
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
