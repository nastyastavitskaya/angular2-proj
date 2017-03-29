import { Product } from 'app/product.model';

export class CartProduct {
  constructor(
    public product: Product,
    public quantity: number){}
}