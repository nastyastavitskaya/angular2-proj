import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'app/cart.service';
import { CartProduct } from './cart-product.model';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html'
})

export class ShoppingCartComponent implements OnInit {
  cartProducts = [];

  constructor(private cartService: ShoppingCartService) {}

  ngOnInit() {
    this.cartProducts = this.cartService.getProducts();
  }
}