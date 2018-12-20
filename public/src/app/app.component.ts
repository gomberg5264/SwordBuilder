import { Component, OnInit } from '@angular/core';
import { SwordRenderService } from './sword-render.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // showingModal="hidden";
  // modalSubject:String;
  // trackingMouse = false;

  // mousePos = { x: 0, y: 0 };

  // cameraPresets = {
  //   armingSwordFull:{
  //     pos_x: 0,
  //     pos_y: 13,
  //     pos_z: 24,
  //     rot_x: 0,
  //     rot_y: 0,
  //     rot_z: 127,
  //   },
  //   armingSwordBlade:{
  //     pos_x: 21,
  //     pos_y: 33,
  //     pos_z: 21,
  //     rot_x: -22,
  //     rot_y: 15,
  //     rot_z: 194,
  //   },
  //   armingSwordGuard:{
  //     pos_x: 11,
  //     pos_y: 0,
  //     pos_z: 12,
  //     rot_x: 0,
  //     rot_y: 22,
  //     rot_z: 180,
  //   },
  //   armingSwordHilt:{
  //     pos_x: 11,
  //     pos_y: 0,
  //     pos_z: 12,
  //     rot_x: 0,
  //     rot_y: 22,
  //     rot_z: 180,
  //   },
  //   armingSwordPommel:{
  //     pos_x: 11,
  //     pos_y: 0,
  //     pos_z: 12,
  //     rot_x: 0,
  //     rot_y: 22,
  //     rot_z: 180,
  //   }
  // }

  // private canvasElementID = 'swordCanvas';

  //default sword
  // swordGeo = [
  //   'type-10-blade.obj',
  //   'style-1-guard.obj',
  //   "type-10-grip.obj",
  //   "type-a-pommel.obj"
  // ]

  constructor(
    // private swordServ: SwordRenderService
    ) { }

  ngOnInit() {
    // window.addEventListener('DOMContentLoaded', () => {
    //   this.swordServ.createScene(this.canvasElementID, this.swordGeo);
    // });
  }

}