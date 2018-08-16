import { Component, OnInit, Input, HostListener } from '@angular/core';

@Component({
  selector: 'sort',
  templateUrl: './sort-component.component.html',
  styleUrls: ['./sort-component.component.css']
})
export class SortComponentComponent implements OnInit {

   constructor() { this.sortDirection='asc';}

    @Input('sortable-column')
    columnName: string;

    @Input('sort-direction')
    sortDirection: string = '';

    @HostListener('click')
    sort() {
        this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    }

    ngOnInit() { }

}