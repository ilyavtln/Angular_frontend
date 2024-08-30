import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvantagesCardComponent } from './advantages-card.component';



@NgModule({
  declarations: [
    AdvantagesCardComponent
  ],
  exports: [
    AdvantagesCardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdvantagesCardModule { }
