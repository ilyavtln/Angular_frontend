import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import {RouterModule, Routes} from "@angular/router";
import {ScrollingTextModule} from "../../components/scrolling-text/scrolling-text.module";
import {FormsModule} from "@angular/forms";
import {ItemCardModule} from "../../components/item-card/item-card.module";
import {HeroBannerModule} from "../../components/hero-banner/hero-banner.module";
import {CollapsiblePanelModule} from "../../components/collapsible-panel/collapsible-panel.module";

const ROUTES: Routes = [{
  path: '',
  component: SearchComponent,
}]

@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    ScrollingTextModule,
    FormsModule,
    ItemCardModule,
    HeroBannerModule,
    CollapsiblePanelModule
  ]
})
export class SearchModule { }
