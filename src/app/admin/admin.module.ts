import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from './router.config';

import { ProductManagerComponent } from './product-manager/product-manager.component';

@NgModule({
  declarations: [
    ProductManagerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminModule { }
