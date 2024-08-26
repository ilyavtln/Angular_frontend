import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const APP_ROUTES: Routes = [
  {
    path: '',
    loadChildren: () => import('./rshb-routing.module').then(m => m.RshbRoutingModule)
  }
];

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [RouterModule.forRoot(APP_ROUTES)]
})
export class AppRoutingModule { }
