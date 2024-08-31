import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfiguratorComponent } from './configurator.component';
import {RouterModule, Routes} from "@angular/router";
import {HeroBannerModule} from "../../components/hero-banner/hero-banner.module";
import {FormsModule} from "@angular/forms";
import {ItemCardModule} from "../../components/item-card/item-card.module";

export const ROUTES :Routes = [
  { path: '', component: ConfiguratorComponent },
]

@NgModule({
  declarations: [
    ConfiguratorComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    HeroBannerModule,
    FormsModule,
    ItemCardModule
  ]
})
export class ConfiguratorModule { }
