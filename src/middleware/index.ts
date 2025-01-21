import { PayloadAction } from '@reduxjs/toolkit';
import { rootReducer } from '../store/rootReducer';
import {Middleware} from 'redux';
const url = window.location.hostname;

type Reducer = ReturnType<typeof rootReducer>
export const redirectMilleware: Middleware<unknown, Reducer> = () =>
  (next) => (action: PayloadAction<string>) => {
    if (action.type === 'OFFER/dispatchRedirect') {
      window.location.replace(`${url}${action.payload}`);
    }
    return next(action);
  };
