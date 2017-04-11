import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ShoppingCartService } from 'app/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  totalQuantity: number;
  subscription: Subscription;

  constructor(private shoppingCartService: ShoppingCartService) {
    this.subscription = this.shoppingCartService.changeProductsQuantity$.subscribe(
      totalQuantity => {this.totalQuantity = totalQuantity}
    );
  }

  ngOnInit() { }

  ngOnDestroy() { this.subscription.unsubscribe(); }

}
