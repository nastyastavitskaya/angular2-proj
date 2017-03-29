import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'app/product.model';
import { ShoppingCartService } from 'app/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html'
})

export class ProductComponent {
  @Input() product: Product;

  constructor(private cartService: ShoppingCartService) {}

  addToCart() {
    this.cartService.addProduct(this.product)
    console.log('product component:', this.product.name)
  }
}