import { Component } from '@angular/core';
import { SPARES_LIST } from "@pages/spares/spares.config";
import { MACHINERY_LIST } from "@pages/agricultural-machinery/agricultural-machinery.config";
import * as content from './search.config';

@Component({
  selector: 'rshb-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  readonly content = content;

  public searchQuery: string = '';

  private fullList = [...MACHINERY_LIST, ...SPARES_LIST];

  public filteredList = [...this.fullList];

  applyFilters(): void {
    let tempList = [...this.fullList];

    if (this.searchQuery) {
      tempList = tempList.filter(item => item.name.toLowerCase().includes(this.searchQuery.toLowerCase()));
    }

    this.filteredList = tempList;
  }

  onSearchQueryChange(query: string): void {
    this.searchQuery = query;
    this.applyFilters();
  }
}
