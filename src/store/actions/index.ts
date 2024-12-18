import { createAction } from '@reduxjs/toolkit';
import {TOffer} from '../../types/offerTypes';

const Action = {
  SET_OFFERS: 'SET_OFFERS',
  SET_CITYES: 'SET_CITYES',
  SET_SELECTED_CITY: 'SET_SELECTED_CITY'
};

export const setOffersAction = createAction(Action.SET_OFFERS, (value: TOffer[]) => ({
  payload: value
}));
export const setCityesAction = createAction(Action.SET_CITYES, (value: string[]) => ({
  payload: value
}));
export const setSelectedCityAction = createAction(Action.SET_SELECTED_CITY, (value: string) => ({
  payload: value
}));

