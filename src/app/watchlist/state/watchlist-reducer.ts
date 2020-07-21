import { Action, createReducer, on } from '@ngrx/store';
import * as WatchlistActions from './watchlist-actions';
import { localStorageAdapter, Types } from 'src/app/shared/core/utils';

export interface StockData {
  index?: number;
  symbol?: string;
  name?: string;
  price?: number;
  priceDisplay?: string;
  change?: number;
  percentage?: string;
}

export interface WatchlistState {
  stock?: string;
  stockData?: StockData;
  favorites?: string[];
  highlights?: any;
}

export class WatchlistStateKeys {
  static StateName = 'watchlist';
  static Stock = 'stock';
  static StockData = 'stockData';
  static Favorites = 'favorites';
  static Highlights = 'highlights';
}

const watchlistInitialState: WatchlistState = {
  stock: null,
  stockData: {},
  favorites: localStorageAdapter.getItem(WatchlistStateKeys.Favorites, Types.Array) || ['AAPL', 'GOOG', 'FB'],
  highlights: {}
};

const reducer = createReducer<WatchlistState>(
  watchlistInitialState,
  on(WatchlistActions.changeStockData, (state, { data })=>({...state, data:data})),
  on(WatchlistActions.changeStock, (state, { stock })=>({...state, stock:stock})),
  on(WatchlistActions.addFavorite, (state, { favorite }) => {
    if(state.favorites.indexOf(favorite) == -1){
      state.favorites.push(favorite);
    }
    return state;
  }),
  on(WatchlistActions.deleteFavorites, (state, { favorites })=>{
    state.favorites.filter(x => favorites.indexOf(x) === -1);
    return state;
  }),
  on(WatchlistActions.changeHighlights, (state, { highlights })=>({...state, highlights:highlights})),
);

export function watchlistReducer(state: WatchlistState | undefined, action: Action) {
  return reducer(state, action);
}