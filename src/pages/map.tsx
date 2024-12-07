import Map from '../components/Map';
import {CITY, POINTS} from '../mocks/city';

export default function MapPage(){
  return (<Map city={CITY} points={POINTS}/>);
}
