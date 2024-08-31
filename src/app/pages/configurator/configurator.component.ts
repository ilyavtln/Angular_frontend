import { Component } from '@angular/core';
import * as content from './configurator.config';
import { MACHINERY_LIST } from '@pages/agricultural-machinery/agricultural-machinery.config';
import { SPARES_LIST } from '@pages/spares/spares.config';

@Component({
  selector: 'rshb-configurator',
  templateUrl: './configurator.component.html',
  styleUrls: ['./configurator.component.scss']
})
export class ConfiguratorComponent {

  readonly content = content;

  public machineryList = MACHINERY_LIST;
  public filteredMachineryList = [...this.machineryList];

  public sparesList = SPARES_LIST;
  public filteredSparesList = [...this.sparesList];

  activeBlock: string = 'machine';
  activeButton: string = 'machine';

  yearFromMachine: number | null = null;
  yearToMachine: number | null = null;
  stateFromMachine: number | null = null;
  stateToMachine: number | null = null;
  costFromMachine: number | null = null;
  costToMachine: number | null = null;

  yearFromSpares: number | null = null;
  yearToSpares: number | null = null;
  stateFromSpares: number | null = null;
  stateToSpares: number | null = null;
  costFromSpares: number | null = null;
  costToSpares: number | null = null;

  showBlock(block: string) {
    this.activeBlock = block;
    this.activeButton = block;
  }

  applyFiltersMachinery() {
    return this.filteredMachineryList.filter(item => {
      const yearMatches = (!this.yearFromMachine || item.year >= this.yearFromMachine) &&
        (!this.yearToMachine || item.year <= this.yearToMachine);
      const stateMatches = (!this.stateFromMachine || item.state >= this.stateFromMachine) &&
        (!this.stateToMachine || item.state <= this.stateToMachine);
      const costMatches = (!this.costFromMachine || item.cost >= this.costFromMachine) &&
        (!this.costToMachine || item.cost <= this.costToMachine);
      return yearMatches && stateMatches && costMatches;
    });
  }

  applyFiltersSpares() {
    return this.filteredSparesList.filter(item => {
      const yearMatches = (!this.yearFromSpares || item.year >= this.yearFromSpares) &&
        (!this.yearToSpares || item.year <= this.yearToSpares);
      const stateMatches = (!this.stateFromSpares || item.state >= this.stateFromSpares) &&
        (!this.stateToSpares || item.state <= this.stateToSpares);
      const costMatches = (!this.costFromSpares || item.cost >= this.costFromSpares) &&
        (!this.costToSpares || item.cost <= this.costToSpares);
      return yearMatches && stateMatches && costMatches;
    });
  }
}
