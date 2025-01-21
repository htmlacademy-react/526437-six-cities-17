import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch } from '..';
import { AxiosInstance } from 'axios';
import { TOffer, TOfferDetails,TReviewOffer } from '../../types/offerTypes';
import { TUser } from '../../types/userTypes';


export const fetchOffers = createAsyncThunk<TOffer[], undefined,
{
    extra: AxiosInstance;
}>('FETCH_OFFERS',
  async (_args, { extra: api}) => {
    const {data} = await api.get<TOffer[]>('/six-cities/offers');
    return data;
  }
);

export const fetchFavoriteOffers = createAsyncThunk<TOffer[], undefined,
{
  extra: AxiosInstance;
}>('FETCH_FAVORITES',
  async (_args, { extra: api}) => {
    const {data} = await api.get<TOffer[]>('/six-cities/favorite');
    return data;
  }
);

export const fetchCheckAuth = createAsyncThunk<TUser, undefined,
{
  dispatch: AppDispatch; extra: AxiosInstance;
}>('CHECK_AUTH',
  async (_args, { extra: api}) => {
    // try{
    const token: string | null = window.localStorage.getItem('token');
    api.defaults.headers.common['X-Token'] = `${token}` || '';

    const {data} = await api.get<TUser>('/six-cities/login');

    return data;

  }
);

export const fetchLogin = createAsyncThunk<TUser,
{
  email: string; password: string;
},
{
  extra: AxiosInstance;
}>('POST_LOGIN',
  async (_args, { extra: api}) => {
    const {data} = await api.post<TUser>('/six-cities/login', _args);
    return data;
  }
);
export const fetchOffer = createAsyncThunk<TOfferDetails,
{
  offerId:string;
},
{
  dispatch: AppDispatch;extra: AxiosInstance;
}>('GET_OFFER',
  async (_args, {extra: api}) => {
    const {data} = await api.get<TOfferDetails>(`/six-cities/offers/${_args.offerId}`);
    return data;
  }
);
export const fetchComments = createAsyncThunk<TReviewOffer[],
{
  offerId:string;
},
{
  extra: AxiosInstance;
}>('GET_OFFER_REVIEWS',
  async (_args, { extra: api}) => {
    const {data} = await api.get<TReviewOffer[]>(`/six-cities/comments/${_args.offerId}`);
    return data;
  }
);

export const fetchNearByOffers = createAsyncThunk<TOffer[],
{
  offerId:string;
},
{
  extra: AxiosInstance;
}>('GET_NEAR_BY_OFFERS',
  async (_args, { extra: api}) => {
    const {data} = await api.get<TOffer[]>(`/six-cities/offers/${_args.offerId}/nearby`);
    return data;
    // dispatch(setNearByOffers(data));
  }
);
export const postComment = createAsyncThunk<TReviewOffer,
{
  offerId:string;
  comment: string;
  rating: number;
},
{
  extra: AxiosInstance;
}>('POST_COMMENT',
  async (_args, { extra: api}) => {
    const comment = {comment: _args.comment, rating: _args.rating};
    const {data} = await api.post<TReviewOffer>(`/six-cities/comments/${_args.offerId}`, comment);
    return data;
  }
);


export const fetchFavoriteStatus = createAsyncThunk<TOffer,
{
  offerId:string;
  status: number;
},
{
 extra: AxiosInstance;
}>('ADD_COMMENT',
  async (_args, { extra: api}) => {
    const {data} = await api.post<TOffer>(`/six-cities/favorite/${_args.offerId}/${_args.status}`);
    return data;

  }
);
export const fetchSignOutAction = createAsyncThunk<void,
undefined,
{
  extra: AxiosInstance;
}>('SIGN_OUT',
  async (_args, { extra: api}) => {
    await api.delete('/six-cities/logout');

  }
);


