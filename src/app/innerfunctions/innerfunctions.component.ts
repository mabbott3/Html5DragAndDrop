import { Component, OnInit, Input } from '@angular/core';
import { AppFunction } from '../models/AppFunction';

@Component({
  selector: 'app-innerfunctions',
  templateUrl: './innerfunctions.component.html',
  styleUrls: ['./innerfunctions.component.css']
})
export class InnerfunctionsComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('parentData') public activefunctions;
  parmDropOverActive = false;
  droppedData = '';

  public innerActivefunctions: AppFunction[] = [];

  constructor() { }

  ngOnInit() {
  }

  // this was for the bonus inner recursive drop, but would take more time to get working so it's not being used
  onDropInner({ dropData }: { dropData: any }): void {
    this.parmDropOverActive = false;
    this.droppedData = dropData;

    this.innerActivefunctions = [];

    switch (this.droppedData) {
      case 'Add': {
        this.innerActivefunctions.push({name: this.droppedData, params: [{name: 'p1'}, {name: 'p2'}]});
         break;
      }
      case 'Subtract': {
        this.innerActivefunctions.push({name: this.droppedData, params: [{name: 'p1'}, {name: 'p2'}]});
         break;
      }
      case 'Foo': {
        this.innerActivefunctions.push({name: this.droppedData, params: [{name: 'p1'}, {name: 'p2'}, {name: 'p3'}]});
         break;
     }
     case 'Dosomething': {
      this.innerActivefunctions.push({name: this.droppedData, params: [{name: 'p1'}]});
       break;
   }
      default: {
        this.innerActivefunctions.push({name: this.droppedData, params: [{name: 'x'}, {name: 'y'}]});
         break;
      }
   }
  }

}
