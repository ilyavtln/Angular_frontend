import {Component} from '@angular/core';
import * as content from './home-page.config'
import {MACHINERY_LIST} from "@pages/agricultural-machinery/agricultural-machinery.config";
import {randomSlice} from "../core/functions/random-slice.function";
import {SPARES_LIST} from "@pages/spares/spares.config";

@Component({
  selector: 'rshb-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent{

  readonly content = content;
  readonly MACHINERY_SLICED_LIST = randomSlice(MACHINERY_LIST, 3);
  readonly SPARES_SLICED_LIST = randomSlice(SPARES_LIST, 3);
}
