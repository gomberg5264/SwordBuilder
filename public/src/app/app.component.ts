import { Component, OnInit } from '@angular/core';
import { SwordRenderService } from './sword-render.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Sword Builder';
  trackingMouse = false;
  mousePos = {x:0,y:0};
  private canvasElementID = 'swordCanvas';

  constructor(private swordServ: SwordRenderService) { }

  ngOnInit() {
    window.addEventListener('DOMContentLoaded', () => {
      this.swordServ.createScene(this.canvasElementID);
    });
  }

  cameraRotate(x,y,z){
    this.swordServ.cameraRotate(x,y,z);
  }

  cameraMove(x,y,z){
    this.swordServ.cameraMove(x,y,z);
  }

  mouseDrag($event){
    this.trackingMouse=true;
    this.mousePos.x=$event.x;
    this.mousePos.y=$event.y;
  }

  mouseMove($event){
    if (this.trackingMouse){
      // console.log("X:"+$event.x);
      // console.log("Y:"+$event.y);
      let dist = $event.x-this.mousePos.x-$event.y+this.mousePos.y;
      this.mousePos.x=$event.x;
      this.mousePos.y=$event.y;
      this.swordServ.swordRotate(dist);
      console.log(dist);
      
    }
  }

  mouseDrop($event){
    this.trackingMouse=false;
    // this.mousePos.x=$event.x;
    // this.mousePos.y=$event.y;
  }

}
