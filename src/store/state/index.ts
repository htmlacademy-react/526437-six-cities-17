import {TOffer} from '../../types/offerTypes';
import {TCity} from '../../types/cityTypes';
import {TUser} from '../../types/userTypes';

interface State {
    offers: TOffer[];
    selectedCity: TCity;
    cityes: TCity[];
    authorizationStatus: boolean;
    userInfo: TUser;
  }

export const defaultState:State = {
  offers: [],
  selectedCity: {
    name:'Paris',
    location: {
      latitude:48.85661,
      longitude:2.351499,
      zoom:13,
    }
  },
  authorizationStatus: false,
  cityes: [],
  userInfo: {
    name: '',
    avatarUrl: '',
    isPro: false,
    email: '',
    token: '',
  }
};
