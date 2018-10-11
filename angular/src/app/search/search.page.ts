import { Component } from '@angular/core';
import { legends } from '../names/nameslist';

@Component({
  selector: 'app-search',
  templateUrl: 'search.page.html',
  styleUrls: ['search.page.scss']
})
export class SearchPage {
  searchInput : string = '';
  legends: Array<string> = [];
  filteredLegends: Array<string> = [];

  ngOnInit() {
    this.legends = legends;
  }

  onSearch() {
    if(this.searchInput.length > 1) {
      this.filteredLegends = legends.filter( legend => {
        return legend.toLowerCase().includes(this.searchInput.toLowerCase());   
      });
    } else {
      this.filteredLegends = [];
    }
  }

}
