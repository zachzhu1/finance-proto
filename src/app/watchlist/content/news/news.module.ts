import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { NewsComponent } from './news.component';
import { NewsApiService } from './news-api.service';
import { NewsStateService } from './state/news-state.service';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    NewsComponent
  ],
  exports: [
    NewsComponent
  ],
  providers: [
    NewsApiService,
    NewsStateService
  ]
})
export class NewsModule {
}
