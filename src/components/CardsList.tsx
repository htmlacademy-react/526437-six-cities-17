
import { TOffer } from '../types/cardTypes';
import CardComponent from '../components/CardComponent';

type TProps = {
  offers: TOffer[];
  handleMouseMove: (id: string) => void;
}

export default function CardsList(props: TProps){
  const {offers, handleMouseMove} = props;
  return (
    <div className="cities__places-list places__list tabs__content" >
      {offers.map((item) => <CardComponent card={item} handleMouseMove={handleMouseMove} key={item.id} />)}
    </div>
  );
}
