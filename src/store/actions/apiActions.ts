import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch } from '..';
import { AxiosInstance } from 'axios';
import { TOffer, TOfferDetails,TReviewOffer } from '../../types/offerTypes';
import { TUser } from '../../types/userTypes';
import { setOffersAction,
  setCityesAction,
  setUserInfo,
  setAuthStatus,
  setCurrentOffer,
  setCurrentOfferReviews,
  setNearByOffers,
  setSelectedCityAction,
  redirectToRoute} from '.';
import {convertCitiesById} from '../../helpers/convertCitiesById';
import {setCities} from '../../helpers/setCities';
import { AppRouter } from '../../constant';

export const fetchOffers = createAsyncThunk<void, undefined,
{
    dispatch: AppDispatch;
    extra: AxiosInstance;

}>('GET_OFFERS',
  async (_args, {dispatch, extra: api}) => {
    const {data} = await api.get<TOffer[]>('/six-cities/offers');
    const offers = convertCitiesById(data);
    const cityes = setCities(offers);
    dispatch(setOffersAction(offers));
    dispatch(setCityesAction(cityes));

  }
);

export const fetchCheckAuth = createAsyncThunk<void, undefined,
{
  dispatch: AppDispatch; extra: AxiosInstance;
}>('CHECK_AUTH',
  async (_args, {dispatch, extra: api}) => {
    try{
      const token: string | null = window.localStorage.getItem('token');
      api.defaults.headers.common['X-Token'] = `${token}` || '';

      const {data} = await api.get<TUser>('/six-cities/login');
      dispatch(setUserInfo(data));
      dispatch(setAuthStatus(true));
    }catch(e) {
      dispatch(setAuthStatus(false));
    }
  }
);

export const fetchLogin = createAsyncThunk<void,
{
  email: string; password: string;
},
{
  dispatch: AppDispatch; extra: AxiosInstance;
}>('POST_LOGIN',
  async (_args, {dispatch, extra: api}) => {
    const {data} = await api.post<TUser>('/six-cities/login', _args);
    const {token} = data;
    if(token){
      window.localStorage.setItem('token', token);
    }
    dispatch(setUserInfo(data));
    dispatch(setAuthStatus(true));
  }
);
export const fetchOffer = createAsyncThunk<void,
{
  offerId:string;
},
{
  dispatch: AppDispatch; extra: AxiosInstance;
}>('GET_OFFER',
  async (_args, {dispatch, extra: api}) => {
    try{
      const {data} = await api.get<TOfferDetails>(`/six-cities/offers/${_args.offerId}`);
      dispatch(setCurrentOffer(data));
      dispatch(setSelectedCityAction(data.city));
    }catch (e){
      dispatch(redirectToRoute(AppRouter.NotFound));
    }
  }
);
export const fetchComments = createAsyncThunk<void,
{
  offerId:string;
},
{
  dispatch: AppDispatch; extra: AxiosInstance;
}>('GET_OFFER_REVIEWS',
  async (_args, {dispatch, extra: api}) => {
    const {data} = await api.get<TReviewOffer[]>(`/six-cities/comments/${_args.offerId}`);
    dispatch(setCurrentOfferReviews(data));
  }
);
export const fetchNearByOffers = createAsyncThunk<void,
{
  offerId:string;
},
{
  dispatch: AppDispatch; extra: AxiosInstance;
}>('GET_NEAR_BY_OFFERS',
  async (_args, {dispatch, extra: api}) => {
    const {data} = await api.get<TOffer[]>(`/six-cities/offers/${_args.offerId}/nearby`);
    dispatch(setNearByOffers(data));
  }
);


