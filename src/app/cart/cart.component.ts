import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'app/cart.service';
import { Product } from 'app/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  providers: [ShoppingCartService]
})

export class ShoppingCartComponent implements OnInit {
  products = [];

  constructor(private cartService: ShoppingCartService) {}

  ngOnInit() {
    this.products = this.cartService.getProducts();
  }
}
