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
import { useEffect } from 'react';
import {fetchOffers, fetchCheckAuth, fetchFavoriteOffers} from '../store/actions/api-actions';
// import {rootReducer} from '../store/rootReducer';
import { useSelector } from 'react-redux';
import { RootState } from '../types/root-state-types';
import { authStatus } from '../store/userProcess/selector';


export default function App() {
  const isAuth = useSelector((state: RootState) =>(authStatus(state)));
  useEffect(() => {
    store.dispatch(fetchOffers());
    store.dispatch(fetchCheckAuth());
  });

  useEffect(()=> {
    if(isAuth){
      store.dispatch(fetchFavoriteOffers());
    }
  }, [isAuth]);


  return (
    <BrowserRouter>
      <HelmetProvider>
        <Routes>
          <Route path={AppRouter.Root} element={<DefaultLayout/>}>
            <Route index element={<IndexPage />} />
            <Route path={AppRouter.Favorites}
              element={
                <PrivateRoute status={isAuth}>
                  <Favorites/>
                </PrivateRoute>
              }
            >
            </Route>
            <Route path={AppRouter.Login } element={<Login/>}/>
            <Route path={AppRouter.Offer } element={<Offer/>}/>
            <Route path='*' element={<Page404/>}/>
            <Route path={AppRouter.NotFound} element={<Page404/>}/>
          </Route>
        </Routes>
      </HelmetProvider>
    </BrowserRouter>
  );
}
