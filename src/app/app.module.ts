import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { routes } from './router.config';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from './shared/shared.module';
import { CatalogModule } from './catalog/catalog.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    SharedModule,
    CatalogModule
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