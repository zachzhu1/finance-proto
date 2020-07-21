import { Injectable } from '@angular/core';
import { Store,select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { StockData, WatchlistStateKeys, WatchlistState } from './watchlist-reducer';
import * as WatchlistActions  from './watchlist-actions';
import { AppState } from 'src/app/app.module';
import { map, distinctUntilChanged } from 'rxjs/operators';

@Injectable()
export class WatchlistStateService {
  stockData$: Observable<StockData>;
  stock$: Observable<string>;
  favorites$: Observable<string[]>;
  highlights$: Observable<any>;

  constructor(protected store$: Store<any>) {
    this.stockData$ = store$.pipe(
      select((state: AppState) => state.watchlist),
      map((state: WatchlistState) => state.stockData), 
      distinctUntilChanged());

    this.stock$ = store$.pipe(
      select((state: AppState) => state.watchlist),
      map((state: WatchlistState) => state.stock), 
      distinctUntilChanged());

    this.favorites$ = store$.pipe(
      select((state: AppState) => state.watchlist),
      map((state: WatchlistState) => state.favorites), 
      distinctUntilChanged());;

    this.highlights$ = store$.pipe(
      select((state: AppState) => state.watchlist),
      map((state: WatchlistState) => state.highlights), 
      distinctUntilChanged());;
  }

  changeStockData(data: StockData) {
    this.store$.dispatch(WatchlistActions.changeStockData({data:data}));
  }

  changeStock(stock: string) {
    this.store$.dispatch(WatchlistActions.changeStock({stock:stock}));
  }

  addFavorite(favorite: string) {
    this.store$.dispatch(WatchlistActions.addFavorite({favorite:favorite}));
  }

  deleteFavorites(favorites: string[]) {
    this.store$.dispatch(WatchlistActions.deleteFavorites({favorites:favorites}));
  }

  changeHighlights(highlights: any) {
    this.store$.dispatch(WatchlistActions.changeHighlights({highlights:highlights}));
  }
}
