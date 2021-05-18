import { Component, OnInit } from '@angular/core';
import { MockupService } from '../mockup.service';
import { KeyValue } from '@angular/common';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  // Filervalues
  public weight = { five: false, ten: false };
  public color = { red: false, green: false };

  // List Values
  public items: any[] = [];

  constructor(private mockService: MockupService) { }

  ngOnInit(): void {
    this.refreshValues({});
  }

  // Add Filters to filter
  public filter(): void {
    let filter = {};
    if (this.weight.five || this.weight.ten) {
      filter = { ...filter, ...{ weight: this.weight.five ? '5 kg' : '10 kg' } };
    }
    if (this.color.red || this.color.green) {
      filter = { ...filter, ...{ color: this.color.red ? 'rot' : 'grün' } };
    }
    this.refreshValues(filter);
  }

  // gets values from mockservice
  private refreshValues(filter: {}): void {
    this.items = this.mockService.getList(filter);
  }

  // Preserve original property order
  originalOrder = (a: KeyValue<number, string>, b: KeyValue<number, string>): number => {
    return 0;
  }
}
