import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CoreApiError } from '../../../../shared/core/state/core-state';
import { map, distinctUntilChanged } from 'rxjs/operators';
import { AppState } from 'src/app/app.module';
import { SearchState } from './search-reducer';
import * as SearchActions from './search-actions';

@Injectable()
export class SearchStateService {
  data$: Observable<any[]>;
  loader$: Observable<boolean>;
  error$: Observable<CoreApiError>;

  constructor(public store$: Store<any>) {
    this.data$ = store$.pipe(
      select((state: AppState) => state.search),
      map((state: SearchState) => state.data), 
      distinctUntilChanged());

    this.loader$ = store$.pipe(
      select((state: AppState) => state.search),
      map((state: SearchState) => state.loader), 
      distinctUntilChanged());

    this.error$ = store$.pipe(
      select((state: AppState) => state.search),
      map((state: SearchState) => state.error), 
      distinctUntilChanged());
  }

  fetchFulfilled(data: any[]) {
    this.store$.dispatch(SearchActions.fetchFulfilled({data: data}));
  }

  fetchLoader(loader: boolean) {
    this.store$.dispatch(SearchActions.fetchLoader({loader: loader}));
  }

  fetchError(error: CoreApiError) {
    this.store$.dispatch(SearchActions.fetchError({error: error}));
  }
}
