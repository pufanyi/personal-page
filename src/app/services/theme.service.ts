import { Injectable, signal, effect } from '@angular/core';

type Theme = 'light' | 'dark';

function getInitialTheme(): Theme {
  const stored = localStorage.getItem('theme');
  if (stored === 'light' || stored === 'dark') return stored;
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
  return 'light';
}

@Injectable({ providedIn: 'root' })
export class ThemeService {
  readonly theme = signal<Theme>(getInitialTheme());

  constructor() {
    effect(() => {
      document.documentElement.setAttribute('data-theme', this.theme());
      localStorage.setItem('theme', this.theme());
    });
  }

  toggle(): void {
    this.theme.update((t) => (t === 'light' ? 'dark' : 'light'));
  }
}
