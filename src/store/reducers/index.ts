import {
  setOffersAction,
  setCityesAction,
  setSelectedCityAction,
  setUserInfo,
  setAuthStatus,
  setCurrentOffer,
  setCurrentOfferReviews,
  setNearByOffers,
  addCurrentOfferReview
} from '../actions';
import {createReducer} from '@reduxjs/toolkit';
import { defaultState } from '../state';

export const updateStore = createReducer(defaultState, (builder) => {
  builder
    .addCase(setOffersAction, (state, action) => {
      state.offers = [...action.payload];
    })
    .addCase(setCityesAction, (state, action) => {
      state.cityes = action.payload;
    })
    .addCase(setSelectedCityAction, (state, action) => {
      state.selectedCity = action.payload;
    })
    .addCase(setUserInfo, (state, action) => {
      state.userInfo = action.payload;
    })
    .addCase(setAuthStatus, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setCurrentOffer, (state, action) => {
      state.currentOffer = action.payload;
    })
    .addCase(setCurrentOfferReviews, (state, action) => {
      state.currentOfferComments = action.payload;
    })
    .addCase(setNearByOffers, (state, action) => {
      state.nearByOffers = action.payload;
    })
    .addCase(addCurrentOfferReview, (state, action) => {
      state.currentOfferComments = [...state.currentOfferComments, action.payload];
    });
});

