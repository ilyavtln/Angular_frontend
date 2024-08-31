import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { IHeroBanner } from "../../../core/interfaces/hero-banner.interface";
import { randomSlice } from "../../../core/functions/random-slice.function";
import { SPARES_LIST } from "@pages/spares/spares.config";
import { ActivatedRoute } from "@angular/router";
import { ViewportScroller } from "@angular/common";

@Component({
  selector: 'rshb-more-details',
  templateUrl: './more-details.component.html',
  styleUrls: ['./more-details.component.scss']
})
export class MoreDetailsComponent implements OnInit {
  filteredList = [...SPARES_LIST];
  fullList = [...SPARES_LIST];

  readonly SPARES_SLICED_LIST = randomSlice(SPARES_LIST, 6);

  protected BANNER: IHeroBanner = {
    title: 'Поиск среди товаров',
    description: '',
    state: 5,
    year: 2021,
    cost: 1000,
    image: '/assets/images/banners/search-page.png',
    chip: {
      title: 'Трактор'
    },
    anchors: [
      {
        title: 'Заказать товар',
        link: '/'
      }
    ]
  };

  constructor(
    private route: ActivatedRoute,
    private viewportScroller: ViewportScroller,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.viewportScroller.scrollToPosition([0, 0]);
      this.applyFilters(params);
      this.cd.detectChanges(); // Force change detection if needed
    });
  }

  applyFilters(params: any): void {
    const { name, year, state, supplier } = params;

    this.filteredList = [...this.fullList]; // Reset the filtered list

    if (name) {
      this.filteredList = this.filteredList.filter(item => item.name.toLowerCase().includes(name.toLowerCase()));
      this.BANNER.title = name;
    }

    if (year) {
      this.filteredList = this.filteredList.filter(item => item.year === parseInt(year, 10));
      this.BANNER.year = parseInt(year, 10);
    }

    if (state) {
      this.filteredList = this.filteredList.filter(item => item.state === parseInt(state, 10));
      this.BANNER.state = parseInt(state, 10);
    }

    if (supplier) {
      this.filteredList = this.filteredList.filter(item => item.supplier.toLowerCase().includes(supplier.toLowerCase()));
      // @ts-ignore
      this.BANNER.chip.title = supplier;
    }

    if (this.filteredList.length === 1) {
      const firstItem = this.filteredList[0];
      this.BANNER.description = firstItem.description || ''; // Ensure description is set if available
      this.BANNER.image = firstItem.image || ''; // Ensure image URL is set if available
    }
  }

  protected readonly SPARES_LIST = SPARES_LIST;
}
