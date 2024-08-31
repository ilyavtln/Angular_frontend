import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollapsiblePanelComponent } from './collapsible-panel.component';



@NgModule({
  declarations: [
    CollapsiblePanelComponent
  ],
  exports: [
    CollapsiblePanelComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CollapsiblePanelModule { }
