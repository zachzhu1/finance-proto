import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import {  HeaderState } from './header-reducer';
import * as HeaderActions from './header-actions';
import { map, distinctUntilChanged } from 'rxjs/operators';
import { AppState } from 'src/app/app.module';

@Injectable()
export class HeaderStateService {
  searchActive$: Observable<boolean>;
  search$: Observable<string>;
  sidebar$: Observable<boolean>;
  preloader$: Observable<boolean>;

  constructor(public store$: Store<any>) {
    this.searchActive$ = store$.pipe(
      select((state: AppState) => state.header), 
      map((state: HeaderState)=> state.searchActive),
      distinctUntilChanged());

    this.search$ = store$.pipe(
      select((state: AppState) => state.header), 
      map((state: HeaderState)=> state.search),
      distinctUntilChanged());

    this.sidebar$ = store$.pipe(
      select((state: AppState) => state.header), 
      map((state: HeaderState)=> state.sidebar),
      distinctUntilChanged());

    this.preloader$ = store$.pipe(
      select((state: AppState) => state.header), 
      map((state: HeaderState)=> state.preloader),
      distinctUntilChanged());

  }

  changeSearchActive(searchActive: boolean) {
    this.store$.dispatch(HeaderActions.changeSearchActive({searchActive: searchActive}));
  }

  changeSearch(search: string) {
    this.store$.dispatch(HeaderActions.changeSearch({search: search}));
  }

  changeSidebar(sidebar: boolean) {
    this.store$.dispatch(HeaderActions.changeSidebar({sidebar: sidebar}));
  }

  changePreloader(preloader: boolean) {
    this.store$.dispatch(HeaderActions.changePreloader({preloader: preloader}));
  }
}
