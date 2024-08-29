import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { NavigationComponent } from './navigation.component';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {RshbLogoModule} from "../rshb-logo/rshb-logo.module";



@NgModule({
  declarations: [
    NavigationComponent
  ],
  exports: [
    NavigationComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    NgOptimizedImage,
    RshbLogoModule,
    RouterLinkActive
  ]
})
export class NavigationModule { }
