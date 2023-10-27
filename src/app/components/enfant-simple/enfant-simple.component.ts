import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-enfant-simple',
  templateUrl: './enfant-simple.component.html',
  styleUrls: ['./enfant-simple.component.scss']
})
export class EnfantSimpleComponent {
  @Input() name: string = "";
  @Input() val = 0;
}
