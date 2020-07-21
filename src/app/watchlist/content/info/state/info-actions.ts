import { InfoDataInterface } from './info-reducer';
import { createAction, props } from '@ngrx/store';
import { CoreApiError } from 'src/app/shared/core/state/core-state';

const FETCH_FULFILLED = 'WATCHLIST:INFO:FETCH_FULFILLED';
const FETCH_LOADER = 'WATCHLIST:INFO:FETCH_LOADER';
const FETCH_ERROR = 'WATCHLIST:INFO:FETCH_ERROR';

export const fetchFulfilled = createAction(FETCH_FULFILLED, props<{data: InfoDataInterface[]}>());
export const fetchLoader = createAction(FETCH_LOADER, props<{loader: boolean}>())
export const fetchError = createAction(FETCH_ERROR, props<{error: CoreApiError}>())

