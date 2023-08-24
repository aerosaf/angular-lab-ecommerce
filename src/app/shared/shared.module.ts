import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { PageHeaderComponent } from './page-header/page-header.component';
import { PageFooterComponent } from './page-footer/page-footer.component';
import { GreetingComponent } from './greeting/greeting.component';
import { GreetingPipe } from './pipes/greeting.pipe';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

@NgModule({
  declarations: [
    PageHeaderComponent,
    PageFooterComponent,
    GreetingComponent,
    GreetingPipe,
    MenuComponent,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    PageHeaderComponent,
    PageFooterComponent,
    GreetingComponent,
    GreetingPipe,
    MenuComponent,
    LoginComponent,
    RegistrationComponent    
  ]
})
export class SharedModule { }
