import { Component, input } from '@angular/core';
import { CartItem } from '../../cart-entity';
import { calcCartItem } from '../../cart-utils';
import { elementAt } from 'rxjs';
import { cart } from '../../../cart-data';
@Component({
  selector: 'app-summary',
  imports: [],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.css',
})
items = input.required<CartItem[]>();
export class SummaryComponent {
    getTotalPrice(item :CartItem): CartItem{
      

  }
}
