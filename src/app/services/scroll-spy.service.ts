import { Injectable, signal, OnDestroy } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ScrollSpyService implements OnDestroy {
  readonly activeId = signal<string | null>(null);
  private observer: IntersectionObserver | null = null;

  observe(ids: string[]): void {
    this.disconnect();
    if (ids.length > 0) {
      this.activeId.set(ids[0]);
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          this.activeId.set(visible[0].target.id);
        }
      },
      { rootMargin: '-80px 0px -60% 0px', threshold: 0 },
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) this.observer!.observe(el);
    });
  }

  private disconnect(): void {
    this.observer?.disconnect();
    this.observer = null;
  }

  ngOnDestroy(): void {
    this.disconnect();
  }
}
