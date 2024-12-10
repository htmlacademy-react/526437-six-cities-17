import { TOffer } from '../types/cardTypes';


export const mockOffers: TOffer[] = [
  {
    id: '00000000000',
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
    price: 120,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37960140087141,
        longitude: 4.900836436343095,
        zoom: 8
      },
    },
    location: {
      id: '00000000000',
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 8
    },
    isFavorite: true,
    isPremium: false,
    rating: 4,
    previewImage: 'img/apartment-01.jpg',
  },
  {
    id: '1111111111111',
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
    price: 120,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37960140087141,
        longitude: 4.900836436343095,
        zoom: 8
      },
    },
    location: {
      id: '1111111111111',
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 8
    },
    isFavorite: true,
    isPremium: false,
    rating: 4,
    previewImage: 'img/apartment-01.jpg',
  },
  {
    id: '222222222222',
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
    price: 120,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37960140087141,
        longitude: 4.900836436343095,
        zoom: 8
      },
    },
    location: {
      id: '222222222222',
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 8
    },
    isFavorite: false,
    isPremium: false,
    rating: 4,
    previewImage: 'img/apartment-01.jpg',
  },
  {
    id: '33333333333333',
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
    price: 120,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37960140087141,
        longitude: 4.900836436343095,
        zoom: 8
      },
    },
    location: {
      id: '33333333333333',
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 8
    },
    isFavorite: false,
    isPremium: false,
    rating: 4,
    previewImage: 'img/apartment-01.jpg',
  }
];


