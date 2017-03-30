import { Product } from 'app/product.model';

export class CartProduct {
  public product: Product;
  public quantity: number;

  constructor(product: Product, quantity: number){
    this.product = product;
    this.quantity = quantity;
  }
}