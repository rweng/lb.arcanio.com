import { Component } from '@angular/core';
import { SyncService } from '../services';

@Component({
  selector: 'lb-app',
  template: `
    <lb-header></lb-header>
    
    <div class="container">
      <div class='row'>
        <div class='col-md-8 offset-md-2'>
          <router-outlet></router-outlet>
        </div>
      </div>
    </div>

    <ng2-notifications></ng2-notifications>
    `
})
export class AppComponent {
  constructor(
    private syncService: SyncService
  ) { }

  ngOnInit() {
    if (this.syncService.url) {
      this.syncService.connect();
    }
  }
}
