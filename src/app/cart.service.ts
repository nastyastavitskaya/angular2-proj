import { Injectable } from '@angular/core';
import { Product } from 'app/product.model';
import { CartProduct } from './shopping-cart/cart-product.model';

@Injectable()

export class ShoppingCartService {
  private cartProducts: CartProduct[] = [];



  addProduct(product: Product){
    let cartProduct = new CartProduct(product, 1);

    let p = this.cartProducts.find(cartProduct => cartProduct.product.id === product.id);

    if(p) {
      p.quantity++;
      console.log('already in cart:', cartProduct.product.name, p.quantity);
    }
    else {
      this.cartProducts.push(cartProduct);
      console.log('added in cart:', cartProduct.product.name, cartProduct.quantity);
    }
  }

  getProducts(){
    console.log('in cart:', this.cartProducts);
    return this.cartProducts;
  }
}