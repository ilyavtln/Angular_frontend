import { Component, Input, OnInit } from '@angular/core';
import { ITechnic } from '../../core/interfaces/technic.interface';
import { ISpare } from '../../core/interfaces/spare.interface';

@Component({
  selector: 'rshb-item-card',
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.scss'
})
export class ItemCardComponent {
  @Input() card!: ITechnic | ISpare;


  isSpareType(card: ITechnic | ISpare): card is ISpare {
    return (card as ISpare).compatibility !== undefined;
  }
}
