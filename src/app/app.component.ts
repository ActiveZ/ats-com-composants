import { Component } from '@angular/core';
import { IDrink } from './models/drink-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ats-com-composants';

  burgers = 2;
  pizzas = 3;
  drink: IDrink = {
    name: 'soda',
    quantity: 2,
  };

  totalItems = 0;

  ngOnInit() {
    this.calculateTotalItems();
  }

  burgerChanged(count: number) {
    this.burgers = count;
    this.calculateTotalItems();
  }

  pizzaChanged(count: number) {
    this.pizzas = count;
    this.calculateTotalItems();
  }

  drinkChanged(drink: IDrink) {
    this.drink.quantity = drink.quantity;
    this.calculateTotalItems();
  }

  calculateTotalItems() {
    this.totalItems = this.burgers + this.pizzas + this.drink.quantity;
  }
}
