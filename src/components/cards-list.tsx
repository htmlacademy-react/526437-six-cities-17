
import { TOffer } from '../types/offer-types';
import CardComponent from './card-component';

type TProps = {
  offers: TOffer[];
  cardType: string;
  onMouseMove: (id: string) => void;
}

export default function CardsList(props: TProps){
  const {offers, onMouseMove, cardType} = props;
  return (
    <>
      {offers.map((item) =>
        (
          <CardComponent
            card={item}
            onMouseMove={onMouseMove}
            key={item.id}
            cardType={cardType}
          />))}
    </>
  );
}
