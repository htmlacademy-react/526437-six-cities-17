import { TOffer } from './offerTypes';
import {TCity} from './cityTypes';

export type RootState = {
    offers: TOffer[];
  selectedCity: string;
  cityes: TCity[];
}
