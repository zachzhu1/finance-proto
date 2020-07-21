import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';
import { SearchComponent } from './search.component';
import { SearchStateService } from './state/search-state.service';
import { SearchApiService } from './search-api.service';

@NgModule({
  imports: [
    RouterModule,
    SharedModule
  ],
  declarations: [
    SearchComponent
  ],
  exports: [
    SearchComponent
  ],
  providers: [
    SearchStateService,
    SearchApiService
  ]
})
export class SearchModule {
}
