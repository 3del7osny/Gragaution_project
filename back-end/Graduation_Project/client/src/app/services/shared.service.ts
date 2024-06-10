import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Item } from '../model/item/item.module';

@Injectable({
  providedIn: 'root'
})
export class SharedService {


  private cart: Item[] = [];
  private cartSubject = new BehaviorSubject<Item[]>([]);

  constructor() { }

  addToCart(item: Item) {
    this.cart.push(item);
    this.cartSubject.next(this.cart);
  }

  getCart() {
    return this.cartSubject.asObservable();
  }
}
