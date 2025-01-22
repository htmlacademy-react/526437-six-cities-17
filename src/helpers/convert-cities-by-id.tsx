import { TOffer } from '../types/offer-types';

export const convertCitiesById = (value: TOffer[]) =>
  value.reduce((acc: TOffer[],val: TOffer)=> {
    val.location.id = val.id;
    acc.push(val);
    return acc;
  }, []);
