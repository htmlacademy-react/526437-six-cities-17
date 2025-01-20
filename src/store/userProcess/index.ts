import { createSlice } from '@reduxjs/toolkit';
import {NameSpace,
  //  AuthorizationStatus
} from '../../constant';
import {UserProcess} from '../../types/newStateTypes';
import {fetchCheckAuth, fetchLogin, fetchSignOutAction} from '../actions/apiActions';


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
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCheckAuth.fulfilled, (state, action) => {
        state.authorizationStatus = true;
        state.userInfo = action.payload;
      })
      .addCase(fetchCheckAuth.rejected, (state) => {
        state.authorizationStatus = false;
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
        const token = '';
        window.localStorage.setItem('token', token);
        state.userInfo = initialState.userInfo;
        state.authorizationStatus = true;
      })
      .addCase(fetchSignOutAction.fulfilled, () => {
        window.localStorage.setItem('token', '');
      });


  }
});

