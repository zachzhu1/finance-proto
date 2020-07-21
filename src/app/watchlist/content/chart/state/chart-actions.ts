import { createAction, props } from '@ngrx/store';
import { CoreApiError } from 'src/app/shared/core/state/core-state';
import { ChartDataInterface } from './chart-reducer';

const CHANGE_POINT = 'WATCHLIST:CHART:CHANGE_POINT';
const CHANGE_RANGE = 'WATCHLIST:CHART:CHANGE_RANGE';
const FETCH_FULFILLED = 'WATCHLIST:CHART:FETCH_FULFILLED';
const FETCH_LOADER = 'WATCHLIST:CHART:FETCH_LOADER';
const FETCH_ERROR = 'WATCHLIST:CHART:FETCH_ERROR';

export const changePoint = createAction(CHANGE_POINT, props<{point: ChartDataInterface}>());
export const changeRange = createAction(CHANGE_RANGE, props<{range: string}>());
export const fetchFulfilled = createAction(FETCH_FULFILLED, props<{data: ChartDataInterface[]}>());
export const fetchLoader = createAction(FETCH_LOADER, props<{loader: boolean}>())
export const fetchError = createAction(FETCH_ERROR, props<{error: CoreApiError}>())
