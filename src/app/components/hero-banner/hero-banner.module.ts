import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroBannerComponent } from './hero-banner.component';
import {ChipModule} from "../../core/common-ui/chip/chip.module";
import {RouterLink} from "@angular/router";



@NgModule({
  declarations: [
    HeroBannerComponent
  ],
  exports: [
    HeroBannerComponent
  ],
  imports: [
    CommonModule,
    ChipModule,
    RouterLink
  ]
})
export class HeroBannerModule { }
