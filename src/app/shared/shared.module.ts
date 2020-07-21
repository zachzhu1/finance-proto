import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdlModule } from '@angular-mdl/core';
import { NotificationModule } from './notification/notification.module';
import { AboutComponent } from './about/about.component';

@NgModule({
  imports: [
    MdlModule,
    CommonModule,
    NotificationModule
  ],
  exports: [
    MdlModule,
    CommonModule,
    NotificationModule
  ],
  declarations: [AboutComponent]
})

export class SharedModule {
}
