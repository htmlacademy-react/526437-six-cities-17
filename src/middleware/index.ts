import { PayloadAction } from '@reduxjs/toolkit';
import { rootReducer } from '../store/root-reducer';
import {Middleware} from 'redux';
import { AppRouter } from '../constant';

type Reducer = ReturnType<typeof rootReducer>
export const redirectMilleware: Middleware<unknown, Reducer> = () =>
  (next) => (action: PayloadAction<string>) => {
    if(action.type === 'GET_OFFER/rejected'){

      window.location.replace(AppRouter.NotFound);
    }
    return next(action);
  };
