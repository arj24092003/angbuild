import { Injectable } from '@angular/core';

export interface Item {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private items: Item[] = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' }
  ];

  constructor() { }

  getItems(): Item[] {
    return this.items;
  }

  getItem(id: number): Item | undefined {
    return this.items.find(item => item.id === id);
  }

  addItem(item: Item): void {
    this.items.push(item);
  }

  updateItem(id: number, updatedItem: Item): void {
    const index = this.items.findIndex(item => item.id === id);
    if (index !== -1) {
      this.items[index] = updatedItem;
    }
  }

  deleteItem(id: number): void {
    this.items = this.items.filter(item => item.id !== id);
  }
}
