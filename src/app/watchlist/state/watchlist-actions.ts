import { StockData } from './watchlist-reducer';
import { createAction, props } from '@ngrx/store';

const CHANGE_STOCK_DATA = 'WATCHLIST:CHANGE_STOCK_DATA';
const CHANGE_STOCK = 'WATCHLIST:CHANGE_STOCK';
const DELETE_FAVORITES = 'WATCHLIST:DELETE_FAVORITES';
const ADD_FAVORITE = 'WATCHLIST:ADD_FAVORITE';
const CHANGE_HIGHLIGHTS = 'WATCHLIST:CHANGE_HIGHLIGHTS';

export const changeStockData = createAction(CHANGE_STOCK_DATA, props<{data: StockData}>());
export const changeStock = createAction(CHANGE_STOCK, props<{stock: string}>());
export const addFavorite = createAction(ADD_FAVORITE, props<{favorite: string}>());
export const deleteFavorites = createAction(DELETE_FAVORITES, props<{favorites: string[]}>());
export const changeHighlights = createAction(CHANGE_HIGHLIGHTS, props<{highlights: any}>());
