import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {RshbLogoModule} from "../rshb-logo/rshb-logo.module";



@NgModule({
  declarations: [
    FooterComponent
  ],
  exports: [
    FooterComponent
  ],
  imports: [
      CommonModule,
      RouterLink,
      RouterLinkActive,
      RshbLogoModule
  ]
})
export class FooterModule { }
