import { TCity, TLocation } from './cityTypes';
import { TUser } from './userTypes';


export interface TOffer {
    id: string;
    title: string;
    type: string;
    price: number;
    previewImage?: string;
    city: TCity;
    location: TLocation;
    isFavorite?: boolean;
    isPremium: boolean;
    rating: number;
}
export interface TOfferDetails extends TOffer {
    description: string;
    bedrooms: number;
    goods: string[];
    host: {
        name: string;
        avatarUrl: string;
        isPro: boolean;
    };
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

