
export type TCard = {
    imageUrl: string;
    premium: boolean;
    price: string;
    currency: string;
    priceBy: string;
    favorite: boolean;
    rating: number;
    description: string;
    navToOffer: string;
    id: string;
    place: string;
    lat?: number;
    lng?: number;
}
export type TLocation = {
    latitude: number;
    longitude: number;
    zoom: number;
}
export type TCity = {
    name: string;
    location: TLocation;
}
export type TOffer ={
    id: string;
    title: string;
    type: string;
    price: number;
    city: TCity;
    location: TLocation;
    isFavorite: boolean;
    isPremium: boolean;
    rating: number;
    previewImage: string;
}

