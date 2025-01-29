import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch } from '..';
import { AxiosInstance } from 'axios';
import { TOffer, TOfferDetails,TReviewOffer } from '../../types/offer-types';
import { TUser } from '../../types/user-types';

const createGetApiRequest = <T, P=undefined, A=undefined>(url: string, payload?: P) =>
  async (_args: A, { extra: api }: { extra: AxiosInstance }) => {
    const response = await api.get<T>(url, payload && payload);
    return response.data;
  };

const createPostApiRequest = <T, P>(url: string, payload?: P) =>
  async (_args: P, { extra: api }: { extra: AxiosInstance }) => {
    const response = await api.post<T>(url, payload && payload);
    return response.data;
  };

const createDeleteApiRequest = <P>(url: string) =>
  async(_args: P, { extra: api }: { extra: AxiosInstance }) => {
    await api.delete(url);

  };

export const fetchOffers = createAsyncThunk<TOffer[], undefined, { extra: AxiosInstance }>(
  'FETCH_OFFERS',
  createGetApiRequest<TOffer[]>(
    '/six-cities/offers')
);
export const fetchFavoriteOffers = createAsyncThunk<TOffer[], undefined, { extra: AxiosInstance }>(
  'FETCH_FAVORITE_OFFERS',
  createGetApiRequest<TOffer[]>(
    '/six-cities/favorite')
);
export const fetchCheckAuth = createAsyncThunk<TUser, undefined, { extra: AxiosInstance }>(
  'CHECK_AUTH',
  createGetApiRequest<TUser>(
    '/six-cities/login')
);

export const fetchLogin = createAsyncThunk<TUser, { email: string; password: string }, { extra: AxiosInstance }>(
  'POST_LOGIN',
  (_args, thunkAPI) => createPostApiRequest<TUser, { email: string; password: string }>('/six-cities/login', _args)(_args, thunkAPI)
);

export const fetchOffer = createAsyncThunk<TOfferDetails, { offerId: string }, { dispatch: AppDispatch; extra: AxiosInstance }>(
  'GET_OFFER',
  (_args, thunkAPI) => createGetApiRequest<TOfferDetails, undefined, { offerId: string }>(`/six-cities/offers/${_args.offerId}`)(_args, thunkAPI)
);


export const fetchComments = createAsyncThunk<TReviewOffer[], { offerId: string }, { extra: AxiosInstance }>(
  'GET_OFFER_REVIEWS',
  (_args, thunkAPI) => createGetApiRequest<TReviewOffer[], undefined, { offerId: string }>(`/six-cities/comments/${_args.offerId}`)(_args, thunkAPI)
);

export const fetchNearByOffers = createAsyncThunk<TOffer[], { offerId: string }, { extra: AxiosInstance }>(
  'GET_NEAR_BY_OFFERS',
  (_args, thunkAPI) => createGetApiRequest<TOffer[], undefined, { offerId: string }>(`/six-cities/offers/${_args.offerId}/nearby`)(_args, thunkAPI)
);

export const postComment = createAsyncThunk<TReviewOffer, { offerId: string; comment: string; rating: number }, { extra: AxiosInstance }>(
  'POST_COMMENT',
  (_args, thunkAPI) => createPostApiRequest<TReviewOffer, { comment: string; rating: number }>(
    `/six-cities/comments/${_args.offerId}`, { comment: _args.comment, rating: _args.rating }
  )(_args, thunkAPI)
);


export const fetchFavoriteStatus = createAsyncThunk<TOffer, { offerId: string; status: number }, { extra: AxiosInstance }>(
  'UPDATE_FAVORITE_STATUS',
  (_args, thunkAPI) => createPostApiRequest<TOffer, { status: number }>(
    `/six-cities/favorite/${_args.offerId}/${_args.status}`
  )(_args, thunkAPI)
);

export const fetchSignOutAction = createAsyncThunk<void, undefined, { extra: AxiosInstance }>(
  'SIGN_OUT',
  createDeleteApiRequest<void>('/six-cities/logout')
);

