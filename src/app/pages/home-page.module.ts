import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomePageComponent} from "@pages/home-page.component";
import {ItemCardModule} from "../components/item-card/item-card.module";
import { AgriculturalMachineryComponent } from './agricultural-machinery/agricultural-machinery.component';

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
        ItemCardModule
    ]
})
export class HomePageModule { }
