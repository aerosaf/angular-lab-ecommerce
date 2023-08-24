import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { RegistrationComponent } from './registration/registration.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { LoginComponent } from './login/login.component';

// the path works on regular expression
// it will not do a exact match rather it does contains match
// route.equals('home'), route.contains('home')
// to do an exact match we will use pathMatch:full
export const routes:Routes = [
    { path:'home', component: ProductsComponent, pathMatch:'full' },
    { path:'shoppingcart', component: ShoppingCartComponent, pathMatch:'full' },
    { path:'registration', component:RegistrationComponent, pathMatch:'full' },
    { path:'login', component:LoginComponent, pathMatch:'full' }
]