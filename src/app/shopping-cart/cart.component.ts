import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'app/cart.service';
import { CartProduct } from './cart-product.model';
import { PopupService } from 'app/popup.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html'
})

export class ShoppingCartComponent implements OnInit {
  cartProducts = [];
  totalPrice: number;

  constructor(private cartService: ShoppingCartService, private popupService: PopupService) {}

  ngOnInit() {
    this.cartProducts = this.cartService.getProducts();
    this.totalPrice = this.cartService.getTotalPrice();
  }

  showCheckoutPopup(){
    this.popupService.doShow({type: "warning", text: "This functionality is not implemented..."});
  }
}
