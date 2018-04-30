import { Component, OnInit } from '@angular/core';
import { AppFunction } from '../models/AppFunction';

@Component({
  selector: 'app-appfunctions',
  templateUrl: './appfunctions.component.html',
  styleUrls: ['./appfunctions.component.css']
})
export class AppfunctionsComponent implements OnInit {

  dropOverActive = false;
  droppedData = '';

  public activefunctions: AppFunction[] = [];

  public allfunctions: AppFunction[] = [
    {name: 'Add', params: [{name: 'p1'}, {name: 'p2'}]},
    {name: 'Subtract', params: [{name: 'p1'}, {name: 'p2'}]},
    {name: 'Foo', params: [{name: 'p1'}, {name: 'p2'}, {name: 'p3'}]},
    {name: 'Dosomething', params: [{name: 'p1'}]}
  ];

  constructor() { }

  ngOnInit() {
  }

  onDrop({ dropData }: { dropData: any }): void {
    this.dropOverActive = false;
    this.droppedData = dropData;

    this.activefunctions = [];

    switch (this.droppedData) {
      case 'Add': {
        this.activefunctions.push({name: this.droppedData, params: [{name: 'p1'}, {name: 'p2'}]});
         break;
      }
      case 'Subtract': {
        this.activefunctions.push({name: this.droppedData, params: [{name: 'p1'}, {name: 'p2'}]});
         break;
      }
      case 'Foo': {
        this.activefunctions.push({name: this.droppedData, params: [{name: 'p1'}, {name: 'p2'}, {name: 'p3'}]});
         break;
     }
     case 'Dosomething': {
      this.activefunctions.push({name: this.droppedData, params: [{name: 'p1'}]});
       break;
   }
      default: {
        this.activefunctions.push({name: this.droppedData, params: [{name: 'x'}, {name: 'y'}]});
         break;
      }
   }
  }

}
