import { Component, Inject } from '@angular/core';
import { SettingsService } from '../services';

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
  private sync: any;

  constructor(
    @Inject('db') private db: any,
    private settingsService: SettingsService
  ) { }

  ngOnInit() {
    this.settingsService.load()
      .subscribe(settings => {
        if (settings.syncUrl) {
          if (this.sync) { this.sync.cancel(); }
          this.sync = this.db.sync(settings.syncUrl, { live: true, retry: true });
        } else {
          if (!settings.syncUrl && this.sync) {
            this.sync.cancel();
            this.sync = undefined;
          }
        }
      });
  }
}
