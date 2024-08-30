import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgriculturalMachineryComponent } from './agricultural-machinery.component';
import { RouterModule, Routes } from "@angular/router";
import {ChipModule} from "../../core/common-ui/chip/chip.module";
import {AdvantagesCardModule} from "../../components/advantages-card/advantages-card.module";
import {ItemCardModule} from "../../components/item-card/item-card.module";

const ROUTES: Routes = [
  {
    path: '',
    component: AgriculturalMachineryComponent,
  },
  {
    path: 'tractors',
    loadChildren: () => import('@pages/agricultural-machinery/tractors/tractors.module').then(m => m.TractorsModule)
  }
]

@NgModule({
  declarations: [
    AgriculturalMachineryComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    ChipModule,
    AdvantagesCardModule,
    ItemCardModule
  ]
})
export class AgriculturalMachineryModule { }
