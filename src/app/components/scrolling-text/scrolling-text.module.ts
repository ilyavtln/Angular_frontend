import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollingTextComponent } from './scrolling-text.component';



@NgModule({
  declarations: [
    ScrollingTextComponent
  ],
  exports: [
    ScrollingTextComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ScrollingTextModule { }
