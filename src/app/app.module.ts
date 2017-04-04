import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AlertModule } from 'ng2-bootstrap/alert';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { ShoppingCartComponent } from './shopping-cart/cart.component';
import { PopupComponent } from './popup/popup.component';

import { APP_ROUTES } from './app.routes'
import { ShoppingCartService } from './cart.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProductsComponent,
    AboutComponent,
    ProductComponent,
    ShoppingCartComponent,
    PopupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(APP_ROUTES),
    AlertModule.forRoot()
  ],
  providers: [
    ShoppingCartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
