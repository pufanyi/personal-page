import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
})
export class FooterComponent {
  readonly lastUpdated = new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
}
