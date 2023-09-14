import { ActionReducerMap } from '@ngrx/store';
import { BeerState } from './beers/state';
import { beerReducer } from './beers/reducer';
import { BeerEffects } from './beers/effects';

export interface RootState {
  beers: BeerState;
}
export const reducers: ActionReducerMap<RootState> = {
  beers: beerReducer,
};

export const effects = [BeerEffects];
