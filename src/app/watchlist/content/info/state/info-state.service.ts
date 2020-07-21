import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { CoreApiError } from '../../../../shared/core/state/core-state';
import { InfoStateKeys, InfoState } from './info-reducer';
import { Observable } from 'rxjs';
import { map, distinctUntilChanged } from 'rxjs/operators';
import { AppState } from 'src/app/app.module';
import * as InfoActions from './info-actions';

@Injectable()
export class InfoStateService {
  data$: Observable<any[]>;
  loader$: Observable<boolean>;
  error$: Observable<CoreApiError>;

  constructor(public store$: Store<any>) {
    this.data$ = store$.pipe(
      select((state: AppState) => state.info),
      map((state: InfoState) => state.data), 
      distinctUntilChanged());

    this.loader$ = store$.pipe(
      select((state: AppState) => state.info),
      map((state: InfoState) => state.loader), 
      distinctUntilChanged());

    this.error$ = store$.pipe(
      select((state: AppState) => state.info),
      map((state: InfoState) => state.error), 
      distinctUntilChanged());
  }

  fetchFulfilled(data: any[]) {
    this.store$.dispatch(InfoActions.fetchFulfilled({data: data}));
  }

  fetchLoader(loader: boolean) {
    this.store$.dispatch(InfoActions.fetchLoader({loader: loader}));
  }

  fetchError(error: CoreApiError) {
    this.store$.dispatch(InfoActions.fetchError({error: error}));
  }
}
