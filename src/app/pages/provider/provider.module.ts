import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProviderComponent } from './provider.component';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {ItemCardModule} from "../../components/item-card/item-card.module";

const ROUTES: Routes = [{
  path: '',
  component: ProviderComponent,
}]


@NgModule({
  declarations: [
    ProviderComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    FormsModule,
    ItemCardModule
  ]
})
export class ProviderModule { }
