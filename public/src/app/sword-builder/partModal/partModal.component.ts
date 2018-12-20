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
  partList = [];
  resetSetup: [];
  listingBlades = false;

  constructor(
    private _partFetch: DatabaseService,
    private _swordServ: SwordRenderService  ) { }

  ngOnChanges() {
    this.partList=[];
    this.resetSetup=this.currentSetup;

    this.listingBlades=false;
    
    if (this.partType=="blade"){
      this.listingBlades=true
      this.partList = this._partFetch.getAllBlades().blades;
    }
    else if (this.partType=="guard"){
      this.partList = this._partFetch.getAllGuards().guards;
    }
    else if (this.partType=="grip"){
      this.partList = this._partFetch.getAllGrips().grips;
    }
    else if (this.partType=="pommel"){
      this.partList = this._partFetch.getAllPommels().pommels;
    }
    else {
      this.partList=[];
    }
    
  }
  
  fillOut(file){
    let idx: Number;
    if (this.partType=="blade"){idx=0}
    else if (this.partType=="guard"){idx=1}
    else if (this.partType=="grip"){idx=2}
    else {idx=3};
    this.currentSetup[`${idx}`]=file;


    console.log(this.currentSetup);
    this._swordServ.swordLoader(this.currentSetup);
    
  }
  closeModal(){
    this.partList=[];
    this.currentSetup=this.resetSetup;
    this.modalStat.emit('none');
  }

}
