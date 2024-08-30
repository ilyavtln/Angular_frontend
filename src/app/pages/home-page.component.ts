import {Component} from '@angular/core';
import * as content from './home-page.config'

@Component({
  selector: 'rshb-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent{

  readonly content = content;
}
