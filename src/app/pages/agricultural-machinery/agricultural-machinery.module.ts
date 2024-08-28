import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgriculturalMachineryComponent } from './agricultural-machinery.component';
import { RouterModule, Routes } from "@angular/router";

const ROUTES: Routes = [
  {
    path: '',
    component: AgriculturalMachineryComponent,
  },
  {
    path: 'tractors',
    loadChildren: () => import('@pages/agricultural-machinery/tractors/tractors.module').then(m => m.TractorsModule)
  }
]

@NgModule({
  declarations: [
    AgriculturalMachineryComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class AgriculturalMachineryModule { }
