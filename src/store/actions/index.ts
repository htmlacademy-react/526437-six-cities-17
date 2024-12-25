import { createAction } from '@reduxjs/toolkit';
import {TOffer} from '../../types/offerTypes';
import {TUser} from '../../types/userTypes';
import {TCity} from '../../types/cityTypes';

const Action = {
  SET_OFFERS: 'SET_OFFERS',
  SET_CITYES: 'SET_CITYES',
  SET_SELECTED_CITY: 'SET_SELECTED_CITY',
  GET_OFFERS: 'GET_OFFERS',
  CHECK_AUTH: 'CHECK_AUTH',
  SET_USER: 'SET_USER',
  SET_AUTH_STATUS: 'SET_AUTH_STATUS'
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

