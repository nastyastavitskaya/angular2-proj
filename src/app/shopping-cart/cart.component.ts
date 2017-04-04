import { Component, OnInit, ViewChild } from '@angular/core';
import { ShoppingCartService } from 'app/cart.service';
import { CartProduct } from './cart-product.model';
import { PopupComponent } from 'app/popup/popup.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html'
})

export class ShoppingCartComponent implements OnInit {
  cartProducts = [];
  totalPrice: number;

  @ViewChild(PopupComponent) popupComponent: PopupComponent

  constructor(private cartService: ShoppingCartService) {}

  ngOnInit() {
    this.cartProducts = this.cartService.getProducts();
    this.totalPrice = this.cartService.getTotalPrice();
  }

  showCheckoutPopup(){
    this.popupComponent.doShow({type: "warning", text: "This functionality is not implemented..."});
  }
}
