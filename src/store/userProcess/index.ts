import { createSlice } from '@reduxjs/toolkit';
import {NameSpace,
  //  AuthorizationStatus
} from '../../constant';
import {UserProcess} from '../../types/state-types';
import {fetchCheckAuth, fetchLogin, fetchSignOutAction} from '../actions/api-actions';
import { toast } from 'react-toastify';


const initialState: UserProcess = {
  authorizationStatus: false,
  userInfo: {
    name: '',
    avatarUrl: '',
    isPro: false,
    email: '',
    token: '',
  }
};

export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {
    dispatchDeleteLogin: ((state) => {
      window.localStorage.removeItem('token');
      state.authorizationStatus = false;
      // state = initialState;
    })
  },
  extraReducers(builder) {
    builder
      .addCase(fetchCheckAuth.fulfilled, (state, action) => {
        state.authorizationStatus = true;
        state.userInfo = action.payload;
      })
      .addCase(fetchCheckAuth.rejected, (state) => {
        state.authorizationStatus = false;
        // state = initialState;
      })
      .addCase(fetchLogin.fulfilled, (state, action) => {
        const token = action.payload.token;
        if(token){
          window.localStorage.setItem('token', token);
        }
        state.userInfo = action.payload;
        state.authorizationStatus = true;
      })
      .addCase(fetchLogin.rejected, (state) => {

        state.userInfo = initialState.userInfo;
        state.authorizationStatus = false;
        toast('Пароль должен содержать минимум одну цифру и одну латинскую букву');
      })
      .addCase(fetchSignOutAction.fulfilled, () => {

      });
  }
});

export const {dispatchDeleteLogin} = userProcess.actions;

