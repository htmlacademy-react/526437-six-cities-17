import { TOffer } from '../types/offerTypes';

export default function UseConvertCitiesId(value: TOffer[]){
  return value.reduce((acc: TOffer[],val: TOffer)=> {
    val.location.id = val.id;
    acc.push(val);
    return acc;
  }, []);
}
