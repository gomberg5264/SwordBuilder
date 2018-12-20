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
      },
  ]

  private guardDB = [
    {
      swordType:"armingSword",
      name:"Oakeshott Style 1 crossguard",
      description:"A 'Spike hilt', disctinct from the stout Viking Age sword guards that preceded it, 'gaddhjalt' was common in the 10th and 11th centuries",
      keyWords:["crusades","middle ages","medieval","gaddhjalt","chopper","arming","knightly","10th century", "11th century"],
      imageURL:""
    },
    {
      swordType:"armingSword",
      name:"Saxony-style basket hilt",
      description:"A late renaissance development, this style of guard offers superb hand protection without overly restricting access to the grip.",
      keyWords:["renaissance","16th century","cut-and-thrust","basket hilt","complex guard","saxony","schiavona"],
      imageURL:""
    },
  ]

  private gripDB = [
    {},
    {}
  ]

  private pommelDB = [
    {},
    {}
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

  getAllBlades(){

  }

  getBladeDetails(id){

  }

  getAllGuards(){

  }

  getGuardDetals(id){

  }

  getAllGrips(){

  }

  getGripDetails(id){

  }

  getAllPommels(){

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
