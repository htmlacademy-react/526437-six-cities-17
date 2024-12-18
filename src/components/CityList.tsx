
import {store} from '../store';
import {setSelectedCityAction} from '../store/actions';
import { useDispatch } from 'react-redux';
import { TCity } from '../types/cityTypes';
type City = {
  cityes: TCity[];
}
 type AppDispatch = typeof store.dispatch

export default function CityList(props: City) {
  const dispatch: AppDispatch = useDispatch();
  const cityes = props.cityes;
  const activeCity = store.getState().selectedCity;

  return (
    <ul className="locations__list tabs__list">

      {cityes.map((x) =>
        (
          <li className="locations__item" key={x.name} >
            <a onClick={()=> dispatch(setSelectedCityAction(x))} className={`locations__item-link tabs__item${x.name === activeCity.name ? '--active' : ''}`} >
              <span>{x.name} </span>
            </a>
          </li>))}
    </ul>
  );
}
