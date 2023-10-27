import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-enfant-counter',
  templateUrl: './enfant-counter.component.html',
  styleUrls: ['./enfant-counter.component.scss']
})
export class EnfantCounterComponent {
  @Input() name: string = "";
  @Input() val = 0;
  @Output() changed = new EventEmitter<number>()


  inc() {
    this.changed.emit(this.val + 1);
  }

  dec() {
    this.changed.emit(this.val > 0 ? this.val - 1 : 0);
  }
}


