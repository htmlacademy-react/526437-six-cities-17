import { PayloadAction } from '@reduxjs/toolkit';
// import { createBrowserHistory } from 'history';
import {updateStore} from '../store/reducers';
import {Middleware} from 'redux';
// const history = createBrowserHistory();
const url = window.location.hostname;

type Reducer = ReturnType<typeof updateStore>
export const redirectMilleware: Middleware<unknown, Reducer> = () =>
  (next) => (action: PayloadAction<string>) => {
    if (action.type === 'REDIRECT') {
      // history.replace(action.payload);
      window.location.replace(`${url}${action.payload}`);
    }
    return next(action);
  };
