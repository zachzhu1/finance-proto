import { Component } from '@angular/core';
import { HeaderStateService } from './shared/header/state/header-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {
  constructor(private headerState: HeaderStateService) {
    const sub = headerState.preloader$.subscribe(
      preloader => {
        if (!preloader) {
          document.body.className += ' mp-loaded';
          sub.unsubscribe();
        }
      }
    );
  }
}
