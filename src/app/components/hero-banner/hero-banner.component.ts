import {Component, Input} from '@angular/core';
import {IHeroBanner} from "../../core/interfaces/hero-banner.interface";

@Component({
  selector: 'rshb-hero-banner',
  templateUrl: './hero-banner.component.html',
  styleUrl: './hero-banner.component.scss'
})
export class HeroBannerComponent {
  @Input() banner!: IHeroBanner;
}
