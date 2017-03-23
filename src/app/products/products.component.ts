import { Component } from '@angular/core';

import { Product } from 'app/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: Product[]=[];
  pending:boolean = false;
}