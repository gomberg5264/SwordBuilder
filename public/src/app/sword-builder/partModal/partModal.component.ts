import { Component, OnInit, Output,EventEmitter, Input, OnChanges } from '@angular/core';
import { DatabaseService } from '../../database.service';
import { SwordRenderService } from '../../sword-render.service';

@Component({
  selector: 'app-partModal',
  templateUrl: './partModal.component.html',
  styleUrls: ['./partModal.component.css']
})
export class PartModalComponent implements OnChanges {
  @Input() partType: string;
  @Input() currentSetup: [];
  @Output() modalStat = new EventEmitter();
  partList: any;
  resetSetup: [];
  listingBlades = false;

  constructor(
    private _partFetch: DatabaseService,
    private _swordServ: SwordRenderService  ) { }

  ngOnChanges() {
    this.partList=[];
    this.resetSetup=this.currentSetup;
    //this variable is for styling purposes
    this.listingBlades=(this.partType=="blade");
    //populate from DB.
    if (this.partType!=undefined){
      let observe = this._partFetch.getAllParts(this.partType);
      observe.subscribe(data=>{
        this.partList=data;
      });
    }
    
  }
  
  fillOut(file){
    let idx: Number;
    if (this.partType=="blade"){idx=0}
    else if (this.partType=="guard"){idx=1}
    else if (this.partType=="grip"){idx=2}
    else {idx=3};
    this.currentSetup[`${idx}`]=file.geometrySrc;

    let offset = null;
    if (this.partType=="grip"){
      offset=file.gripLength;
    }
    this._swordServ.swordLoader(this.currentSetup,offset);
    
  }
  closeModal(){
    // this.partList=[];
    this.currentSetup=this.resetSetup;
    this.modalStat.emit('none');
  }

}
