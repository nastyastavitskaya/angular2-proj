import { Component, Input } from '@angular/core';

import { Product } from 'app/product.model';

@Component({
  selector: 'app-product'
})

export class ProductComponent {
  @Input() product: Product;
}