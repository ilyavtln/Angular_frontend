import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog.component';
import {RouterModule, Routes} from "@angular/router";

const ROUTES: Routes = [{
  path: '',
  component: CatalogComponent,
}]

@NgModule({
  declarations: [
    CatalogComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class CatalogModule { }
