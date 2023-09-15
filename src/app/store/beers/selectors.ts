import { createSelector } from '@ngrx/store';
import { RootState } from '..';
import { BeerState } from './state';

const selectFeature = (state: RootState): BeerState => state.beers;
export const selectBeer = createSelector(selectFeature, (state) => state.beers);
export const selectLoading = createSelector(selectFeature, (state) => state.loading);
