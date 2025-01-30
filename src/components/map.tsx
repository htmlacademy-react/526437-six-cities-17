import {useRef} from 'react';
import leaflet, { layerGroup } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../hooks/use-map';
import { TCity, TLocation } from '../types/city-types';
import { URL_MARKER_DEFAULT,
  URL_MARKER_CURRENT
} from '../constant';
import { useEffect } from 'react';

type TProps = {
  city: TCity;
  points: TLocation[];
  activeCard?: string;
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
      const layer = layerGroup().addTo(map);
      points.forEach((point) => {
        leaflet
          .marker({
            lat: point.latitude,
            lng: point.longitude,
          }, {
            icon: activeCard === point.id ? currentCustomIcon : defaultCustomIcon,
          })
          .addTo(layer);
      });
      return () => {
        map.removeLayer(layer);
      };
    }
  }, [
    map,
    points,
    activeCard,
    currentCustomIcon,
    defaultCustomIcon
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

