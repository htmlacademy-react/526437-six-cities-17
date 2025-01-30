import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './root-reducer';
import createApi from '../services/api';


const api = createApi();


export const store = configureStore(
  {
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: api,
        },
      })
  }
);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
