import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SparesComponent } from './spares.component';
import {RouterModule, Routes} from "@angular/router";
import {AdvantagesCardModule} from "../../components/advantages-card/advantages-card.module";
import {ChipModule} from "../../core/common-ui/chip/chip.module";
import {FormsModule} from "@angular/forms";
import {ItemCardModule} from "../../components/item-card/item-card.module";

const ROUTES: Routes = [
  {
    path: '',
    component: SparesComponent,
  },
  {
    path: 'more-details',
    loadChildren: () => import('./more-details/more-details.module').then(m => m.MoreDetailsModule),
  }
]

@NgModule({
  declarations: [
    SparesComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES),
        AdvantagesCardModule,
        ChipModule,
        FormsModule,
        ItemCardModule,
    ]
})
export class SparesModule { }
