import {
  Component,
  ElementRef,
  effect,
  inject,
  signal,
  viewChild,
  AfterViewInit,
} from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { SECTIONS } from '../../constants/sections';
import { ScrollSpyService } from '../../services/scroll-spy.service';
import { LanguageService, Lang } from '../../services/language.service';
import autoAnimate from '@formkit/auto-animate';
import { A11yModule } from '@angular/cdk/a11y';

const WIDE_QUERY = '(min-width: 1301px)';

const TOC_TITLE: Record<Lang, string> = { en: 'Contents', zh: '目录', ja: '目次' };

@Component({
  selector: 'app-table-of-contents',
  templateUrl: './table-of-contents.html',
  imports: [A11yModule],
})
export class TableOfContentsComponent implements AfterViewInit {
  readonly scrollSpy = inject(ScrollSpyService);
  readonly lang = inject(LanguageService).current;
  readonly open = signal(false);
  readonly sections = SECTIONS;
  readonly tocTitle = TOC_TITLE;

  private toggleBtn = viewChild<ElementRef>('toggleBtn');
  private tocContainer = viewChild<ElementRef>('tocContainer');

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

    const btn = this.toggleBtn()?.nativeElement;
    if (btn) autoAnimate(btn);

    const container = this.tocContainer()?.nativeElement;
    if (container) autoAnimate(container);
  }

  toggle(): void {
    this.open.update((v) => !v);
  }

  onLinkClick(): void {
    if (!this.isWide()) {
      this.open.set(false);
    }
  }
}
