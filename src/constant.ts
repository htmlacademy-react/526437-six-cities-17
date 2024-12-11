export enum AppRouter {
    Root = '/',
    Favorites='favorites',
    Login = '/login',
    Offer = 'offer/:id',
    Map = 'map'
}


export enum PrivateStatus {
    Auth = 'AUTH',
    Guest = 'GUEST',
    Unknown = 'UNKNOWN'
}

export const URL_MARKER_DEFAULT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';
