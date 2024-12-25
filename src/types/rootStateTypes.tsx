import {TOffer} from '../types/offerTypes';
import {TCity} from '../types/cityTypes';
import {TUser} from '../types/userTypes';

export type RootState = {
    offers: TOffer[];
    selectedCity: TCity;
    cityes: TCity[];
    authorizationStatus: boolean;
    userInfo: TUser;
  }

