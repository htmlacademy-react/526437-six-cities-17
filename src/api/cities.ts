import useRequest from '../hooks/useRequest';
import { TOffer } from '../types/offerTypes';
// import createApi from '../services/api';
interface Offers {
  data: TOffer[];
}

export const GetOffers = async() => {
  const request = useRequest();
  const req: Offers = await request.get('/six-cities/offers');
  const {data} = req;
  return data;
};

// const request = createApi();

// type TData<T> = {
//   data:T;
// }

// export const API = {
//   async getOffers():Promise<TData<TOffer[]>> {
//     const result = await request.get('/six-cities/offers');
//     return result as TData<TOffer[]>;
//   }
// };

