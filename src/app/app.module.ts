import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ActionReducerMap, StoreModule } from '@ngrx/store';

import { SharedModule } from './shared/shared.module';
import { HeaderModule } from './shared/header/header.module';
import { HeaderStateService } from './shared/header/state/header-state.service';
import { WatchlistModule } from './watchlist/watchlist.module';

import { headerReducer, HeaderState } from './shared/header/state/header-reducer';
import { watchlistReducer, WatchlistState } from './watchlist/state/watchlist-reducer';
import { favoritesReducer, FavoritesState } from './watchlist/sidebar/favorites/state/favorites-reducer';
import { sidebarReducer, SidebarState } from './watchlist/sidebar/state/sidebar-reducer';
import { searchReducer, SearchState } from './watchlist/sidebar/search/state/search-reducer';
import { chartReducer, ChartState} from './watchlist/content/chart/state/chart-reducer';
import { newsReducer, NewsState } from './watchlist/content/news/state/news-reducer';
import { infoReducer, InfoState } from './watchlist/content/info/state/info-reducer';

export interface AppState {
  header: HeaderState,
  watchlist: WatchlistState,
  favorites: FavoritesState,
  sidebar: SidebarState,
  search: SearchState,
  chart: ChartState,
  news: NewsState,
  info: InfoState
}

export const reducers: ActionReducerMap<AppState> = {
  header: headerReducer,
  watchlist: watchlistReducer,
  favorites: favoritesReducer,
  sidebar: sidebarReducer,
  search: searchReducer,
  chart: chartReducer,
  news: newsReducer,
  info: infoReducer
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    SharedModule,
    HeaderModule,
    WatchlistModule
  ],
  providers: [
    HeaderStateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
