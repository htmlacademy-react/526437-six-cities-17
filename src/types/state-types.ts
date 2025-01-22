import {TOffer, TOfferDetails, TReviewOffer} from './offer-types';
import {TCity} from './city-types';
import {TUser} from './user-types';


export type UserProcess = {
    authorizationStatus: boolean;
    userInfo: TUser;
  };

export type CityProcess = {
    selectedCity: TCity;
    cityes: TCity[];
  }
export type OfferProcess = {
    loaded: boolean;
    offers: TOffer[];
    cityes: TCity[];
    selectedCity: TCity;
    favoriteOffers: TOffer[];
    nearByOffers: TOffer[];
    currentOffer: TOfferDetails | Record<string, never>;
    currentOfferComments: TReviewOffer[];
  }
