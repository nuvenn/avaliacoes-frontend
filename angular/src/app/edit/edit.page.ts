import { Component } from '@angular/core';
import { legends } from '../names/nameslist';

@Component({
  selector: 'app-edit',
  templateUrl: 'edit.page.html',
  styleUrls: ['edit.page.scss']
})
export class EditPage {
  
  legends: Array<string> = [];
  onEditBoolean: boolean = false;

  constructor() {
    
  }

  ngOnInit() {
    this.legends = legends;
  }

  onEdit() {
    this.onEditBoolean = !this.onEditBoolean;
  }

}


