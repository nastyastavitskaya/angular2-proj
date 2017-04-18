import { Injectable }  from '@angular/core';
import { Subject }     from 'rxjs/Subject';
import { Product }     from 'app/product.model';
import { CartProduct } from './shopping-cart/cart-product.model';

@Injectable()

export class ShoppingCartService {
  private cartProducts: CartProduct[] = [];
  private totalPrice: number;

  private totalQuantity: number;
  private productsQuantitySource = new Subject<any>();
  changeProductsQuantity$ = this.productsQuantitySource.asObservable();

  addProduct(product: Product){
   let p = this.cartProducts.find(cartProduct => cartProduct.product.id === product.id);

    if(p) {
      p.quantity++;
      console.log('already in cart:', p.product.name, p.quantity);
    }
    else {
      this.addNewCartProduct(product)
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

  private addNewCartProduct(product: Product){
    let newCartProduct = new CartProduct(product, 1);
    this.cartProducts.push(newCartProduct);
    newCartProduct.quantity$.subscribe(_quantity => this.setTotalQuantity());
  }

  private setTotalQuantity() {
    this.totalQuantity = this.cartProducts.reduce((prev, curr: CartProduct) => {
      return prev + curr.quantity;
    }, 0);
    this.productsQuantitySource.next(this.totalQuantity);
    console.log('Total quantity:', this.totalQuantity);
  }

  private setTotalPrice(){
    this.totalPrice = this.cartProducts.reduce((sum, cartProduct) => {
      return sum += cartProduct.product.price * cartProduct.quantity, sum;
    }, 0);
    console.log('Total price:', this.totalPrice);
  }
}