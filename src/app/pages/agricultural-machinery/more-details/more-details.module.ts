import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoreDetailsComponent } from './more-details.component';
import {RouterModule, Routes} from "@angular/router";
import {HeroBannerModule} from "../../../components/hero-banner/hero-banner.module";
import {ItemCardModule} from "../../../components/item-card/item-card.module";

const ROUTES: Routes = [
  {
    path: '',
    component: MoreDetailsComponent ,
  }
]

@NgModule({
  declarations: [
    MoreDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    HeroBannerModule,
    ItemCardModule,
  ]
})
export class MoreDetailsModule { }
