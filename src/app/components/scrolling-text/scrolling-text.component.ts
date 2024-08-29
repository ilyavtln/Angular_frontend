import { Component, Input } from '@angular/core';

@Component({
  selector: 'rshb-scrolling-text',
  templateUrl: './scrolling-text.component.html',
  styleUrl: './scrolling-text.component.scss'
})
export class ScrollingTextComponent {
  @Input() text: string = 'Самый большой и подробный выбор с/х техники и запчастей.';
  @Input() duration: string = '15s';
}
