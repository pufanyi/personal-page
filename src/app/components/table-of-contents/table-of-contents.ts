import {
  Component,
  ElementRef,
  inject,
  signal,
  viewChild,
  AfterViewInit,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { SECTIONS } from '../../constants/sections';
import { ScrollSpyService } from '../../services/scroll-spy.service';
import { LanguageService, Lang } from '../../services/language.service';
import autoAnimate from '@formkit/auto-animate';

const WIDE_QUERY = '(min-width: 1301px)';

const TOC_TITLE: Record<Lang, string> = { en: 'Contents', zh: '目录', ja: '目次' };

@Component({
  selector: 'app-table-of-contents',
  templateUrl: './table-of-contents.html',
})
export class TableOfContentsComponent implements AfterViewInit, OnInit, OnDestroy {
  readonly scrollSpy = inject(ScrollSpyService);
  readonly lang = inject(LanguageService).current;
  readonly open = signal(false);
  readonly isWide = signal(false);
  readonly sections = SECTIONS;
  readonly tocTitle = TOC_TITLE;

  private toggleBtn = viewChild<ElementRef>('toggleBtn');
  private tocContainer = viewChild<ElementRef>('tocContainer');

  private mql = window.matchMedia(WIDE_QUERY);
  private onMediaChange = (e: MediaQueryListEvent) => {
    this.isWide.set(e.matches);
    this.open.set(e.matches);
  };

  ngOnInit(): void {
    this.isWide.set(this.mql.matches);
    this.open.set(this.mql.matches);
    this.mql.addEventListener('change', this.onMediaChange);
  }

  ngOnDestroy(): void {
    this.mql.removeEventListener('change', this.onMediaChange);
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
