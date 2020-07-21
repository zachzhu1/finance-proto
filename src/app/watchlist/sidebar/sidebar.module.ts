import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { SearchModule } from './search/search.module';
import { EditModule } from './edit/edit.module';
import { FavoritesModule } from './favorites/favorites.module';
import { SidebarComponent } from './sidebar.component';
import { SidebarStateService } from './state/sidebar-state.service';
import { FavoritesStateService } from './favorites/state/favorites-state.service';
import { FavoritesApiService } from './favorites-api.service';

@NgModule({
  imports: [
    RouterModule,
    SharedModule,
    SearchModule,
    EditModule,
    FavoritesModule
  ],
  declarations: [
    SidebarComponent
  ],
  exports: [
    SidebarComponent
  ],
  providers: [
    SidebarStateService,
    FavoritesStateService,
    FavoritesApiService
  ]
})
export class SidebarModule {
}
