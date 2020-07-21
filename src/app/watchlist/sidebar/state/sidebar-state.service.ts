import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as SidebarActions  from './sidebar-actions';
import { SidebarTypeEnum, SidebarState } from './sidebar-reducer';
import { map, distinctUntilChanged } from 'rxjs/operators';
import { AppState } from 'src/app/app.module';

@Injectable()
export class SidebarStateService {
  type$: Observable<SidebarTypeEnum>;

  constructor(public store$: Store<any>) {
    this.type$ = store$.pipe(      
      select((state: AppState) => state.sidebar),
      map((state: SidebarState) => state.sidebarType), 
      distinctUntilChanged());

  }

  changeType(sidebarType: SidebarTypeEnum) {
    this.store$.dispatch(SidebarActions.changeType({sidebarType: sidebarType}));
  }
}
