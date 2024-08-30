import {Component, Inject, Input, PLATFORM_ID} from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import {ICarouselConfig} from "../../core/interfaces/carousel-config.interface";


@Component({
  selector: 'rshb-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  @Input() slides!: ICarouselConfig[];

  currentSlide = 0;

  constructor(@Inject(PLATFORM_ID) private platformId: any) {}

  // Проверяем, достигнут ли первый или последний слайд
  isFirstSlide(): boolean {
    return this.currentSlide === 0;
  }

  isLastSlide(): boolean {
    return this.currentSlide === this.slides.length - this.getSlidesPerView();
  }

  isCurrentLastSlide(index: number): boolean {
    console.log(index, this.currentSlide + this.getSlidesPerView())
    return index === (this.currentSlide + this.getSlidesPerView());
  }

  // Переход к следующему слайду
  nextSlide() {
    if (!this.isLastSlide()) {
      this.currentSlide++;
    }
  }

  // Переход к предыдущему слайду
  prevSlide() {
    if (!this.isFirstSlide()) {
      this.currentSlide--;
    }
  }

  getSlidesPerView(): number {
    if (isPlatformBrowser(this.platformId)) {
      const width = window.innerWidth;
      if (width >= 992) return 3; // lg
      if (width >= 768) return 2; // md
      return 1; // sm
    }
    return 1; // sm
  }

  getTransform(): string {
    const slideWidth = 100 / this.getSlidesPerView();
    return `translateX(-${this.currentSlide * slideWidth}%)`;
  }
}
