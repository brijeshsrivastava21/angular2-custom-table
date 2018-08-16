import { Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  rows=[];
  headers=[];
  data ={
    headers:this.headers,
    rows:this.rows
  };
  age:number;
  name:string;
  header:string="HeaderTitle"; 
  content={ "headers": [ { "name": "Name" }, { "name": "Age" } ], "rows": [ { "name": "Brijesh", "age": 29 } ] };

  constructor() {
   
  }

  ngOnInit(){
     this.rows =  [
        {
          name: 'Brijesh',
          age: 29
        }
      ];
    this.headers.push({
      name: 'Name'
    },{
      name: 'Age'
    });
    this.data.rows=this.rows;
    this.data.headers=this.headers;
  }


   addRow(): void {
    this.data.rows.push({
      name: 'MyName',
      age: 0
    });
     this.headers.push({name:this.header});
  }
  
   addHeader():void{
   
  }

  changeContent(currentValue:any){
    this.content=JSON.parse(currentValue);
  }
  
  //  sendToGrid(): void {
  //   this.data;
  //   console.log(this.data);
  // }
}
