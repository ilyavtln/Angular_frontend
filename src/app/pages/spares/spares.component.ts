import { Component } from '@angular/core';
import * as content from './spares.config'

@Component({
  selector: 'rshb-spares',
  templateUrl: './spares.component.html',
  styleUrl: './spares.component.scss'
})
export class SparesComponent {
  readonly content = content;

  showOptimal: boolean = false;

  public machineryList = content.MACHINERY_LIST;
  public filteredList = [...content.MACHINERY_LIST];
  public selectedCategory: string = 'Все';
  public selectedSortBy: string = 'Не важно';
  public selectedSortOrder: string = 'Не важно';
  public searchQuery: string = '';
  public optimalItem: any = null;

  applyFilters(): void {
    this.showOptimal = false
    let tempList = [...this.machineryList];

    if (this.selectedCategory !== 'Все') {
      tempList = tempList.filter(item => item.type === this.selectedCategory);
    }

    if (this.searchQuery) {
      tempList = tempList.filter(item => item.name.toLowerCase().includes(this.searchQuery.toLowerCase()));
    }

    if (this.selectedSortBy === 'Цена') {
      if (this.selectedSortOrder === 'asc') {
        tempList.sort((a, b) => a.cost - b.cost);
      } else if (this.selectedSortOrder === 'desc') {
        tempList.sort((a, b) => b.cost - a.cost);
      }
    } else if (this.selectedSortBy === 'Год') {
      if (this.selectedSortOrder === 'asc') {
        tempList.sort((a, b) => a.year - b.year);
      } else if (this.selectedSortOrder === 'desc') {
        tempList.sort((a, b) => b.year - a.year);
      }
    }

    this.filteredList = tempList;
  }

  onSearchQueryChange(query: string): void {
    this.searchQuery = query;
    this.applyFilters();
  }

  findOptimalItem(): void {
    let itemsToConsider = this.filteredList;

    if (itemsToConsider.length === 0) return;

    // Определяем средние значения
    const minPrice = Math.min(...itemsToConsider.map(item => item.cost));
    const maxPrice = Math.max(...itemsToConsider.map(item => item.cost));
    const avgPrice = (minPrice + maxPrice) / 2;

    const minYear = Math.min(...itemsToConsider.map(item => item.year));
    const maxYear = Math.max(...itemsToConsider.map(item => item.year));
    const avgYear = (minYear + maxYear) / 2;

    const minState = Math.min(...itemsToConsider.map(item => item.state));
    const maxState = Math.max(...itemsToConsider.map(item => item.state));
    const avgState = (minState + maxState) / 2;

    // Находим оптимальный товар
    this.optimalItem = itemsToConsider.reduce((prev, curr) => {
      const prevScore = Math.abs(avgPrice - prev.cost) + Math.abs(avgYear - prev.year) + Math.abs(avgState - prev.state);
      const currScore = Math.abs(avgPrice - curr.cost) + Math.abs(avgYear - curr.year) + Math.abs(avgState - curr.state);
      return currScore < prevScore ? curr : prev;
    });

    this.showOptimal = true;
  }

  resetOptimalItem() {
    this.showOptimal = false
  }
}
