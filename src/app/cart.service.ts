import { Injectable } from '@angular/core';
import { Product } from 'app/product.model';

@Injectable()

export class ShoppingCartService {
  private products: Product[] = [];

  addProduct(product){
    console.log("product:", product);
    this.products.push(product);
    console.log("in cart:", this.products);
  }

  getProducts(){
    console.log(this.products);
    return this.products;
  }
}