import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'app/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProductsService]
})
export class ProductsComponent implements OnInit {

  constructor(private _productsService: ProductsService) { }

  ngOnInit() {
  }

}
