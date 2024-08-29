import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SparesComponent } from './spares.component';
import {RouterModule, Routes} from "@angular/router";

const ROUTES: Routes = [{
  path: '',
  component: SparesComponent,
}]

@NgModule({
  declarations: [
    SparesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
  ]
})
export class SparesModule { }
