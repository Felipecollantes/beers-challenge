import { Action, createReducer, on } from '@ngrx/store';
import { BeerState, initialState } from './state';
import * as BeerActions from './actions';

export const reducer = createReducer(
  initialState,

  on(
    BeerActions.getBeers,
    BeerActions.getBeersByParam,
    (state): BeerState => ({
      ...state,
      loading: true,
    })
  ),

  on(BeerActions.getBeersSuccess, (state, { response }): BeerState => {
    return {
      ...state,
      beers: response,
      loading: false,
    };
  }),

  on(
    BeerActions.getBeersFailure,
    (state): BeerState => ({
      ...state,
      loading: false,
    })
  )
);

export const beerReducer = (state: any, action: any): BeerState => reducer(state, action);
