import { TOffer, TFavorites } from '../types/offerTypes';


export default function mapCityes(offers: TOffer[]){
  const mapCityOffers = offers.reduce((acc: TFavorites, val: TOffer): TFavorites => {
    const city:string = val?.city.name;
    if(!acc[city]){
      acc[city] = [val];
    }else{
      acc[city].push(val);
    }
    return acc;
  }, {});
  return mapCityOffers;
}
