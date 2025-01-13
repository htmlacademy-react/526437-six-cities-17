import { configureStore } from '@reduxjs/toolkit';
import { updateStore } from './reducers';
import createApi from '../services/api';

import { defaultState } from './state';
import {redirectMilleware} from '../middleware';


const api = createApi();


export const store = configureStore(
  {
    reducer: updateStore,
    preloadedState: defaultState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: api,
        },
      }).concat(redirectMilleware),
  }
);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
