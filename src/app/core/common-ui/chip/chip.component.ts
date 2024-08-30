import {Component, Input} from '@angular/core';

@Component({
  selector: 'rshb-chip',
  templateUrl: './chip.component.html',
  styleUrl: './chip.component.scss'
})
export class ChipComponent {
  @Input() chip: string = 'Популярно';
  @Input() chipClass: string = 'default';
}
