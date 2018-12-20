import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private bladeDB = [
      {
        swordType:"armingSword",
        purpose:"cutting",
        name:"Late 16th century cavalry blade",
        description:"A hollow-ground double-edged blade with a pronounced ricasso, fit for both cutting and thrusting",
        cost:500,
        maxLength: 35,
        minLength: 30,
        keyWords:["renaissance","16th century","cut-and-thrust","basket hilt","complex guard","saxony"],
        imageURL:"",
        geometrySrc:"cav-sidesword-blade.obj",
      },
      {
        swordType:"armingSword",
        purpose:"cutting",
        name:"Oakeshott Type X",
        description:"A direct descendant of the Viking Age swords this massive blade features a prominent fuller and a cut-centric blade profile",
        cost:500,
        maxLength: 35,
        minLength: 33,
        keyWords:["crusades","middle ages","medieval","gaddhjalt","chopper","arming","knightly","10th century", "11th century"],
        imageURL:"",
        geometrySrc:"type-10-blade.obj",
      },
  ]

  private guardDB = [
    {
      swordType:"armingSword",
      name:"Oakeshott Style 1 crossguard",
      description:"A 'Spike hilt', disctinct from the stout Viking Age sword guards that preceded it, 'gaddhjalt' was common in the 10th and 11th centuries",
      keyWords:["crusades","middle ages","medieval","gaddhjalt","chopper","arming","knightly","10th century", "11th century"],
      imageURL:"",
      geometrySrc:"style-1-guard.obj",
    },
    {
      swordType:"armingSword",
      name:"Saxony-style basket hilt",
      description:"A late renaissance development, this style of guard offers superb hand protection without overly restricting access to the grip.",
      keyWords:["renaissance","16th century","cut-and-thrust","basket hilt","complex guard","saxony","schiavona"],
      imageURL:"",
      geometrySrc:"cav-sidesword-guard.obj",
    },
  ]

  private gripDB = [
    {
      swordType:"armingSword",
      name:"Single-handed waised grip",
      length:3,
      material:"leather",
      description:"",
      keyWords:[],
      imageURL:"",
      geometrySrc:"type-10-grip.obj"
    },
    {
      swordType:"armingSword",
      name:"Ornate wire wrap",
      length:4,
      material:"metal",
      description:"Beautiful, but rough to the touch. Wear gloves!",
      keyWords:[],
      imageURL:"",
      geometrySrc:"cav-sidesword-grip.obj"
    }
  ]

  private pommelDB = [
    {
      swordType:"armingSword",
      name:"Oakeshott Type A Pommel",
      description:"Extremely wide pommels such as this one originate in migration era swords and would only allow for a hammer grip on the sword.",
      keyWords:[],
      geometrySrc:"type-a-pommel.obj"
    },
    {
      swordType:"armingSword",
      name:"Elongated octohedron",
      description:"Narrow pommel facilitates extended grip. Engraved motifs on the facets.",
      keyWords:[],
      geometrySrc:"cav-sidesword-pommel.obj"
    }
  ]

  constructor(
    private _db: HttpClient
  ) { }

  makeNewBlade(data) {

  }

  makeNewGuard(data){

  }

  makeNewGrip(data){

  }

  makeNewPommel(data){

  }

  makeNewPremade(data){

  }
/* *************************** */
  getAllBlades(){
      return {blades: this.bladeDB};
  }

  getBladeDetails(id){

  }
  /* *************************** */
  getAllGuards(){
    return {guards: this.guardDB};
  }
  getGuardDetals(id){
    
  }
  /* *************************** */
  getAllGrips(){
    return {grips: this.gripDB};
  }

  getGripDetails(id){

  }

  getAllPommels(){
    return {pommels: this.pommelDB};
  }

  getPommelDetails(id){

  }

  /* **** USER CONTROL **** */
  userRegister(data){

  }

  userLogin(data){

  }

  userLogOut(){

  }

  /* **** E-commerce control */
  makeOrder(data){

  }

}
