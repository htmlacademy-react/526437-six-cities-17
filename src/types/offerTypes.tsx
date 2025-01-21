import { TCity, TLocation } from './cityTypes';
import { TUser } from './userTypes';


export interface TOffer {
    id: string;
    title: string;
    type: string;
    price: number;
    city: TCity;
    location: TLocation;
    isFavorite?: boolean;
    isPremium: boolean;
    rating: number;
    previewImage?: string;
}
export interface TOfferDetails extends TOffer {
    description: string;
    bedrooms: number;
    goods: string[];
    host: TUser;
    images: string[];
    maxAdults: number;
}
export type TReviewOffer = {
    id: string;
    date: string;
    user: TUser;
    comment: string;
    rating: number;
}
export type TFavorites = {
  [index: string]: TOffer[];
}


