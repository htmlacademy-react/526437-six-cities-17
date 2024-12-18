import {
  setOffersAction,
  setCityesAction,
  setSelectedCityAction
} from '../actions';
import {createReducer} from '@reduxjs/toolkit';
import {TOffer} from '../../types/offerTypes';
import {TCity} from '../../types/cityTypes';

interface State {
    offers: TOffer[];
    selectedCity: TCity | string;
    cityes: string[];
}

export const offersState:State = {
  offers: [],
  selectedCity: 'Paris',
  cityes: []
};

export const updateStore = createReducer(offersState, (builder) => {
  builder
    .addCase(setOffersAction, (state, action) => {
      state.offers = [...action.payload];
    })
    .addCase(setCityesAction, (state, action) => {
      state.cityes = action.payload;
    })
    .addCase(setSelectedCityAction, (state, action) => {
      state.selectedCity = action.payload;
    });

});

