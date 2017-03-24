import { Component, OnInit, Input } from '@angular/core';

import { Product } from 'app/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html'
})
export class ProductComponent {
  @Input() product: Product[];
  @Input() pending:boolean;
}