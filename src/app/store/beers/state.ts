import { Beer } from 'src/app/models/beer.model';

export interface BeerState {
  beers: Beer[];
  loading: boolean;
}

export const initialState: BeerState = {
  beers: [],
  loading: false,
};
