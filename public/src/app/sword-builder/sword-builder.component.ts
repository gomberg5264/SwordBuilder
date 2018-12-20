import { Component, OnInit } from '@angular/core';
import { SwordRenderService } from '../sword-render.service';

@Component({
  selector: 'app-sword-builder',
  templateUrl: './sword-builder.component.html',
  styleUrls: ['./sword-builder.component.css']
})
export class SwordBuilderComponent implements OnInit {

  showingModal="hidden";
  modalSubject:String;
  trackingMouse = false;

  mousePos = { x: 0, y: 0 };

  cameraPresets = {
    armingSwordFull:{
      pos_x: 0,
      pos_y: 13,
      pos_z: 24,
      rot_x: 0,
      rot_y: 0,
      rot_z: 127,
    },
    armingSwordBlade:{
      pos_x: 21,
      pos_y: 33,
      pos_z: 21,
      rot_x: -22,
      rot_y: 15,
      rot_z: 194,
    },
    armingSwordGuard:{
      pos_x: 11,
      pos_y: 0,
      pos_z: 12,
      rot_x: 0,
      rot_y: 22,
      rot_z: 180,
    },
    armingSwordHilt:{
      pos_x: 11,
      pos_y: 0,
      pos_z: 12,
      rot_x: 0,
      rot_y: 22,
      rot_z: 180,
    },
    armingSwordPommel:{
      pos_x: 11,
      pos_y: 0,
      pos_z: 12,
      rot_x: 0,
      rot_y: 22,
      rot_z: 180,
    }
  }

  private canvasElementID = 'swordCanvas';

  //default sword
  swordGeo = [
    'type-10-blade.obj',
    'style-1-guard.obj',
    "type-10-grip.obj",
    "type-a-pommel.obj"
  ]

  constructor(private swordServ: SwordRenderService) { }
  
  ngOnInit() {
    window.addEventListener('DOMContentLoaded', () => {
      this.swordServ.createScene(this.canvasElementID, this.swordGeo);
    });
  }

  cameraRotate(x, y, z) {
    this.swordServ.cameraRotate(x, y, z);
  }

  cameraMove(x, y, z) {
    this.swordServ.cameraMove(x, y, z);
  }

  mouseDrag($event) {
    this.trackingMouse = true;
    this.mousePos.x = $event.x;
    this.mousePos.y = $event.y;
  }

  mouseMove($event) {
    if (this.trackingMouse) {
      // console.log("X:"+$event.x);
      // console.log("Y:"+$event.y);
      let dist = $event.x - this.mousePos.x - $event.y + this.mousePos.y;
      this.mousePos.x = $event.x;
      this.mousePos.y = $event.y;
      this.swordServ.swordManualRotate(dist);
    }
  }

  mouseDrop($event) {
    this.trackingMouse = false;
    this.swordServ.spinControl();
    // this.mousePos.x=$event.x;
    // this.mousePos.y=$event.y;
  }

  hideModal(status:string){
    this.showingModal=status;
  }

  changeBlade(blade) {
    this.swordGeo[0] = blade;
    this.swordServ.swordLoader(this.swordGeo);
    this.modalSubject="blade"
    this.showingModal="block"
    this.swordServ.cameraSet(this.cameraPresets.armingSwordFull);
  }

  changeGuard(guard) {
    this.swordGeo[1] = guard;
    this.swordServ.swordLoader(this.swordGeo);
    this.swordServ.cameraSet(this.cameraPresets.armingSwordGuard);
  }

  changeGrip(grip) {
    this.swordGeo[2] = grip;
    this.swordServ.swordLoader(this.swordGeo);
  }

  changePommel(pommel) {
    this.swordGeo[3] = pommel;
    this.swordServ.swordLoader(this.swordGeo);
  }
}
