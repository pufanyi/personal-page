import { Component, ElementRef, input, viewChild } from '@angular/core';

@Component({
  selector: 'app-image-lightbox',
  templateUrl: './image-lightbox.html',
  styleUrl: './image-lightbox.css',
})
export class ImageLightboxComponent {
  readonly src = input.required<string>();
  readonly alt = input<string>('');
  readonly width = input<string | number>();
  readonly height = input<string | number>();
  readonly imgClass = input<string>('');

  private readonly dialog = viewChild.required<ElementRef<HTMLDialogElement>>('dialog');

  open() {
    this.dialog().nativeElement.showModal();
  }

  close() {
    this.dialog().nativeElement.close();
  }

  onBackdropClick(event: MouseEvent) {
    if (event.target === this.dialog().nativeElement) {
      this.close();
    }
  }
}
