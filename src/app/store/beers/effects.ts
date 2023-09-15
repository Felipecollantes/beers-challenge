import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, concat, forkJoin, of } from 'rxjs';
import * as BeerActions from './actions';
import { catchError, map, mergeMap, tap, toArray } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Beer } from 'src/app/models/beer.model';

@Injectable()
export class BeerEffects {
  public getBeers$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(BeerActions.getBeers),
      mergeMap(({ page }) =>
        this.getBeers(page).pipe(
          map((response) => {
            return BeerActions.getBeersSuccess({ response });
          }),
          catchError(() => of(BeerActions.getBeersFailure()))
        )
      )
    )
  );

  public getBeersByParam$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(BeerActions.getBeersByParam),
      mergeMap(({ param }) =>
        this.searchAll(param).pipe(
          map((response) => {
            console.log('response', response);
            return BeerActions.getBeersSuccess({ response });
          }),
          catchError(() => of(BeerActions.getBeersFailure()))
        )
      )
    )
  );

  constructor(private readonly actions$: Actions, private http: HttpClient) {}

  getBeers(page: number = 1, perPage: number = 20): Observable<Beer[]> {
    return this.http.get<Beer[]>(`${environment.api_url}beers/?page=${page}&per_page=${perPage}`);
  }

  searchAll(param: string | number | Date): Observable<Beer[]> {
    // Realizar múltiples solicitudes a la API con diferentes criterios
    const findByName$ = this.findByName(param).pipe(catchError(() => of([])));
    const findByFood$ = this.findByFood(param).pipe(catchError(() => of([])));
    const findByHops$ = this.findByHops(param).pipe(catchError(() => of([])));

    const findByAbvGt$ = this.findByAbvGt(param).pipe(catchError(() => of([])));
    const findByAbvLt$ = this.findByAbvLt(param).pipe(catchError(() => of([])));
    const findByIbuGt$ = this.findByIbuGt(param).pipe(catchError(() => of([])));

    const findByEbcGt$ = this.findByEbcGt(param).pipe(catchError(() => of([])));
    const findByEbcLt$ = this.findByEbcLt(param).pipe(catchError(() => of([])));
    const findByYeast$ = this.findByYeast(param).pipe(catchError(() => of([])));

    const findByBreweBefore$ = this.findByBreweBefore(param).pipe(catchError(() => of([])));
    const findByBrewedAfter$ = this.findByBrewedAfter(param).pipe(catchError(() => of([])));
    const findByMalt$ = this.findByMalt(param).pipe(catchError(() => of([])));

    return concat(
      findByName$,
      findByFood$,
      findByHops$,
      findByAbvGt$,
      findByAbvLt$,
      findByIbuGt$,
      findByEbcGt$,
      findByEbcLt$,
      findByYeast$,
      findByBreweBefore$,
      findByBrewedAfter$,
      findByMalt$
    ).pipe(
      mergeMap((response) => response),
      toArray()
    );
  }

  findByName(param: string | number | Date) {
    return this.http.get<Beer[]>(`${environment.api_url}beers/?beer_name=${param}`);
  }

  findByFood(param: string | number | Date) {
    return this.http.get<Beer[]>(`${environment.api_url}beers/?food=${param}`);
  }

  findByHops(param: string | number | Date) {
    return this.http.get<Beer[]>(`${environment.api_url}beers/?hops=${param}`);
  }

  findByAbvGt(param: string | number | Date) {
    return this.http.get<Beer[]>(`${environment.api_url}beers/?abv_gt=${param}`);
  }

  findByAbvLt(param: string | number | Date) {
    return this.http.get<Beer[]>(`${environment.api_url}beers/?abv_lt=${param}`);
  }

  findByIbuGt(param: string | number | Date) {
    return this.http.get<Beer[]>(`${environment.api_url}beers/?ibu_lt=${param}`);
  }

  findByEbcGt(param: string | number | Date) {
    return this.http.get<Beer[]>(`${environment.api_url}beers/?ebc_gt=${param}`);
  }

  findByEbcLt(param: string | number | Date) {
    return this.http.get<Beer[]>(`${environment.api_url}beers/?ebc_lt=${param}`);
  }

  findByYeast(param: string | number | Date) {
    return this.http.get<Beer[]>(`${environment.api_url}beers/?yeast=${param}`);
  }

  findByBreweBefore(param: string | number | Date) {
    return this.http.get<Beer[]>(`${environment.api_url}beers/?brewed_before=${param}`);
  }

  findByBrewedAfter(param: string | number | Date) {
    return this.http.get<Beer[]>(`${environment.api_url}beers/?brewed_after=${param}`);
  }

  findByMalt(param: string | number | Date) {
    return this.http.get<Beer[]>(`${environment.api_url}beers/?malt=${param}`);
  }
}
