import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RshbMasterpageComponent } from "../masterpages/rshb-masterpage/rshb-masterpage.component";
import { RshbMasterpageModule } from "../masterpages/rshb-masterpage/rshb-masterpage.module";
import {ErrorComponent} from "../masterpages/error/error.component";

const RSHB_ROUTES: Routes = [
  {
    path: '',
    component: RshbMasterpageComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadChildren: () => import('@pages/home-page.module').then(m => m.HomePageModule)
      },
      {
        path: 'agricultural-machinery',
        loadChildren: () => import('@pages/agricultural-machinery/agricultural-machinery.module').then(m => m.AgriculturalMachineryModule)
      },
      {
        path: 'about',
        loadChildren: () => import('@pages/about/about.module').then(m => m.AboutModule)
      },
      {
        path: 'catalog',
        loadChildren: () => import('@pages/catalog/catalog.module').then(m => m.CatalogModule)
      }
    ]
  },
  {
    path: '**',
    component: ErrorComponent,
  }
];

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [
    RshbMasterpageModule,
    RouterModule.forChild(RSHB_ROUTES)
  ]
})
export class RshbRoutingModule { }
