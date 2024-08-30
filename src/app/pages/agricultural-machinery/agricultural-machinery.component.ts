import { Component } from '@angular/core';
import * as content from './agricultural-machinery.config'

@Component({
  selector: 'rshb-agricultural-machinery',
  templateUrl: './agricultural-machinery.component.html',
  styleUrl: './agricultural-machinery.component.scss'
})
export class AgriculturalMachineryComponent {
  readonly content = content;
}
