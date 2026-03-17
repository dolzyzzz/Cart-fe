import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { cart } from '../cart-data';
import { calcCartItem } from './cart-utils';
import { CartItem } from './cart-entity';
import { CartItemComponent} from '../app/components/cart-item/cart-item.component'
import { SummaryComponent } from "./components/summary/summary.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [FormsModule, CartItemComponent, SummaryComponent]
})
export class App {
  protected readonly title = signal('cart-fe');
  items = cart;

}
