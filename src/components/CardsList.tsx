
import { TCard } from '../types/cardTypes';
import CardComponent from '../components/CardComponent';

type TProps = {
  cardArray: TCard[];
  handleMouseMove: (id: string) => void;
}

export default function CardsList(props: TProps){
  const {cardArray, handleMouseMove} = props;
  return (
    <div className="cities__places-list places__list tabs__content" >
      {cardArray.map((item) => <CardComponent card={item} handleMouseMove={handleMouseMove} key={item.id} />)}
    </div>
  );
}
