import { Component, inject, signal, AfterViewInit } from '@angular/core';
import { SECTIONS } from '../../constants/sections';
import { ScrollSpyService } from '../../services/scroll-spy.service';
import { IconComponent } from '../icon/icon';

@Component({
  selector: 'app-table-of-contents',
  imports: [IconComponent],
  templateUrl: './table-of-contents.html',
})
export class TableOfContentsComponent implements AfterViewInit {
  readonly scrollSpy = inject(ScrollSpyService);
  readonly open = signal(false);
  readonly sections = SECTIONS;

  ngAfterViewInit(): void {
    this.scrollSpy.observe(this.sections.map(s => s.id));
  }

  toggle(): void {
    this.open.update(v => !v);
  }

  close(): void {
    this.open.set(false);
  }
}
