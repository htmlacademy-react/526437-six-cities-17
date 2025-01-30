
import {store} from '../store';
import {dispatchSelectedCity} from '../store/offer/offer-slice';
import { useDispatch } from 'react-redux';
import { TCity } from '../types/city-types';
import CSS from 'csstype';

type City = {
  cityes: TCity[];
}

export default function CityList(props: City) {
  const dispatch = useDispatch();
  const cityes = props.cityes;
  const activeCity = store.getState().OFFER.selectedCity;

  const LocationStyle: CSS.Properties = {
    cursor: 'pointer'
  };

  return (
    <ul className="locations__list tabs__list">
      {cityes.map((x,
      ) =>
        (
          <li style={LocationStyle} className={'locations__item'} key={x.name}>
            <span style={LocationStyle}
              onClick={()=> dispatch(dispatchSelectedCity(x))}
              className={`locations__item-link tabs__item ${x.name === activeCity.name
                ? 'tabs__item--active'
                : ''}`}
            >
              <span>{x.name}</span>
            </span>
          </li>))}
    </ul>
  );
}
