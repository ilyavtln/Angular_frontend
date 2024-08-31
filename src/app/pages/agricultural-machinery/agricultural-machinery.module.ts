import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgriculturalMachineryComponent } from './agricultural-machinery.component';
import { RouterModule, Routes } from "@angular/router";
import {ChipModule} from "../../core/common-ui/chip/chip.module";
import {AdvantagesCardModule} from "../../components/advantages-card/advantages-card.module";
import {ItemCardModule} from "../../components/item-card/item-card.module";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatAutocomplete, MatAutocompleteTrigger, MatOption} from "@angular/material/autocomplete";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInput} from "@angular/material/input";

const ROUTES: Routes = [
  {
    path: '',
    component: AgriculturalMachineryComponent,
  },
  {
    path: 'more-details',
    loadChildren: () => import('./more-details/more-details.module').then(m => m.MoreDetailsModule),
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
    ItemCardModule,
    MatFormField,
    MatAutocomplete,
    MatOption,
    MatAutocompleteTrigger,
    ReactiveFormsModule,
    MatInput,
    MatLabel,
    FormsModule
  ]
})
export class AgriculturalMachineryModule { }
