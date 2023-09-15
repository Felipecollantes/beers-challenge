import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Beer } from 'src/app/models/beer.model';
import { RootState } from 'src/app/store';
import * as FromBeers from '../../store/beers/selectors';
import * as BeersActions from '../../store/beers/actions';

@Component({
  selector: 'app-list-beers',
  templateUrl: './list-beers.component.html',
  styleUrls: ['./list-beers.component.scss'],
})
export class ListBeersComponent implements OnInit {
  public readonly beers$: Observable<Beer[]> = this.store.select(FromBeers.selectBeer);

  constructor(private store: Store<RootState>) {}

  ngOnInit(): void {
    this.store.dispatch(BeersActions.getBeers({ page: 1 }));
    this.beers$.subscribe((response) => {
      console.log('cervezas', response);
    });
  }

  public trackByBeers(_: number, store: Beer): number {
    return store.id;
    // trackBy: trackByBeers
  }
}
