import { Component, inject, signal } from '@angular/core';
import { LanguageService, Lang } from '../../services/language.service';

@Component({
  selector: 'app-language-switcher',
  templateUrl: './language-switcher.html',
})
export class LanguageSwitcherComponent {
  readonly langService = inject(LanguageService);
  readonly open = signal(false);

  readonly languages: { code: Lang; label: string }[] = [
    { code: 'en', label: 'English' },
    { code: 'zh', label: '中文' },
    { code: 'ja', label: '日本語' },
  ];

  show(): void {
    this.open.set(true);
  }

  hide(): void {
    this.open.set(false);
  }

  select(lang: Lang): void {
    this.langService.set(lang);
    this.open.set(false);
  }
}
