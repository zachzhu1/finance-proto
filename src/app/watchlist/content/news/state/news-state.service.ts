import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CoreApiError } from '../../../../shared/core/state/core-state';
import { NewsState } from './news-reducer';
import { map, distinctUntilChanged } from 'rxjs/operators';
import { AppState } from 'src/app/app.module';
import * as NewsActions from './news-actions';

@Injectable()
export class NewsStateService {
  data$: Observable<any[]>;
  loader$: Observable<boolean>;
  error$: Observable<CoreApiError>;

  constructor(public store$: Store<any>) {
    this.data$ = store$.pipe(
      select((state: AppState) => state.news),
      map((state: NewsState) => state.data), 
      distinctUntilChanged());

    this.loader$ = store$.pipe(
      select((state: AppState) => state.news),
      map((state: NewsState) => state.loader), 
      distinctUntilChanged());

    this.error$ = store$.pipe(
      select((state: AppState) => state.news),
      map((state: NewsState) => state.error), 
      distinctUntilChanged());
  }

  fetchFulfilled(data: any[]) {
    this.store$.dispatch(NewsActions.fetchFulfilled({data: data}));
  }

  fetchLoader(loader: boolean) {
    this.store$.dispatch(NewsActions.fetchLoader({loader: loader}));
  }

  fetchError(error: CoreApiError) {
    this.store$.dispatch(NewsActions.fetchError({error: error}));
  }
}
