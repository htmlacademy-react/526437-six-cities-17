import { mockOffers, mockOffersNearBy } from './offers';


export const points = mockOffers.map((item) => item.location);
export const nearByPoints = mockOffersNearBy.map((item) => item.location);


export const CITY = {
  name: 'Amsterdam',
  location: {
    latitude: 52.37960140087141,
    longitude: 4.900836436343095,
    zoom: 12
  },
};


