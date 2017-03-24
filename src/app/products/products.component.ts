import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'app/products.service';


import { Product } from 'app/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProductsService]
})
export class ProductsComponent implements OnInit {
  products=[];
  pending:boolean = false;

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