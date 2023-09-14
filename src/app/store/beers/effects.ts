import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import * as BeerActions from './actions';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Beer } from 'src/app/models/beer.model';

@Injectable()
export class BeerEffects {
  public getBeers$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(BeerActions.getBeers),
      mergeMap(() =>
        this.getBeers().pipe(
          map((response) => {
            return BeerActions.getBeersSuccess({ response });
          }),
          catchError(() => of(BeerActions.getBeersFailure()))
        )
      )
    )
  );

  constructor(private readonly actions$: Actions, private http: HttpClient) {}

  getBeers(): Observable<Beer[]> {
    return this.http.get<Beer[]>(`${environment.api_url}beers/1`);
  }
}
