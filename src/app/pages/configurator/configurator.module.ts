import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfiguratorComponent } from './configurator.component';
import {RouterModule, Routes} from "@angular/router";

export const ROUTES :Routes = [
  { path: '', component: ConfiguratorComponent },
]

@NgModule({
  declarations: [
    ConfiguratorComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class ConfiguratorModule { }
