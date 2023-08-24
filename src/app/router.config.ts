import { Routes } from '@angular/router';
import { ProductsComponent } from './catalog/products/products.component';
import { RegistrationComponent } from './shared/registration/registration.component';
import { ShoppingCartComponent } from './catalog/shopping-cart/shopping-cart.component';
import { LoginComponent } from './shared/login/login.component';

// the path works on regular expression
// it will not do a exact match rather it does contains match
// route.equals('home'), route.contains('home')
// to do an exact match we will use pathMatch:full
export const routes:Routes = [
    { path:'home', component: ProductsComponent, pathMatch:'full' },
    { path:'shoppingcart', component: ShoppingCartComponent, pathMatch:'full' },
    { path:'registration', component:RegistrationComponent, pathMatch:'full' },
    { path:'login', component:LoginComponent, pathMatch:'full' },
    { path:'productmanager', loadChildren: () => import('./admin/admin.module').then((module) => module.AdminModule) },
    { path:'', redirectTo:'home', pathMatch:'full' }
    
]

// the following is static import using import from keyword
// import { ProductsComponent } from './catalog/products/products.component';
/*
let loadChildren = () => {
    // import dynamically using import function
    // import function returns a promise (manages asynchroous code)
    // Let us subscribe to a promise using "then" method
    return import('./admin/admin.module').then((module) => {
        return module.AdminModule;
    })
}
*/

// let us simplify the inner function
/*
let loadChildren = () => {
    return import('./admin/admin.module').then((module) => module.AdminModule)
}
*/

// let us simplify the outer function
// let loadChildren = () => import('./admin/admin.module').then((module) => module.AdminModule)

