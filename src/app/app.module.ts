import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { routes } from './router.config';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { PageFooterComponent } from './page-footer/page-footer.component';
import { ProductsComponent } from './products/products.component';
import { ProductGalleryComponent } from './product-gallery/product-gallery.component';
import { ProductListComponent } from './product-list/product-list.component';
import { RegistrationComponent } from './registration/registration.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { LoginComponent } from './login/login.component';
import { GreetingPipe } from './pipes/greeting.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PageHeaderComponent,
    PageFooterComponent,
    ProductsComponent,
    ProductGalleryComponent,
    ProductListComponent,
    RegistrationComponent,
    ShoppingCartComponent,
    LoginComponent,
    GreetingPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// NgModule is a class decorator
// when somebody tries to create instance of AppModule
// the AppModule class is passed as an argument to NgModule function
// Now NgModule has full control over the AppModule constructor
// NgModule decorator also takes an object as parameter that object has 3 keys
// Every key is attached with an array