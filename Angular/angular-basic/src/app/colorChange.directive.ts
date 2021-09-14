import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[changeColor]',
})
export class ChangeColor {
  constructor(private elRef: ElementRef) {
    // elRef.nativeElement.style.background = 'red';
  }

  // @HostListener('mouseenter') onMouseEnter() {}
  @HostListener('click') onMouseClick() {
    this.elRef.nativeElement.style.background = 'grey';
  }
}
