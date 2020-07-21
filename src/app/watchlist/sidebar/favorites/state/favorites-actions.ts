import { createAction, props } from '@ngrx/store';
import { CoreApiError } from 'src/app/shared/core/state/core-state';
import { StockData } from '../../../state/watchlist-reducer';

const CHANGE_ORDER = 'WATCHLIST:FAVORITES:CHANGE_ORDER';
const SORT_DATA = 'WATCHLIST:FAVORITES:SORT_DATA';
const FETCH_FULFILLED = 'WATCHLIST:FAVORITES:FETCH_FULFILLED';
const FETCH_LOADER = 'WATCHLIST:FAVORITES:FETCH_LOADER';
const FETCH_ERROR = 'WATCHLIST:FAVORITES:FETCH_ERROR';

export const changeOrder = createAction(CHANGE_ORDER, props<{order: string[]}>());
export const sortData = createAction(SORT_DATA);
export const fetchFulfilled = createAction(FETCH_FULFILLED, props<{data: StockData[]}>());
export const fetchLoader = createAction(FETCH_LOADER, props<{loader: boolean}>())
export const fetchError = createAction(FETCH_ERROR, props<{error: CoreApiError}>())


