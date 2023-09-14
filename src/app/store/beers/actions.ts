import { createAction, props } from '@ngrx/store';
import { Beer } from 'src/app/models/beer.model';

export const getBeers = createAction('[BEER] Get Beers');
export const getBeersSuccess = createAction('[BEER] Get BEER Success', props<{ response: Beer[] }>());
export const getBeersFailure = createAction('[BEER] Get BEER Failure');
