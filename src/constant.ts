export enum AppRouter {
    Root = '/',
    Favorites='favorites',
    Login = '/login',
    Offer = 'offer/:id',
    NotFound = '/404',
    Map = 'map'
}


export enum PrivateStatus {
    Auth = 'AUTH',
    Guest = 'GUEST',
    Unknown = 'UNKNOWN'
}

export const URL_MARKER_DEFAULT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

export const SORTITEMS: {title: string; type: string}[] = [
  {title: 'Popular', type: 'default'},
  {title: 'Price: low to high', type: 'low'},
  {title: 'Price: high to low', type: 'hight'},
  {title: 'Top rated first', type: 'top'},
];
