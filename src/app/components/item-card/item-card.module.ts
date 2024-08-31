import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemCardComponent } from './item-card.component';
import {ChipModule} from "../../core/common-ui/chip/chip.module";
import {RouterLink} from "@angular/router";



@NgModule({
  declarations: [
    ItemCardComponent
  ],
  exports: [
    ItemCardComponent
  ],
  imports: [
    CommonModule,
    ChipModule,
    RouterLink
  ]
})
export class ItemCardModule { }
