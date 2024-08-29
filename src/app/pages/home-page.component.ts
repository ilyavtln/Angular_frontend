import {Component, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'rshb-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnChanges {

  ngOnChanges(changes: SimpleChanges) {
    console.log(document.body.clientWidth);
  }
}
