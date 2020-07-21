import { createAction, props } from '@ngrx/store';
import { CoreApiError } from 'src/app/shared/core/state/core-state';
import { NewsDataInterface } from './news-reducer';

const FETCH_FULFILLED = 'WATCHLIST:NEWS:FETCH_FULFILLED';
const FETCH_LOADER = 'WATCHLIST:NEWS:FETCH_LOADER';
const FETCH_ERROR = 'WATCHLIST:NEWS:FETCH_ERROR';

export const fetchFulfilled = createAction(FETCH_FULFILLED, props<{data: NewsDataInterface[]}>());
export const fetchLoader = createAction(FETCH_LOADER, props<{loader: boolean}>())
export const fetchError = createAction(FETCH_ERROR, props<{error: CoreApiError}>())



