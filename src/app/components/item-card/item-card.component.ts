import {Component, Input, OnInit} from '@angular/core';
import {ITechnic} from "../../core/interfaces/technic.interface";
import {ISpare} from "../../core/interfaces/spare.interface";
import {MACHINERY_LIST} from "@pages/agricultural-machinery/agricultural-machinery.config";

@Component({
  selector: 'rshb-item-card',
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.scss'
})
export class ItemCardComponent implements OnInit {
  @Input() card!: ITechnic | ISpare;

  ngOnInit(): void {
    if (!this.card) {
      this.card = MACHINERY_LIST[0];
    }
  }
}
