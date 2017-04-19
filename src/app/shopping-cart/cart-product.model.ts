import { Product } from 'app/product.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export class CartProduct {
  product: Product;

  private _quantity: number;

  set quantity(_quantity: number) {
    _quantity = Number(_quantity);
    this._quantitySource.next(_quantity);
    console.log('Quantity changed', _quantity);
  }

  get quantity():number {
    return this._quantitySource.getValue();
  }

  private _quantitySource = new BehaviorSubject<number>(0);
  quantity$ = this._quantitySource.asObservable();

  constructor(product: Product, quantity: number) {
    this.product = product;
    this.quantity = quantity;
  }
}


