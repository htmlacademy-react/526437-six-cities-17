import {useRef} from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../hooks/useMap';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../constant';
import { useEffect } from 'react';

type TPoints = {
    latitude: number;
    longitude: number;
    zoom: number;
}
type TCity = {
  name: string;
  location: TPoints;
}
  type TProps = {
    city: TCity;
    points: TPoints[];
}
export default function Map({city, points}: TProps) {
  console.log(city);
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const currentCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_CURRENT,
    iconSize: [40, 40],
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
            icon: defaultCustomIcon,
          })
          .addTo(map);
      });
    }
  }, [map, points]);

  return (
    <div
      style={{height: '100%', width: '100%'}}
      ref={mapRef}
    >
    </div>
  );
}

