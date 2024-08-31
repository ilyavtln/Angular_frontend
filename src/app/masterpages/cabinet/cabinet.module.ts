import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabinetComponent } from './cabinet.component';
import {NavigationModule} from "../../core/common-ui/navigation/navigation.module";
import {FooterModule} from "../../core/common-ui/footer/footer.module";
import {RouterModule, Routes} from "@angular/router";

const ROUTES: Routes = [
  {
    path: '',
    component: CabinetComponent,
  }
]

@NgModule({
  declarations: [
    CabinetComponent
  ],
  exports: [
    CabinetComponent,
  ],
  imports: [
    CommonModule,
    FooterModule,
    NavigationModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class CabinetModule { }
