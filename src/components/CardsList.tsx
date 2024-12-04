
import { TCard } from '../types/cardTypes';
import CardComponent from '../components/CardComponent';

export default function CardsList(props: {cardArray: TCard[]; handleMouseMove :never}){
  const {cardArray, handleMouseMove} = props;
  return (
    <div className="cities__places-list places__list tabs__content" >
      {cardArray.map((item) => <CardComponent {...item} handleMouseMove={handleMouseMove} key={item.id} />)}
    </div>
  );
}
