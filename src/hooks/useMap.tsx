
import {useEffect, useState, useRef} from 'react';
import leaflet from 'leaflet';


type TPoints = {
  latitude: number;
  longitude: number;
  zoom: number;
}
type TCity = {
name: string;
location: TPoints;
}


export default function useMap(mapRef: React.MutableRefObject<HTMLInputElement | null> , city: TCity) {
  const [map, setMap] = useState<null | leaflet.Map>(null);
  const isRenderedRef = useRef(false);
  console.log(city);
  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: city?.location?.latitude,
          lng: city?.location?.longitude,
        },
        zoom: city?.location?.zoom,
      });

      leaflet
        .tileLayer(
          'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
          {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          },
        )
        .addTo(instance);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, city]);

  return map;
}

