import { Injectable } from '@angular/core';
import { Product } from 'app/product.model';
import { CartProduct } from './shopping-cart/cart-product.model';

@Injectable()

export class ShoppingCartService {
  private cartProducts: CartProduct[] = [];

  findProduct(cartProduct) {
    return cartProduct.id == 1;
  }

  addProduct(cartProduct){
    this.cartProducts.push(cartProduct);
    console.log("in cart:", cartProduct.id, cartProduct.name);
    console.log('BOOM', this.cartProducts.find(this.findProduct));
  }

  getProducts(){
    console.log(this.cartProducts);
    return this.cartProducts;
  }
}