import {TOffer, TOfferDetails, TReviewOffer} from '../types/offer-types';
import {TCity} from '../types/city-types';
import {TUser} from '../types/user-types';

interface State {
    offers: TOffer[];
    nearByOffers: TOffer[];
    selectedCity: TCity;
    cityes: TCity[];
    authorizationStatus: boolean;
    userInfo: TUser;
    currentOffer: TOfferDetails | Record<string, never>;
    currentOfferComments: TReviewOffer[];
    favoriteOffers: TOffer[];
  }

export const defaultState:State = {
  offers: [],
  favoriteOffers: [],
  nearByOffers: [],
  currentOffer: {},
  currentOfferComments:[],
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
