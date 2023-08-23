import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { CartItem } from '../models/cart-item';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  // public products:string[];
  public products:Product[];
  public reorderQuantity:number;
  // public lessQuantity:string;
  public colspan:number;
  public isGallery:boolean;
  public searchResults:Product[];
  public shoppingCart:CartItem[];

  constructor() { 
    this.reorderQuantity = 20;
    this.colspan = 2;
    this.isGallery = true;
    this.searchResults = [];
    this.shoppingCart = [];
    // this.lessQuantity = "lessQuantity"; // initialize the variable with css classname
    // this.products = ["Television", "Radio", "Laptop", "Tablet", "Bicycle", "Handphone"];
    this.products = [
      {
        id: 1,
        name: "Television",
        description: "To watch movies",
        quantity: 15,
        price: 1455.55,
        photo: "https://static.toiimg.com/thumb/msid-81429075,width-400,resizemode-4/81429075.jpg"
      },
      {
        id: 2,
        name: "Radio",
        description: "To listen music",
        quantity: 35,
        price: 428.75,
        photo: "https://cdn.dribbble.com/users/237893/screenshots/819450/birafmv2.png"
      },
      {
        id: 3,
        name: "Laptop",
        description: "To do work",
        quantity: 25,
        price: 4199.25,
        photo: "https://static.toiimg.com/thumb/msid-87976133,width-400,resizemode-4/87976133.jpg"
      },
      {
        id: 4,
        name: "Tablet",
        description: "To do presentation",
        quantity: 75,
        price: 2797.15,
        photo: "https://static.toiimg.com/thumb/msid-81306847,width-400,resizemode-4/81306847.jpg"
      },
      {
        id: 5,
        name: "Bicycle",
        description: "To travel",
        quantity: 55,
        price: 475.25,
        photo: "https://www.motoshark.com/wp-content/uploads/2019/07/dirt-bike-size-kids.jpg"
      },
      {
        id: 6,
        name: "Handphone",
        description: "To communicate",
        quantity: 35,
        price: 1234.55,
        photo: "https://i.insider.com/4edfcebe6bb3f7453a000009?width=600&format=jpeg&auto=webp"
      }
    ]
  }

  ngOnInit(): void {
  }

  changeView() {
    this.isGallery = !this.isGallery;
    // angular-re-render-now()
    // angular actually monitoring all your properties 
    // if any or your property gets modified this will trigger the re-render process
    // the DOM gets refreshed only the places where the particular property is used
    // it will not referesh the whole page
    // they are actually using the library zonejs to handle this change management
  }

  doSearch(event:Event) {
    let searchTextBox:HTMLInputElement = event.target as HTMLInputElement;
    let keyword:string = searchTextBox.value;
    if (keyword !== "") {
      let regExp:RegExp = new RegExp("^" + keyword, "i");
      this.searchResults = this.products.filter((product:Product) => {
        return regExp.test(product.name);
      })
    } else {
      this.searchResults = [];
    }
  }

  addToCart(product:Product, requiredQuantity:HTMLInputElement) {
    let quantity:number = +requiredQuantity.value;
    let cartItem:CartItem = { id: 0, product: product, requiredQuantity: quantity };
    this.shoppingCart.push(cartItem);
    requiredQuantity.value = "";
  }

  validate(product:Product, requiredQuantity:HTMLInputElement, addButton:HTMLButtonElement) {
    addButton.disabled = product.quantity <= +requiredQuantity.value;
  }
}