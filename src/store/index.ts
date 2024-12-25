import { configureStore } from '@reduxjs/toolkit';
import { updateStore, offersState } from './reducers';
import createApi from '../services/api';
// import {testMiddleWare} from '../middleware';


const api = createApi();

export const store = configureStore(
  {
    reducer: updateStore,
    preloadedState: offersState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: api,
        },
      })
    // .concat(testMiddleWare),
  }
);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
