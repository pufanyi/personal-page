import { Component, inject, signal, ElementRef, HostListener } from '@angular/core';
import { LanguageService, Lang } from '../../services/language.service';

@Component({
  selector: 'app-language-switcher',
  templateUrl: './language-switcher.html',
})
export class LanguageSwitcherComponent {
  readonly langService = inject(LanguageService);
  private readonly el = inject(ElementRef);
  readonly open = signal(false);

  readonly languages: { code: Lang; label: string }[] = [
    { code: 'en', label: 'English' },
    { code: 'zh', label: '中文' },
    { code: 'ja', label: '日本語' },
  ];

  toggle(): void {
    this.open.update((v) => !v);
  }

  select(lang: Lang): void {
    this.langService.set(lang);
    this.open.set(false);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    if (this.open() && !this.el.nativeElement.contains(event.target)) {
      this.open.set(false);
    }
  }
}
