import { Component } from '@angular/core';
import * as content from './configurator.config'

@Component({
  selector: 'rshb-configurator',
  templateUrl: './configurator.component.html',
  styleUrl: './configurator.component.scss'
})
export class ConfiguratorComponent {

  readonly content = content;
}
