import { Component, inject, signal, AfterViewInit, OnInit, OnDestroy } from '@angular/core';
import { SECTIONS } from '../../constants/sections';
import { ScrollSpyService } from '../../services/scroll-spy.service';
import { IconComponent } from '../icon/icon';

const WIDE_QUERY = '(min-width: 1301px)';

@Component({
  selector: 'app-table-of-contents',
  imports: [IconComponent],
  templateUrl: './table-of-contents.html',
})
export class TableOfContentsComponent implements AfterViewInit, OnInit, OnDestroy {
  readonly scrollSpy = inject(ScrollSpyService);
  readonly open = signal(false);
  readonly isWide = signal(false);
  readonly sections = SECTIONS;

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
    this.scrollSpy.observe(this.sections.map(s => s.id));
  }

  toggle(): void {
    this.open.update(v => !v);
  }

  onLinkClick(): void {
    if (!this.isWide()) {
      this.open.set(false);
    }
  }
}
