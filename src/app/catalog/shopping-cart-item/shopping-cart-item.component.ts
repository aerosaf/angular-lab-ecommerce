import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { CartItem } from '../../models/cart-item';
import { ShoppingCartService } from '../../services/shopping-cart.service';

@Component({
  selector: '.app-shopping-cart-item',
  templateUrl: './shopping-cart-item.component.html',
  styleUrls: ['./shopping-cart-item.component.css']
})
export class ShoppingCartItemComponent implements OnInit {

  @Input()
  public cartItem?:CartItem

  @Input()
  public index?:number;

  @Output()
  public updateNotify:EventEmitter<CartItem> = new EventEmitter<CartItem>();

  @Output()
  public deleteNotify:EventEmitter<CartItem> = new EventEmitter<CartItem>();

  constructor(private shoppingCartService:ShoppingCartService) { }

  ngOnInit(): void {
  }

  update(cartItem:CartItem, requiredQuantity:HTMLInputElement) {
    cartItem.requiredQuantity = +requiredQuantity.value;
    this.updateNotify.emit(cartItem);
  }

  delete(cartItem:CartItem) {
    this.deleteNotify.emit(cartItem);
  }

}
