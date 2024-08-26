import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomePageComponent} from "@pages/home-page.component";

const ROUTES: Routes = [{
  path: '',
  component: HomePageComponent,
}]

@NgModule({
  declarations: [HomePageComponent],
  exports: [RouterModule],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class HomePageModule { }
