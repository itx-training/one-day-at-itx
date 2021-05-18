import { Component, OnInit } from '@angular/core';
import { MockupService } from '../mockup.service';
import { KeyValue } from '@angular/common';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  //Filervalues
  public gruen = false;
  public rot = false;
  public five = false;
  public ten = false;

  public items: any[] = [];

  constructor(private mockService: MockupService) { }

  ngOnInit(): void {
    this.items = this.mockService.getList(this.filter);
  }

  // Preserve original property order
  originalOrder = (a: KeyValue<number, string>, b: KeyValue<number, string>): number => {
    return 0;
  }

}
