import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Product } from '../models/product';
import { CartItem } from '../models/cart-item';

@Component({
  selector: 'app-product-gallery',
  templateUrl: './product-gallery.component.html',
  styleUrls: ['./product-gallery.component.css']
})
export class ProductGalleryComponent implements OnInit {

  @Input()
  public product?:Product;

  @Output()
  public notify:EventEmitter<CartItem> = new EventEmitter<CartItem>();

  public reorderQuantity:number;

  constructor() { 
    this.reorderQuantity = 20;
  }

  ngOnInit(): void {
  }

  emitCartItem(product:Product, requiredQuantity:HTMLInputElement) {
    let quantity:number = +requiredQuantity.value;
    let cartItem:CartItem = { id: 0, product: product, requiredQuantity: quantity };
    this.notify.emit(cartItem);
    requiredQuantity.value = "";
  }

  validate(product:Product, requiredQuantity:HTMLInputElement, addButton:HTMLButtonElement) {
    addButton.disabled = product.quantity <= +requiredQuantity.value;
  }

  getDescriptionColor(source:string):string {
    switch(source) {
      case 'USA':
        return 'blue';
      case 'China':
        return 'red';
      case 'Malaysia':
        return 'green';
      default:
        return 'black';
    }
  }

}
