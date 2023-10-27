import { Component } from '@angular/core';
import { IIngredient } from 'src/app/models/ingredient-interface';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent {
  burgers = 2;
  pizzas = 3;
  ingredient: IIngredient = {
    name: 'soda',
    val: 2,
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

  ingredientChanged(ingredient: IIngredient) {
    this.ingredient.val = ingredient.val;
    this.calculateTotalItems();
  }

  calculateTotalItems() {
    this.totalItems = this.burgers + this.pizzas + this.ingredient.val;
  }
}
