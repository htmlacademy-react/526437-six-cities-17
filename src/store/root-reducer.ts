import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../constant';
import { userProcess } from './user/user-slice';
import { offerProcess } from './offer/offer-slice';


export const rootReducer = combineReducers({
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.Offer]: offerProcess.reducer,
});
