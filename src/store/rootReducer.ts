import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../constant';
import { userProcess } from './userProcess';
import { offerProcess } from './offerProcess';


export const rootReducer = combineReducers({
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.Offer]: offerProcess.reducer,
});
