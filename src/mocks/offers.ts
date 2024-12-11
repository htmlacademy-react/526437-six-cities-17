import { TOffer, TOfferDetails, TReviewOffer } from '../types/offerTypes';

export const mockReviewList: TReviewOffer[] = [
  {
    id: 'b67ddfd5-b953-4a30-8c8d-bd083cd6b62a',
    date: '2019-05-08T14:13:56.569Z',
    user: {
      name: 'Ilon Mask',
      avatarUrl: 'img/avatar-max.jpg',
      isPro: false
    },
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.00000',
    rating: 3
  },
  {
    id: 'b67ddfd5-b953-4a30-8c8d-bd083cd6b62add',
    date: '2019-05-08T14:13:56.569Z',
    user: {
      name: 'Oliver Conner',
      avatarUrl: 'img/avatar-angelina.jpg',
      isPro: false
    },
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.11111',
    rating: 4.5
  }
];

export const mockOffersNearBy: TOffer[] = [
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

export const mockOfferDetail: TOfferDetails = {
  id: '6af6f711-c28d-4121-82cd-e0b462a27f00',
  title: 'Beautiful & luxurious studio at great location',
  type: 'apartment',
  price: 120,
  city: {
    name: 'Amsterdam',
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    }
  },
  location: {
    latitude: 52.35514938496378,
    longitude: 4.673877537499948,
    zoom: 8
  },
  isFavorite: true,
  isPremium: false,
  rating: 4,
  description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
  bedrooms: 3,
  goods: [
    'Heating'
  ],
  host: {
    name: 'Oliver Conner',
    avatarUrl: 'https://url-to-image/image.png',
    isPro: false
  },
  images: [
    'img/apartment-01.jpg',
    'img/apartment-02.jpg',
    'img/apartment-03.jpg',
  ],
  maxAdults: 4
};


