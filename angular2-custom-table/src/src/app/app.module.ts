import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomTableComponent } from './custom-table/custom-table.component';
import { SortComponentComponent } from './custom-table/sort/sort-component/sort-component.component';



@NgModule({
  imports: [BrowserModule, FormsModule, NgbModule],
  declarations: [AppComponent, HelloComponent, CustomTableComponent, SortComponentComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
