import { Component } from '@angular/core';
import { IconComponent } from '../icon/icon';

@Component({
  selector: 'app-print-button',
  imports: [IconComponent],
  templateUrl: './print-button.html',
})
export class PrintButtonComponent {
  print(): void {
    window.print();
  }
}
