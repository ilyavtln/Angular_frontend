import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'rshb-collapsible-panel',
  templateUrl: './collapsible-panel.component.html',
  styleUrl: './collapsible-panel.component.scss'
})
export class CollapsiblePanelComponent implements OnInit{
  @Input() title: string = 'Тайтл';
  @Input() opened: boolean = false;

  isOpen: boolean = false;

  ngOnInit() {
    if (this.opened) {
      this.isOpen = true
    }
  }

  togglePanel() {
    this.isOpen = !this.isOpen;
  }
}
