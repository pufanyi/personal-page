import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { ImageLightboxComponent } from '../image-lightbox/image-lightbox';

@Component({
  selector: 'app-header',
  imports: [ImageLightboxComponent],
  templateUrl: './header.html',
})
export class HeaderComponent {
  protected readonly lang = inject(LanguageService).current;
}
