import { Component, OnInit } from '@angular/core';
import { CartItem } from '../models/cart-item';
import { ShoppingCartService } from '../services/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  public shoppingCart:CartItem[];
  public shoppingCartService:ShoppingCartService;

  constructor(shoppingCartService:ShoppingCartService) {
    this.shoppingCart = [];
    this.shoppingCartService = shoppingCartService;
  }

  ngOnInit(): void {
    this.doList();
  }

  doList() {
    this.shoppingCartService.findAll().subscribe((shoppingCart:CartItem[]) => {
      this.shoppingCart = shoppingCart;
    })
  }

  update(cartItem:CartItem) {
    this.shoppingCartService.update(cartItem).subscribe(() => {
      this.doList();
    })
  }

  delete(cartItem:CartItem) {
    this.shoppingCartService.delete(cartItem.id).subscribe(() => {
      this.doList();
    })
  }

}