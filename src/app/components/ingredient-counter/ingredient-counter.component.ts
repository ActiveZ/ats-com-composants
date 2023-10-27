import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IIngredient } from 'src/app/models/ingredient-interface';

@Component({
  selector: 'app-ingredient-counter',
  templateUrl: './ingredient-counter.component.html',
  styleUrls: ['./ingredient-counter.component.scss'],
})
export class IngredientCounterComponent {
  @Input() ingredient!: IIngredient;
  @Output() changed = new EventEmitter<IIngredient>();

  inc() {
    this.ingredient.val++;
    this.changed.emit(this.ingredient);
  }
  
  dec() {
    this.ingredient.val > 0 ? this.ingredient.val-- : 0;
    this.changed.emit(this.ingredient);
  }
}
