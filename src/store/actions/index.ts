import { createAction } from '@reduxjs/toolkit';
import {TOffer,TOfferDetails, TReviewOffer} from '../../types/offerTypes';
import {TUser} from '../../types/userTypes';
import {TCity} from '../../types/cityTypes';

const Action = {
  SET_OFFERS: 'SET_OFFERS',
  SET_CITYES: 'SET_CITYES',
  SET_SELECTED_CITY: 'SET_SELECTED_CITY',
  GET_OFFERS: 'GET_OFFERS',
  CHECK_AUTH: 'CHECK_AUTH',
  SET_USER: 'SET_USER',
  SET_AUTH_STATUS: 'SET_AUTH_STATUS',
  SET_CURRENT_OFFER: 'SET_CURRENT_OFFER',
  SET_CURRENT_OFFER_REVIEWS: 'SET_CURRENT_OFFER_REVIEWS',
  SET_NEAR_BY_OFFERS: 'SET_NEAR_BY_OFFERS',
  REDIRECT: 'REDIRECT',
  ADD_COMMENT: 'ADD_COMMENT',
  ADD_FAVORITE_OFFERS: 'ADD_FAVORITE_OFFERS',
  SET_OFFER_TO_FAVORITE: 'SET_OFFER_TO_FAVORITE',
  SIGN_OUT: 'SIGN_OUT'
};

export const setOffersAction = createAction(Action.SET_OFFERS, (value: TOffer[]) => ({
  payload: value
}));
export const setCityesAction = createAction(Action.SET_CITYES, (value: TCity[]) => ({
  payload: value
}));
export const setSelectedCityAction = createAction(Action.SET_SELECTED_CITY, (value: TCity) => ({
  payload: value
}));
export const setUserInfo = createAction(Action.SET_USER, (value: TUser) => ({
  payload: value
}));
export const setAuthStatus = createAction(Action.SET_AUTH_STATUS, (value: boolean) => ({
  payload: value
}));
export const setCurrentOffer = createAction(Action.SET_CURRENT_OFFER, (value: TOfferDetails) => ({
  payload: value
}));
export const setCurrentOfferReviews = createAction(Action.SET_CURRENT_OFFER_REVIEWS, (value: TReviewOffer[]) => ({
  payload: value
}));
export const setNearByOffers = createAction(Action.SET_NEAR_BY_OFFERS, (value: TOffer[]) => ({
  payload: value
}));
export const redirectToRoute = createAction(Action.REDIRECT, (value: string) => ({
  payload: value
}));
export const addCurrentOfferReview = createAction(Action.ADD_COMMENT, (value: TReviewOffer) => ({
  payload: value
}));
export const setFavoriteOffers = createAction(Action.ADD_FAVORITE_OFFERS, (value: TOffer[]) => ({
  payload: value
}));
export const setOfferToFavorite = createAction(Action.SET_OFFER_TO_FAVORITE, (value: string) => ({
  payload: value
}));
// export const setSignOut = createAction(Action.SIGN_OUT);

