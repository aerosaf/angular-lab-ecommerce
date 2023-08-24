import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProductGalleryComponent } from './product-gallery/product-gallery.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ShoppingCartItemComponent } from './shopping-cart-item/shopping-cart-item.component';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductGalleryComponent,
    ProductListComponent,
    ShoppingCartComponent,
    ShoppingCartItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ProductsComponent,
    ProductGalleryComponent,
    ProductListComponent,
    ShoppingCartComponent,
    ShoppingCartItemComponent
  ]
})
export class CatalogModule { }
