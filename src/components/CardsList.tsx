
import { TOffer } from '../types/cardTypes';
import CardComponent from '../components/CardComponent';

type TProps = {
  offers: TOffer[];
  onMouseMove: (id: string) => void;
}

export default function CardsList(props: TProps){
  const {offers, onMouseMove} = props;
  return (
    <div className="cities__places-list places__list tabs__content" >
      {offers.map((item) => <CardComponent card={item} onMouseMove={onMouseMove} key={item.id} />)}
    </div>
  );
}
