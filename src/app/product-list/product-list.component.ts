import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Product } from '../models/product';
import { CartItem } from '../models/cart-item';

@Component({
  // selector: 'app-product-list', // html tag component
  // selector: '[app-product-list]',  // attribute component
  selector: '.app-product-list',  // css class component
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input()
  public product?: Product;

  @Input()
  public index?: number;

  @Output()
  public notify: EventEmitter<CartItem> = new EventEmitter<CartItem>();

  public reorderQuantity: number;

  constructor() {
    this.reorderQuantity = 20;
  }

  ngOnInit(): void {
  }

  emitCartItem(product: Product, requiredQuantity: HTMLInputElement) {
    let quantity: number = +requiredQuantity.value;
    let cartItem: CartItem = { id: 0, product: product, requiredQuantity: quantity };
    this.notify.emit(cartItem);
    requiredQuantity.value = "";
  }

  validate(product: Product, requiredQuantity: HTMLInputElement, addButton: HTMLButtonElement) {
    addButton.disabled = product.quantity <= +requiredQuantity.value;
  }

}
