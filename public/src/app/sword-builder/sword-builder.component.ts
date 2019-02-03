import { Component, OnInit } from '@angular/core';
import { SwordRenderService } from '../sword-render.service';

@Component({
  selector: 'app-sword-builder',
  templateUrl: './sword-builder.component.html',
  styleUrls: ['./sword-builder.component.css']
})
export class SwordBuilderComponent implements OnInit {

  showingModal:String;
  modalSubject:String;
  trackingMouse = false;

  mousePos = { x: 0, y: 0 };

  cameraPresets = {
    armingSwordFull:{
      pos_x: 4,
      pos_y: -5,
      pos_z: 15,
      rot_x: 30,
      rot_y: 15,
      rot_z: -59,
    },
    armingSwordBlade:{
      pos_x: 24,
      pos_y: 17,
      pos_z: 22,
      rot_x: -8,
      rot_y: 22,
      rot_z: 165,
    },
    armingSwordGuard:{
      pos_x: 13,
      pos_y: 0,
      pos_z: 11,
      rot_x: 0,
      rot_y: 22,
      rot_z: 180,
    },
    armingSwordHilt:{
      pos_x: 9,
      pos_y: -4,
      pos_z: 7,
      rot_x: 0,
      rot_y: 22,
      rot_z: 180,
    },
    armingSwordPommel:{
      pos_x: 6,
      pos_y: -8,
      pos_z: 5,
      rot_x: 0,
      rot_y: 22,
      rot_z: 180,
    }
  }

  private canvasElementID = 'swordCanvas';

  //default sword
  swordGeo = [
    'blade-oak-type-10.obj',
    'guard-oak-style-1.obj',
    'grip-waisted-armingsword.obj',
    'pommel-oak-type-a.obj',
  ]
  gripOffset = 0;

  constructor(private _swordServ: SwordRenderService) { }
  
  ngOnInit() {
    
    this.showingModal="hidden";
    this._swordServ.createScene(this.canvasElementID, this.swordGeo);
    window.addEventListener('DOMContentLoaded', () => {
      console.log("INIT on swordbuilder");
    });
  }

  cameraRotate(x, y, z) {
    this._swordServ.cameraRotate(x, y, z);
  }

  cameraMove(x, y, z) {
    this._swordServ.cameraMove(x, y, z);
  }

  mouseDrag($event) {
    this.trackingMouse = true;
    this.mousePos.x = $event.x;
    this.mousePos.y = $event.y;
  }

  mouseMove($event) {
    if (this.trackingMouse) {
      let dist = $event.x - this.mousePos.x - $event.y + this.mousePos.y;
      this.mousePos.x = $event.x;
      this.mousePos.y = $event.y;
      this._swordServ.swordManualRotate(dist);
    }
  }

  mouseDrop($event) {
    this.trackingMouse = false;
    this._swordServ.spinControl();
  }

  hideModal(status:string){
    this.showingModal=status;
    this._swordServ.cameraSet(this.cameraPresets.armingSwordFull);
  }

  changeBlade(blade) {
    this.swordGeo[0] = blade;
    this.modalSubject="blade"
    this.showingModal="block"
    this._swordServ.cameraSet(this.cameraPresets.armingSwordBlade);
  }
  
  changeGuard(guard) {
    this.swordGeo[1] = guard;
    this.modalSubject="guard"
    this.showingModal="block"
    this._swordServ.cameraSet(this.cameraPresets.armingSwordGuard);
  }

  changeGrip(grip) {
    this.swordGeo[2] = grip;
    this.modalSubject="grip"
    this.showingModal="block"
    this._swordServ.cameraSet(this.cameraPresets.armingSwordHilt);

  }

  changePommel(pommel) {
    this.swordGeo[3] = pommel;
    this.modalSubject="pommel"
    this.showingModal="block"
    this._swordServ.cameraSet(this.cameraPresets.armingSwordPommel);

  }
}
