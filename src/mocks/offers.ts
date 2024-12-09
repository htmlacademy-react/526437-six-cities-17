import { TCard } from '../types/cardTypes';

const cardArray: TCard[] = [
  {
    imageUrl: 'img/apartment-01.jpg',
    premium: false,
    price: '100',
    currency: 'euro',
    priceBy: 'night',
    favorite: true,
    rating: 80,
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. ',
    navToOffer: '/hash_001',
    place: 'Dusseldorf',
    lat : 52.3809553943508,
    lng: 4.939309666406198,
    id: '1',
  },
  {
    imageUrl: 'img/apartment-02.jpg',
    premium: true,
    price: '100',
    currency: 'rb',
    priceBy: 'night',
    favorite: true,
    rating: 100,
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. ',
    navToOffer: '/hash_002',
    place: 'Amsterdam',
    lat : 52.3909553943508,
    lng: 4.929309666406198,
    id: '2'
  },
  {
    imageUrl: 'img/apartment-02.jpg',
    premium: true,
    price: '100',
    currency: 'rb',
    priceBy: 'night',
    favorite: false,
    rating: 100,
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. ',
    navToOffer: '/hash_003',
    place: 'Amsterdam',
    lat : 52.3609553943508,
    lng: 4.85309666406198,
    id: '3'
  },
  {
    imageUrl: 'img/apartment-03.jpg',
    premium: false,
    price: '100',
    currency: 'euro',
    priceBy: 'night',
    favorite: false,
    rating: 60,
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. ',
    navToOffer: '/hash_004',
    place: 'Amsterdam',
    lat : 52.3909553943508,
    lng: 4.85309666406198,
    id: '4'
  },
];


export const mockOffers = [
  {
    id: '00000000000',
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
    price: 120,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8
      },
    },
    location: {
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
    id: '1111111111111',
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
    price: 120,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8
      },
    },
    location: {
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
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8
      },
    },
    location: {
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
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8
      },
    },
    location: {
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


export default cardArray;
