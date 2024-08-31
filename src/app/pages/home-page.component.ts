import {Component} from '@angular/core';
import * as content from './home-page.config'
import {MACHINERY_LIST} from "@pages/agricultural-machinery/agricultural-machinery.config";
import {randomSlice} from "../core/functions/random-slice.function";

@Component({
  selector: 'rshb-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent{

  readonly content = content;
  readonly MACHINERY_SLICED_LIST = randomSlice(MACHINERY_LIST, 3);
}
