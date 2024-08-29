import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RshbLogoComponent } from './rshb-logo.component';
import {RouterLink} from "@angular/router";



@NgModule({
  declarations: [
    RshbLogoComponent
  ],
  exports: [
    RshbLogoComponent
  ],
  imports: [
    CommonModule,
    RouterLink
  ]
})
export class RshbLogoModule { }
