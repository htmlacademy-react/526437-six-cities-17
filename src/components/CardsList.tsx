
import { TOffer } from '../types/offerTypes';
import CardComponent from '../components/CardComponent';

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
