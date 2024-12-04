export enum AppRouter {
    Root = '/',
    Favorites='favorites',
    Login = '/login',
    Offer = 'offer/:id',
}


export enum PrivateStatus {
    Auth = 'AUTH',
    Guest = 'GUEST',
    Unknown = 'UNKNOWN'
}
