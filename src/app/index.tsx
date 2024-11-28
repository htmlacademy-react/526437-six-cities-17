import IndexPage from '../pages/main/index';
import { TCardsCounter } from '../types/cardTypes';
export default function App({counter}: TCardsCounter) {
  return (
    <IndexPage counter={counter} />
  );
}
