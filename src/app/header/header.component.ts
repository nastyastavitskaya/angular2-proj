import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ShoppingCartService } from 'app/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  productsQuantity: number;
  subscription: Subscription;

  constructor(private shoppingCartService: ShoppingCartService) {
    this.subscription = this.shoppingCartService.changeProductsQuantity$.subscribe(
      productQuantity => {this.productsQuantity = productQuantity}
    );
  }

  ngOnInit() { }

  ngOnDestroy() { this.subscription.unsubscribe(); }

}
