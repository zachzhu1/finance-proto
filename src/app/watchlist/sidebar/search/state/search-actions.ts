import { CoreApiError } from '../../../../shared/core/state/core-state';
import { createAction, props } from '@ngrx/store';

const FETCH_FULFILLED = 'WATCHLIST:SEARCH:FETCH_FULFILLED';
const FETCH_LOADER = 'WATCHLIST:SEARCH:FETCH_LOADER';
const FETCH_ERROR = 'WATCHLIST:SEARCH:FETCH_ERROR';

export const fetchFulfilled = createAction(FETCH_FULFILLED, props<{data: any[]}>());
export const fetchLoader = createAction(FETCH_LOADER, props<{loader: boolean}>())
export const fetchError = createAction(FETCH_ERROR, props<{error: CoreApiError}>())


