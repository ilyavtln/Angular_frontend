import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { CarouselComponent } from './carousel.component';
import {RouterLink} from "@angular/router";

@NgModule({
  declarations: [CarouselComponent],
  imports: [CommonModule, NgOptimizedImage, RouterLink],
  exports: [CarouselComponent]
})
export class CarouselModule { }
