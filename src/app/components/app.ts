import { Component } from '@angular/core';

@Component({
  selector: 'lb-app',
  template: `
    <lb-header></lb-header>
    
    <div class="container">
      <router-outlet></router-outlet>
    </div>
    `
})
export class AppComponent {
}
