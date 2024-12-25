import { createAction } from '@reduxjs/toolkit';
import {TOffer} from '../../types/offerTypes';
import {TCity} from '../../types/cityTypes';

const Action = {
  SET_OFFERS: 'SET_OFFERS',
  SET_CITYES: 'SET_CITYES',
  SET_SELECTED_CITY: 'SET_SELECTED_CITY',
  GET_OFFERS: 'GET_OFFERS'
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

