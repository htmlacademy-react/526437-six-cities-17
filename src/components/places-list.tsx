import CardsList from '../components/cards-list'; // Предполагаем, что у вас есть этот компонент
import EmptyOffers from '../components/empty-offers'; // Предполагаем, что у вас есть этот компонент
import { TOffer } from '../types/offer-types';

interface PlacesListProps {
    sortedOffers: TOffer[]; // Здесь можно указать более конкретный тип, если он известен
    handleMouseMove: (id: string) => void;
    cardType: string;
}

export default function PlacesList(props: PlacesListProps) {
  const { sortedOffers, handleMouseMove, cardType } = props;
  return (
    <div className="cities__places-list places__list tabs__content">
      {sortedOffers && sortedOffers.length > 0 ? (
        <CardsList
          cardType={cardType}
          offers={sortedOffers}
          onMouseMove={handleMouseMove}
        />
      ) : (
        <EmptyOffers />
      )}
    </div>
  );
}
