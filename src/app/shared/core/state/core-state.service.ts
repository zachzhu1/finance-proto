// import { Injectable,Inject } from '@angular/core';
// import { Store, select } from '@ngrx/store';
// import { Observable } from 'rxjs';
// import { CoreApiError, CoreApiState } from './core-state';
// import { map, distinctUntilChanged } from 'rxjs/operators';
// import { AppState } from 'src/app/app.module';
// import * as CoreAction from './core-actions';

// @Injectable()
// export class CoreApiStateService {
//   data$: Observable<any[]>;
//   loader$: Observable<boolean>;
//   error$: Observable<CoreApiError>;

//   constructor(protected store$: Store<any>) {          
//     this.data$ = store$.pipe(
//       select((state: AppState) => state[reducerName]),
//       map((state: CoreApiState) => state.data), 
//       distinctUntilChanged());

//     this.loader$ = store$.pipe(
//       select((state: AppState) => state[reducerName]),
//       map((state: CoreApiState) => state.loader), 
//       distinctUntilChanged());

//     this.error$ = store$.pipe(
//       select((state: AppState) => state[reducerName]),
//       map((state: CoreApiState) => state.error), 
//       distinctUntilChanged());
//   }

//   fetchFulfilled(data: any[]) {
//     this.store$.dispatch(CoreAction.fetchFulfilled({data: data}));
//   }

//   fetchLoader(loader: boolean) {
//     this.store$.dispatch(CoreAction.fetchLoader({loader: loader}));
//   }

//   fetchError(error: CoreApiError) {
//     this.store$.dispatch(CoreAction.fetchError({error: error}));
//   }
// }
