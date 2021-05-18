import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MockupService {

  constructor() { }

  private products = [
    { 'id': 1, 'name': 'Produkt 1', 'description': 'Beschreibung 1', 'color': 'rot', 'weight': '5 kg' },
    { 'id': 2, 'name': 'Produkt 2', 'description': 'Beschreibung 2', 'color': 'grün', 'weight': '10 kg' },
    { 'id': 3, 'name': 'Produkt 3', 'description': 'Beschreibung 3', 'color': 'rot', 'weight': '10 kg' },
    { 'id': 4, 'name': 'Produkt 4', 'description': 'Beschreibung 4', 'color': 'rot', 'weight': '5 kg' },
    { 'id': 5, 'name': 'Produkt 5', 'description': 'Beschreibung 5', 'color': 'grün', 'weight': '10 kg' },
    { 'id': 6, 'name': 'Produkt 6', 'description': 'Beschreibung 6', 'color': 'grün', 'weight': '5 kg' },
    { 'id': 7, 'name': 'Produkt 7', 'description': 'Beschreibung 7', 'color': 'rot', 'weight': '5 kg' },
    { 'id': 8, 'name': 'Produkt 8', 'description': 'Beschreibung 8', 'color': 'grün', 'weight': '10 kg' },
    { 'id': 9, 'name': 'Produkt 9', 'description': 'Beschreibung 9', 'color': 'rot', 'weight': '10 kg' }
  ]

  public getList(filter: any): any[] {
    return this.products.filter((item: any) => {
      for (const key in filter) {
        if (item[key] === undefined || item[key] !== filter[key]) {
          return false;
        }
      }
      return true;
    });
  }
}
