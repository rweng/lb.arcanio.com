import { Component } from '@angular/core';

@Component({
  selector: 'lb-app',
  template: `
    <div class="container">
      <router-outlet></router-outlet>
    </div>
    `
})
export class AppComponent {
}