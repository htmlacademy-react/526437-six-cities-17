import { useEffect, useState } from 'react';
import Loader from '../components/loader';
import OfferDetail from '../components/offer-detail';

import {
  fetchOffer,
  fetchComments,
  fetchNearByOffers,
  fetchFavoriteStatus,
  fetchFavoriteOffers,
} from '../store/actions/api-actions';

import {useLocation, useNavigate} from 'react-router-dom';
import { RootState, store } from '../store';
import { useSelector } from 'react-redux';
import {AppRouter, OFFER_COUNT} from '../constant';
import { authStatus } from '../store/user/selector';
import { TOffer } from '../types/offer-types';
export default function Offer() {

  const navigate = useNavigate();
  const pathItem = useLocation().pathname.split('/');
  const offerId = pathItem[pathItem.length - 1];
  const loaded = useSelector((state: RootState) => state.OFFER.loaded);
  const isAuth = useSelector((state: RootState) =>(authStatus(state)));

  const currentOffer = useSelector((state: RootState)=> state.OFFER.currentOffer);
  const [buttonActiveClass, setButtonActiveClass] = useState<boolean|undefined>(currentOffer.isFavorite);
  const [buttonDisable, setButtonDisable] = useState(false);
  const currentOfferReviews = useSelector((state: RootState)=> state.OFFER.currentOfferComments);
  const selectedCity = useSelector((state: RootState)=> state.OFFER.selectedCity);
  const nearByOffers = useSelector((state: RootState)=> state.OFFER.nearByOffers).slice(0,OFFER_COUNT);

  useSelector((state: RootState)=> state.OFFER.nearByOffers);

  const nearByOffersPoints = nearByOffers.map((item: TOffer)=> item.location);

  if(currentOffer && currentOffer.location){
    nearByOffersPoints.push(currentOffer.location);
  }
  const ratingWidth = 100 / 5 * Math.round(currentOffer.rating);

  const activeCard = currentOffer.location?.id;
  const images = currentOffer.images && currentOffer?.images.slice(0,6);
  const handleMouseMove = (value: string) => value;
  const handleChangeStatus = async(status: number) => {
    if(isAuth){
      setButtonDisable(true);
      const payload = {offerId, status: status};
      await store.dispatch(fetchFavoriteStatus(payload));
      await store.dispatch(fetchOffer({offerId: offerId}));
      await store.dispatch(fetchFavoriteOffers());
      setButtonDisable(false);
    }else {
      navigate({pathname: AppRouter.Login});
    }
  };

  useEffect(() => {
    store.dispatch(fetchComments({offerId: offerId}));
    store.dispatch(fetchNearByOffers({offerId: offerId}));
    store.dispatch(fetchOffer({offerId: offerId}));

  }, [offerId]);
  useEffect(()=> {
    setButtonActiveClass(currentOffer.isFavorite);
  }, [buttonDisable, currentOffer.isFavorite]);

  const offerDetailProps = {
    currentOffer,
    images,
    buttonDisable,
    buttonActiveClass,
    handleChangeStatus,
    ratingWidth,
    currentOfferReviews,
    isAuth,
    selectedCity,
    nearByOffersPoints,
    activeCard,
    handleMouseMove,
    nearByOffers
  };


  return (
    <div className="page">
      {!loaded ? <Loader/>
        : <OfferDetail {...offerDetailProps} />}
    </div>
  );
}
