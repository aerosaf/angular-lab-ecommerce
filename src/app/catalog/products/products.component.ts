import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { CartItem } from '../../models/cart-item';
import { ProductService } from '../../services/product.service';
import { ShoppingCartService } from '../../services/shopping-cart.service';

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

  public productService:ProductService;
  public shoppingCartService:ShoppingCartService;

  constructor(productService:ProductService,
      shoppingCartService:ShoppingCartService) { 
    this.reorderQuantity = 20;
    this.colspan = 2;
    this.isGallery = true;
    this.searchResults = [];
    this.shoppingCart = [];
    // this.lessQuantity = "lessQuantity"; // initialize the variable with css classname
    // this.products = ["Television", "Radio", "Laptop", "Tablet", "Bicycle", "Handphone"];
    this.products = []
    this.productService = productService;
    this.shoppingCartService = shoppingCartService;
    // First of all this constructor is called by Angular Container (not by us)
    // Angular container create the instance of the component only one time
    // This constructor going to be executed only once
    // this.productService.findAll();
  }

  ngOnInit(): void {
    this.productService.findAll().subscribe((products:Product[]) => {
      this.products = products;
    })
    this.shoppingCartService.findAll().subscribe((cartItem:CartItem[]) => {
      this.shoppingCart = cartItem;
    })
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

  addToCart(cartItem:CartItem) {
    this.shoppingCartService.save(cartItem).subscribe((newCartItem:CartItem) => {
      this.shoppingCart.push(newCartItem);
    })
  }

  validate(product:Product, requiredQuantity:HTMLInputElement, addButton:HTMLButtonElement) {
    addButton.disabled = product.quantity <= +requiredQuantity.value;
  }

}
