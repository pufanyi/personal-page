import { Injectable, signal, effect } from '@angular/core';

export type Lang = 'en' | 'zh' | 'ja';

function getInitialLang(): Lang {
  const stored = localStorage.getItem('lang');
  if (stored === 'en' || stored === 'zh' || stored === 'ja') return stored;
  const nav = navigator.language.toLowerCase();
  if (nav.startsWith('zh')) return 'zh';
  if (nav.startsWith('ja')) return 'ja';
  return 'en';
}

@Injectable({ providedIn: 'root' })
export class LanguageService {
  readonly current = signal<Lang>(getInitialLang());

  constructor() {
    effect(() => {
      const lang = this.current();
      document.documentElement.setAttribute('lang', lang);
      localStorage.setItem('lang', lang);
    });
  }

  set(lang: Lang): void {
    this.current.set(lang);
  }
}
