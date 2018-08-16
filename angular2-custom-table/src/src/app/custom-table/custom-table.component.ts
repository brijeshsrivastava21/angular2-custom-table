import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.css']
})
export class CustomTableComponent implements OnInit {

   @Input() public content:any;
  constructor() { }

  ngOnInit() {
    console.log(this.content);
  }

}