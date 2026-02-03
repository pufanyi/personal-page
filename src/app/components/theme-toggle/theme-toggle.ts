import { Component, inject } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { IconComponent } from '../icon/icon';

@Component({
  selector: 'app-theme-toggle',
  imports: [IconComponent],
  templateUrl: './theme-toggle.html',
})
export class ThemeToggleComponent {
  readonly themeService = inject(ThemeService);
}
