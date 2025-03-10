import { Component, OnInit } from '@angular/core';
import { CrudService, Item } from './crud.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  items: Item[] = [];
  newItemName: string = '';
  itemToUpdateId: number = 0;
  itemToUpdateName: string = '';

  constructor(private crudService: CrudService) { }

  ngOnInit(): void {
    this.loadItems();
  }

  loadItems(): void {
    this.items = this.crudService.getItems();
  }

  addItem(): void {
    if (this.newItemName.trim()) {
      this.crudService.addItem({ id: Date.now(), name: this.newItemName });
      this.newItemName = '';
      this.loadItems();
    }
  }

  updateItem(): void {
    if (this.itemToUpdateId && this.itemToUpdateName.trim()) {
      this.crudService.updateItem(this.itemToUpdateId, { id: this.itemToUpdateId, name: this.itemToUpdateName });
      this.itemToUpdateId = 0;
      this.itemToUpdateName = '';
      this.loadItems();
    }
  }

  deleteItem(id: number): void {
    this.crudService.deleteItem(id);
    this.loadItems();
  }
}
