import { Directive, Input, HostBinding, OnInit, Renderer2, ElementRef, OnChanges } from '@angular/core';
import { element } from 'protractor';

@Directive({
  selector: '[appIsValueFilterable]'
})

export class IsValueFilterableDirective implements OnChanges {

  @Input() itemList: any;
  @Input() filterName: any;

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnChanges(): void {
    // Looks for the filterName, if not found disable element
    let found = false;
    for (const elem of this.itemList) {
      if (elem.color === this.filterName) {
        found = true;
      }
    }
    for (const elem of this.itemList) {
      if (elem.weight === this.filterName) {
        found = true;
      }
    }
    (this.el.nativeElement as HTMLButtonElement).disabled = found ? false : true;
  }
}
