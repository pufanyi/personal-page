import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.html',
})
export class SectionComponent {
  readonly number = input.required<number>();
  readonly title = input.required<string>();
  readonly id = input<string>();

  sectionId = computed(() =>
    this.id() ?? this.title().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
  );
}
