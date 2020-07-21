import { SidebarTypeEnum } from './sidebar-reducer';
import { createAction, props } from '@ngrx/store';


const CHANGE_TYPE = 'WATCHLIST:SIDEBAR:CHANGE_TYPE';
export const changeType = createAction(CHANGE_TYPE, props<{ sidebarType: SidebarTypeEnum }>());


