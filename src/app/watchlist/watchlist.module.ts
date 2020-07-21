import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ContentModule } from './content/content.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { WatchlistStateService } from './state/watchlist-state.service';
import { WatchlistComponent } from './watchlist.component';
import { WatchlistRoutes } from './watchlist.routes';

@NgModule({
  imports: [
    RouterModule.forChild(WatchlistRoutes),
    SharedModule,
    ContentModule,
    SidebarModule
  ],
  declarations: [
    WatchlistComponent
  ],
  providers: [
    WatchlistStateService
  ]
})
export class WatchlistModule {
}
