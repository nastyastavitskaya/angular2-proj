import { Injectable } from '@angular/core';
import { Product } from 'app/product.model';
import { CartProduct } from './shopping-cart/cart-product.model';

@Injectable()

export class ShoppingCartService {
  private cartProducts: CartProduct[] = [];
  private totalPrice: number;

  addProduct(product: Product){
   let p = this.cartProducts.find(cartProduct => cartProduct.product.id === product.id);

    if(p) {
      p.quantity++;
      console.log('already in cart:', p.product.name, p.quantity);
    }
    else {
      let cartProduct = new CartProduct(product, 1);
      this.cartProducts.push(cartProduct);
      console.log('added in cart:', cartProduct.product.name, cartProduct.quantity);
    }

    this.setTotalPrice();
  }

  getProducts(){
    console.log('in cart:', this.cartProducts);
    return this.cartProducts;
  }

  getTotalPrice(){
    return this.totalPrice;
  }

  private setTotalPrice(){
    this.totalPrice = this.cartProducts.reduce((sum, cartProduct) => {
      return sum += cartProduct.product.price * cartProduct.quantity, sum;
    }, 0);
    console.log('Total price:', this.totalPrice);
  }
}