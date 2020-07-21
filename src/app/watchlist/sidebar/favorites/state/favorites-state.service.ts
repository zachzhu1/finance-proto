import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CoreApiError } from '../../../../shared/core/state/core-state';
import * as FavoritesActions from './favorites-actions';
import { FavoritesState } from './favorites-reducer';
import { map, distinctUntilChanged } from 'rxjs/operators';
import { AppState } from 'src/app/app.module';

@Injectable()
export class FavoritesStateService {
  data$: Observable<any[]>;
  loader$: Observable<boolean>;
  error$: Observable<CoreApiError>;
  order$: Observable<string[]>;

  constructor(public store$: Store<any>) {
    this.data$ = store$.pipe(
      select((state: AppState) => state.favorites),
      map((state: FavoritesState) => state.data), 
      distinctUntilChanged());

    this.loader$ = store$.pipe(
      select((state: AppState) => state.favorites),
      map((state: FavoritesState) => state.loader), 
      distinctUntilChanged());

    this.error$ = store$.pipe(
      select((state: AppState) => state.favorites),
      map((state: FavoritesState) => state.error), 
      distinctUntilChanged());

    this.order$ = store$.pipe(      
      select((state: AppState) => state.favorites),
      map((state: FavoritesState) => state.order), 
      distinctUntilChanged());
  }

  fetchFulfilled(data: any[]) {
    this.store$.dispatch(FavoritesActions.fetchFulfilled({data: data}));
  }

  fetchLoader(loader: boolean) {
    this.store$.dispatch(FavoritesActions.fetchLoader({loader: loader}));
  }

  fetchError(error: CoreApiError) {
    this.store$.dispatch(FavoritesActions.fetchError({error: error}));
  }

  changeOrder(order: string[]) {
    this.store$.dispatch(FavoritesActions.changeOrder({ order: order}));
  }

  sortData() {
    this.store$.dispatch(FavoritesActions.sortData());
  }
}
