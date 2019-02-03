import { Component, OnInit, Input } from '@angular/core';
import { DatabaseService } from '../../database.service';

@Component({
  selector: 'app-partLister',
  templateUrl: './partLister.component.html',
  styleUrls: ['./partLister.component.css']
})
export class PartListerComponent implements OnInit {
  @Input() partType:string;
  partList:any;

  constructor(
    private _db: DatabaseService,
  ) { }

  ngOnInit() {
    let observe = this._db.getAllParts(this.partType);
    observe.subscribe(data=>{
      this.partList=data;
    });
  }

}
