
import {store} from '../store';
import {setSelectedCityAction} from '../store/actions';
import { useDispatch } from 'react-redux';
import { TCity } from '../types/cityTypes';
import CSS from 'csstype';

type City = {
  cityes: TCity[];
}

export default function CityList(props: City) {
  const dispatch = useDispatch();
  const cityes = props.cityes;
  const activeCity = store.getState().selectedCity;

  const LocationStyle: CSS.Properties = {
    cursor: 'pointer'
  };

  return (
    <ul className="locations__list tabs__list">
      {cityes.map((x) =>
        (
          <li className="locations__item" key={x.name} >
            <div style={LocationStyle}
              onClick={()=> dispatch(setSelectedCityAction(x))}
              className={`locations__item-link tabs__item${x.name === activeCity.name
                ? '--active'
                : ''}`}
            >
              <span>{x.name} </span>
            </div>
          </li>))}
    </ul>
  );
}
