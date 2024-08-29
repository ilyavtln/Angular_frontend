import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomePageComponent} from "@pages/home-page.component";
import {ItemCardModule} from "../components/item-card/item-card.module";
import { AgriculturalMachineryComponent } from './agricultural-machinery/agricultural-machinery.component';
import {ScrollingTextModule} from "../components/scrolling-text/scrolling-text.module";

const ROUTES: Routes = [{
  path: '',
  component: HomePageComponent,
}]

@NgModule({
  declarations: [HomePageComponent],
  exports: [RouterModule],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    ItemCardModule,
    ScrollingTextModule
  ]
})
export class HomePageModule { }
