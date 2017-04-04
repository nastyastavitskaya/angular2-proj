import { Component, OnInit, ViewChild } from '@angular/core';
import { ShoppingCartService } from 'app/cart.service';
import { CartProduct } from './cart-product.model';
import { PopupComponent } from 'app/popup/popup.component';
import { Popup } from 'app/popup/popup.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html'
})

export class ShoppingCartComponent implements OnInit {
  cartProducts = [];
  totalPrice: number;

  @ViewChild(PopupComponent) popupComponent: PopupComponent
  checkoutPopup = new Popup({type: "warning", text: "This functionality is not implemented..."});

  constructor(private cartService: ShoppingCartService) {}

  ngOnInit() {
    this.cartProducts = this.cartService.getProducts();
    this.totalPrice = this.cartService.getTotalPrice();
  }

  showCheckoutPopup(){
    this.popupComponent.doShow(this.checkoutPopup);
  }
}
