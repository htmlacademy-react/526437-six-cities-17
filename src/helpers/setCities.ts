import { TOffer } from '../types/offerTypes';
import { TCity } from '../types/cityTypes';

export const setCities = (offers: TOffer[]) =>{
  const uniqueCityesNames = offers.map((offer) => offer.city.name)
    .filter((value, index, array) =>
      array.indexOf(value) === index);

  const resOffers = uniqueCityesNames.reduce((acc: TCity[], val) => {
    const item = offers.find((offer) => offer.city.name === val);
    if(item){
      acc.push(item.city);
    }
    return acc;
  }, []);

  return resOffers;
};
