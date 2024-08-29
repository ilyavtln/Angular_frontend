import {Component, OnInit} from '@angular/core';
import * as content from './navigation.config'

@Component({
  selector: 'rshb-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent implements OnInit {
  isMobile: boolean | undefined;

  readonly content = content;

  ngOnInit() {
    if (typeof window !== "undefined") {
      this.isMobile = window.screen.width < 768;
    }
  }
}
