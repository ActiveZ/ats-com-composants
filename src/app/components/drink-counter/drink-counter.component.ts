import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IDrink } from 'src/app/models/drink-interface';

@Component({
  selector: 'app-drink-counter',
  templateUrl: './drink-counter.component.html',
  styleUrls: ['./drink-counter.component.scss'],
})
export class drinkCounterComponent {
  @Input() drink!: IDrink;
  @Output() changed = new EventEmitter<IDrink>();

  inc() {
    this.drink.quantity++;
    this.changed.emit(this.drink);
  }
  
  dec() {
    this.drink.quantity > 0 ? this.drink.quantity-- : 0;
    this.changed.emit(this.drink);
  }
}
