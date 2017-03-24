import { Injectable } from '@angular/core';
import { Product } from 'app/product.model';

@Injectable()

export class ShoppingCartService {

  products: Product[];

  constructor () {
    this.products = [];
  }

  addProduct(product){
    this.products.push(product);
  }
}