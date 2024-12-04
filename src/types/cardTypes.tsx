

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
    handleMouseMove? :(event: MouseEvent) => void;
}
