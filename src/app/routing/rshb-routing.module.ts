import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RshbMasterpageComponent } from "../masterpages/rshb-masterpage/rshb-masterpage.component";
import { RshbMasterpageModule } from "../masterpages/rshb-masterpage/rshb-masterpage.module";

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
        path: 'about',
        loadChildren: () => import('@pages/about/about.module').then(m => m.AboutModule)
      }
    ]
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
