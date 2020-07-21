import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CoreApiError } from '../../../../shared/core/state/core-state';
import { ChartDataInterface, ChartState } from './chart-reducer';
import * as ChartActions from './chart-actions';
import { map, distinctUntilChanged } from 'rxjs/operators';
import { AppState } from 'src/app/app.module';

@Injectable()
export class ChartStateService {
  data$: Observable<any[]>;
  loader$: Observable<boolean>;
  error$: Observable<CoreApiError>;
  point$: Observable<ChartDataInterface>;
  range$: Observable<string>;

  constructor(public store$: Store<any>) {
    this.data$ = store$.pipe(
      select((state: AppState) => state.chart),
      map((state: ChartState) => state.data), 
      distinctUntilChanged());

    this.loader$ = store$.pipe(
      select((state: AppState) => state.chart),
      map((state: ChartState) => state.loader), 
      distinctUntilChanged());

    this.error$ = store$.pipe(
      select((state: AppState) => state.chart),
      map((state: ChartState) => state.error), 
      distinctUntilChanged());

    this.point$ = store$.pipe(      
      select((state: AppState) => state.chart),
      map((state: ChartState) => state.point), 
      distinctUntilChanged());

    this.range$ = store$.pipe(      
      select((state: AppState) => state.chart),
      map((state: ChartState) => state.range), 
      distinctUntilChanged());
  }

  fetchFulfilled(data: any[]) {
    this.store$.dispatch(ChartActions.fetchFulfilled({data: data}));
  }

  fetchLoader(loader: boolean) {
    this.store$.dispatch(ChartActions.fetchLoader({loader: loader}));
  }

  fetchError(error: CoreApiError) {
    this.store$.dispatch(ChartActions.fetchError({error: error}));
  }

  changePoint(point: ChartDataInterface) {
    this.store$.dispatch(ChartActions.changePoint({point: point}));
  }

  changeRange(range: string) {
    this.store$.dispatch(ChartActions.changeRange({range: range}));
  }
}
