import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemCardComponent } from './item-card.component';
import {ChipModule} from "../../core/common-ui/chip/chip.module";



@NgModule({
  declarations: [
    ItemCardComponent
  ],
  exports: [
    ItemCardComponent
  ],
  imports: [
    CommonModule,
    ChipModule
  ]
})
export class ItemCardModule { }
