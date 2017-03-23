import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from 'app/products.service';

import { Product } from 'app/product.model';

@Component({
  selector: 'app-product',
  providers: [ProductsService]
})
export class ProductComponent implements OnInit {
  @Input() products: Product[];
  @Input() pending:boolean;

  constructor(private productsService: ProductsService) {}

  ngOnInit() { this.getProducts(); }

  getProducts() {
      this.pending = true;
      this.productsService.getProducts()
                          .subscribe(products => {
                                        this.products = products;
                                        this.pending = false;
                                      },
                                      error => {this.pending = false;})
  }
}