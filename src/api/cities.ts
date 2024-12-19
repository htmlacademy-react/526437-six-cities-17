import useRequest from '../hooks/useRequest';
import { TOffer } from '../types/offerTypes';
interface Offers {
  data: TOffer[];
}

export const GetOffers = async() => {
  const request = useRequest();
  const req: Offers = await request.get('/six-cities/offers');
  const {data} = req;
  return data;
};
