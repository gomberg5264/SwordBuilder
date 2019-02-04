import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-admin-tools',
  templateUrl: './admin-tools.component.html',
  styleUrls: ['./admin-tools.component.css']
})
export class AdminToolsComponent implements OnInit {

  errors:any;
  partTypeList:any;

  constructor(
    private _db: DatabaseService,
  ) { }

  ngOnInit() {
    //partTypeList feeds strings for db request filtering to the components. Add more fields to array elements for more functionality, i.e. updating stuff in real time
    this.partTypeList=[
      {type:"blade"},
      {type:"guard"},
      {type:"grip"},
      {type:"pommel"}];
  }

}
