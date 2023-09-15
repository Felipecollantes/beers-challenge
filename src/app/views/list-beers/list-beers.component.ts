import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Beer } from 'src/app/models/beer.model';
import { RootState } from 'src/app/store';
import * as FromBeers from '../../store/beers/selectors';
import * as BeersActions from '../../store/beers/actions';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-list-beers',
  templateUrl: './list-beers.component.html',
  styleUrls: ['./list-beers.component.scss'],
})
export class ListBeersComponent implements OnInit {
  public readonly beers$: Observable<Beer[]> = this.store.select(FromBeers.selectBeer);
  public readonly loading$: Observable<boolean> = this.store.select(FromBeers.selectLoading);
  public form: FormGroup;

  constructor(private store: Store<RootState>) {
    this.form = new FormGroup({
      search: new FormControl(''),
    });
  }

  ngOnInit(): void {
    this.findDefaultPage();
  }
  findDefaultPage() {
    this.store.dispatch(BeersActions.getBeers({ page: 1 }));
  }

  public trackByBeers(_: number, store: Beer): number {
    return store.id;
  }

  findByParam(param: string) {
    if (!param) return this.findDefaultPage();
    return this.store.dispatch(BeersActions.getBeersByParam({ param }));
  }
}
