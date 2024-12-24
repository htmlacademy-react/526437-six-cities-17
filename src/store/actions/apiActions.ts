import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch } from '..';
import { AxiosInstance } from 'axios';
import { TOffer } from '../../types/offerTypes';
import { setOffersAction, setCityesAction } from '.';
import {convertCitiesById} from '../../helpers/convertCitiesById';
import {setCities} from '../../helpers/setCities';

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


