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
  allBlades:any;
  allGuards:any;
  allGrips:any;
  allPommels:any;

  constructor(
    private _db: DatabaseService,
  ) { }

  ngOnInit() {
    this.partTypeList=["blade","guard","grip","pommel"];
    console.log("initializing admin tools");
  }

}
