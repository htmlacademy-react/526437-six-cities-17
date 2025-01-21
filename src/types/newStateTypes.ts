import {TOffer, TOfferDetails, TReviewOffer} from './offerTypes';
import {TCity} from './cityTypes';
import {TUser} from './userTypes';


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
