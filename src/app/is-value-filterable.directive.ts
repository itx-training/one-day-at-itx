import { Directive, Input, HostBinding, OnInit, Renderer2, ElementRef } from '@angular/core';
import { element } from 'protractor';

@Directive({
  selector: '[appIsValueFilterable]'
})

@HostBinding('disabled')

export class IsValueFilterableDirective implements OnInit {

  @Input() itemList: any;
  @Input() filterName: any;

  constructor(private renderer: Renderer2, private el: ElementRef) {
  }

  ngOnInit() {
    let found = false;
    console.log(this.itemList);

    this.itemList.forEach((elem: any) => {
      if (elem.color === this.filterName) {
        console.log(element);
        found = true;
      }
    });
    this.itemList.forEach((elem: any) => {
      if (elem.weight === this.filterName) {
        console.log(element);
        found = true;
      }
    });

    if (!found) {
      this.renderer.setAttribute(this.el.nativeElement, 'disabled', 'disabled');
    }
  }
}
