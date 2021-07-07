import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingBasketComponent } from './components/shopping-basket/shopping-basket.component';
import { BasketComponent } from './components/shopping-basket/basket/basket.component';
import { ProductListComponent } from './components/shopping-basket/product-list/product-list.component';
import { ProductItemComponent } from './components/shopping-basket/product-list/product-item/product-item.component';
import { BasketItemComponent } from './components/shopping-basket/basket/basket-item/basket-item.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingBasketComponent,
    BasketComponent,
    ProductListComponent,
    ProductItemComponent,
    BasketItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
