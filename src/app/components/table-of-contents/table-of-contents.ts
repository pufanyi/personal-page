import { Component, effect, inject, signal, AfterViewInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { SECTIONS } from '../../constants/sections';
import { ScrollSpyService } from '../../services/scroll-spy.service';
import { LanguageService, Lang } from '../../services/language.service';
import { A11yModule } from '@angular/cdk/a11y';
import { AutoAnimateDirective } from '../../directives/auto-animate';

const WIDE_QUERY = '(min-width: 1301px)';

const TOC_TITLE: Record<Lang, string> = { en: 'Contents', zh: '目录', ja: '目次' };

@Component({
  selector: 'app-table-of-contents',
  templateUrl: './table-of-contents.html',
  imports: [A11yModule, AutoAnimateDirective],
})
export class TableOfContentsComponent implements AfterViewInit {
  readonly scrollSpy = inject(ScrollSpyService);
  readonly lang = inject(LanguageService).current;
  readonly open = signal(false);
  readonly sections = SECTIONS;
  readonly tocTitle = TOC_TITLE;

  readonly isWide = toSignal(
    inject(BreakpointObserver)
      .observe(WIDE_QUERY)
      .pipe(map((state) => state.matches)),
    { initialValue: false },
  );

  constructor() {
    effect(() => {
      this.open.set(this.isWide());
    });
  }

  ngAfterViewInit(): void {
    this.scrollSpy.observe(this.sections.map((s) => s.id));
  }

  toggle(): void {
    this.open.update((v) => !v);
  }

  navigateTo(id: string): void {
    const el = document.getElementById(id);
    if (el) {
      this.smoothScrollTo(el);
      history.replaceState(null, '', `#${id}`);
    }

    if (!this.isWide()) {
      setTimeout(() => this.open.set(false), 150);
    }
  }

  private smoothScrollTo(el: HTMLElement): void {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.scrollIntoView();
      return;
    }

    try {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } catch {
      const y = el.getBoundingClientRect().top + window.scrollY;
      window.scrollTo(0, y);
    }
  }
}
