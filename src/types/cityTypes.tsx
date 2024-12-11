
export type TLocation = {
    id?: string;
    latitude: number;
    longitude: number;
    zoom: number;
}
export type TCity = {
    name: string;
    location: TLocation;
}
