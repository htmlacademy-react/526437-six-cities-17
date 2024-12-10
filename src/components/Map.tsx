import {useRef} from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../hooks/useMap';
import { URL_MARKER_DEFAULT,
  URL_MARKER_CURRENT
} from '../constant';
import { useEffect } from 'react';

type TPoints = {
    latitude: number;
    longitude: number;
    zoom: number;
    id?: string;
}
type TCity = {
  name: string;
  location: TPoints;
}
  type TProps = {
    city: TCity;
    points: TPoints[];
    activeCard: string;
}
export default function Map({city, points, activeCard}: TProps) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [30, 30],
    iconAnchor: [20, 40],
  });

  const currentCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_CURRENT,
    iconSize: [30, 30],
    iconAnchor: [20, 40],
  });

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        leaflet
          .marker({
            lat: point.latitude,
            lng: point.longitude,
          }, {
            icon: activeCard === point.id ? currentCustomIcon : defaultCustomIcon,
          })
          .addTo(map);
      });
    }
  }, [
    map,
    points,
    defaultCustomIcon,
    activeCard,
    currentCustomIcon
  ]);

  return (

    <div
      style={{height: '100%', width: '100%'}}
      ref={mapRef}
      className="cities__map map"
    >
    </div>
  );
}

