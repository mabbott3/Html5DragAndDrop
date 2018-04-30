import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DragAndDropModule} from 'angular-draggable-droppable';


import { AppComponent } from './app.component';
import { AppfunctionsComponent } from './appfunctions/appfunctions.component';
import { InnerfunctionsComponent } from './innerfunctions/innerfunctions.component';


@NgModule({
  declarations: [
    AppComponent,
    AppfunctionsComponent,
    InnerfunctionsComponent
  ],
  imports: [
    BrowserModule,
    DragAndDropModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [InnerfunctionsComponent]
})
export class AppModule { }
