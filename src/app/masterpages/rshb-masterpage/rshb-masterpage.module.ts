import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RshbMasterpageComponent} from "./rshb-masterpage.component";
import {RouterModule} from "@angular/router";
import {NavigationModule} from "../../core/common-ui/navigation/navigation.module";
import {FooterModule} from "../../core/common-ui/footer/footer.module";


@NgModule({
  declarations: [RshbMasterpageComponent],
  exports: [RshbMasterpageComponent],
  imports: [
    CommonModule,
    RouterModule,
    NavigationModule,
    FooterModule
  ]
})
export class RshbMasterpageModule { }
