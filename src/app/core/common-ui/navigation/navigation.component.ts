import {Component, OnInit} from '@angular/core';
import * as content from './navigation.config'

declare var bootstrap: any;

@Component({
  selector: 'rshb-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})

export class NavigationComponent implements OnInit {
  isMobile: boolean | undefined;
  isMenuOpen = false;

  readonly content = content;

  ngOnInit() {
    if (typeof window !== "undefined") {
      this.isMobile = window.screen.width < 768;
    }
  }

  closeOffcanvas() {
    const offcanvasElement = document.getElementById('offcanvasNavbar');
    if (offcanvasElement) {
      const bootstrapOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement);
      if (bootstrapOffcanvas) {
        bootstrapOffcanvas.hide();
      }
    }
  }
}
