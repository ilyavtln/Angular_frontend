import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TractorsComponent } from './tractors.component';
import {RouterModule, Routes} from "@angular/router";

const ROUTES: Routes = [{
  path: '',
  component: TractorsComponent,
}]

@NgModule({
  declarations: [
    TractorsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
  ]
})
export class TractorsModule { }
