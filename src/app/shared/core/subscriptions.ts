import { OnDestroy } from '@angular/core';
import { SubscriptionLike } from 'rxjs';

export class CoreSubscriptions implements OnDestroy {
  subscriptions: SubscriptionLike[];

  constructor() {
    this.subscriptions = [];
  }

  ngOnDestroy() {
    this.subscriptions.forEach((item: SubscriptionLike) => {
      item.unsubscribe();
    });

    this.subscriptions.length = 0;
  }
}
