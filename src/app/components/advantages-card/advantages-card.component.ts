import {Component, Input} from '@angular/core';
import {IAdvantagesCard} from "../../core/interfaces/advantages-card.interface";

@Component({
  selector: 'rshb-advantages-card',
  templateUrl: './advantages-card.component.html',
  styleUrl: './advantages-card.component.scss'
})
export class AdvantagesCardComponent {
  @Input() card!: IAdvantagesCard;
}
