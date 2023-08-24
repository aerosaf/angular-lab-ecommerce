import { Routes } from '@angular/router';
import { ProductManagerComponent } from './product-manager/product-manager.component';

export const routes:Routes = [
    { path:'productmanager', component: ProductManagerComponent  },
    { path:'', redirectTo:'productmanager', pathMatch:'full' }
]