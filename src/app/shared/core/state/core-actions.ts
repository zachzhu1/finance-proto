import { createAction, props } from '@ngrx/store';
import { CoreApiError } from './core-state';

const FETCH_FULFILLED = 'CORE:FETCH_FULFILLED';
const FETCH_LOADER = 'CORE:FETCH_LOADER';
const FETCH_ERROR = 'CORE:FETCH_ERROR';

export const fetchFulfilled = createAction(FETCH_FULFILLED, props<{data: any[]}>());
export const fetchLoader = createAction(FETCH_LOADER, props<{loader: boolean}>())
export const fetchError = createAction(FETCH_ERROR, props<{error: CoreApiError}>())
