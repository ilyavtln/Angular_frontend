import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MACHINERY_LIST} from "@pages/agricultural-machinery/agricultural-machinery.config";
import {SPARES_LIST} from "@pages/spares/spares.config";

@Component({
  selector: 'rshb-provider',
  templateUrl: './provider.component.html',
  styleUrl: './provider.component.scss'
})
export class ProviderComponent implements OnInit{
  private fullList = [...MACHINERY_LIST, ...SPARES_LIST];
  filteredList = [...this.fullList];
  param: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const name = this.route.snapshot.queryParamMap.get('name');

    if (name !== null) {
      this.filteredList = this.fullList.filter(item => item.supplier.toLowerCase().includes(name?.toLowerCase()));
      this.param = name;
    }
  }
}
