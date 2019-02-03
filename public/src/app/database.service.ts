import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private bladeDB = [
    {
      swordType: "armingSword",
      purpose: "cutting",
      name: "Late 16th century cavalry blade",
      description: "A hollow-ground double-edged blade with a pronounced ricasso, fit for both cutting and thrusting",
      cost: 500,
      maxLength: 35,
      minLength: 30,
      keyWords: ["renaissance", "16th century", "cut-and-thrust", "basket hilt", "complex guard", "saxony"],
      imageURL: "blade.jpg",
      geometrySrc: "blade-cervenka-german-cavalry-sidesword.obj",
    },
    {
      swordType: "armingSword",
      purpose: "cutting",
      name: "Oakeshott Type X",
      description: "A direct descendant of the Viking Age swords this massive blade features a prominent fuller and a cut-centric blade profile",
      cost: 500,
      maxLength: 35,
      minLength: 33,
      keyWords: ["crusades", "middle ages", "medieval", "gaddhjalt", "chopper", "arming", "knightly", "10th century", "11th century"],
      imageURL: "blade.jpg",
      geometrySrc: "blade-oak-type-10.obj",
    },
    {
      swordType: "longsword",
      purpose: "cutting",
      name: "Oakeshott Type XVa",
      description: "15th century blade with diamond-shaped crossection. Stiff and tapered, this blade was designed for seeking out the gaps in plate armor.",
      cost: 500,
      maxLength: 35,
      minLength: 33,
      keyWords: ["crusades", "middle ages", "medieval", "gaddhjalt", "chopper", "arming", "knightly", "10th century", "11th century"],
      imageURL: "blade.jpg",
      geometrySrc: "blade-oak-type-15a.obj",
    },
    {
      swordType: "armingSword",
      purpose: "cutting",
      name: "Petersen Type AE",
      description: "A rare blade type of the Viking Age.",
      cost: 500,
      maxLength: 35,
      minLength: 33,
      keyWords: ["crusades", "middle ages", "medieval", "gaddhjalt", "chopper", "arming", "knightly", "10th century", "11th century"],
      imageURL: "blade.jpg",
      geometrySrc: "blade-petersen-type-ae-viking.obj",
    },
  ]

  private guardDB = [
    {
      swordType: "armingSword",
      name: "Oakeshott Style 1 crossguard",
      description: "A 'Spike hilt', disctinct from the stout Viking Age sword guards that preceded it, 'gaddhjalt' was common in the 10th and 11th centuries",
      keyWords: ["crusades", "middle ages", "medieval", "gaddhjalt", "chopper", "arming", "knightly", "10th century", "11th century"],
      imageURL: "otherPart.jpg",
      geometrySrc: "guard-oak-style-1.obj",
    },
    {
      swordType: "armingSword",
      name: "Saxony-style basket hilt",
      description: "A late renaissance development, this style of guard offers superb hand protection without overly restricting access to the grip.",
      keyWords: ["renaissance", "16th century", "cut-and-thrust", "basket hilt", "complex guard", "saxony", "schiavona"],
      imageURL: "otherPart.jpg",
      geometrySrc: "guard-cervenka-german-cavalry-sidesword.obj",
    },
    {
      swordType: "armingSword",
      name: "Curved tapering guard",
      description: "Simple and elegant.",
      keyWords: ["renaissance", "16th century", "cut-and-thrust", "basket hilt", "complex guard", "saxony", "schiavona"],
      imageURL: "otherPart.jpg",
      geometrySrc: "guard-ringeck-longsword.obj",
    },
    {
      swordType: "armingSword",
      name: "Late Viking Guard",
      description: "Uncommon, probably due to difficulty of manufacturing.",
      keyWords: ["renaissance", "16th century", "cut-and-thrust", "basket hilt", "complex guard", "saxony", "schiavona"],
      imageURL: "otherPart.jpg",
      geometrySrc: "guard-valkyrja-viking.obj",
    },
  ]

  private gripDB = [
    {
      swordType: "armingSword",
      name: "Waisted grip, single hand",
      gripOffset: 4.05,
      material: "leather",
      description: "otherPart.jpg",
      keyWords: [],
      imageURL: "otherPart.jpg",
      geometrySrc: "grip-waisted-armingsword.obj"
    },
    {
      swordType: "longSword",
      name: "Waisted grip, two hands",
      gripOffset: 7.9,
      material: "leather",
      description: "otherPart.jpg",
      keyWords: [],
      imageURL: "otherPart.jpg",
      geometrySrc: "grip-waisted-longsword.obj"
    },
    {
      swordType: "armingSword",
      name: "Ornate wire wrap",
      gripOffset: 3.9,
      material: "metal",
      description: "Beautiful, but rough to the touch. Wear gloves!",
      keyWords: [],
      imageURL: "otherPart.jpg",
      geometrySrc: "grip-tapered-sidesword-wire.obj"
    }
  ]

  private pommelDB = [
    {
      swordType: "armingSword",
      name: "Oakeshott Type A Pommel",
      description: "Extremely wide pommels such as this one originate in migration era swords and would only allow for a hammer grip on the sword.",
      keyWords: [],
      imageURL: "otherPart.jpg",
      geometrySrc: "pommel-oak-type-a.obj"
    },
    {
      swordType: "armingSword",
      name: "Oakeshott Type J Pommel",
      description: "Extremely wide pommels such as this one originate in migration era swords and would only allow for a hammer grip on the sword.",
      keyWords: [],
      imageURL: "otherPart.jpg",
      geometrySrc: "pommel-oak-type-j.obj"
    },
    {
      swordType: "armingSword",
      name: "Oakeshott Type T Pommel",
      description: "Extremely wide pommels such as this one originate in migration era swords and would only allow for a hammer grip on the sword.",
      keyWords: [],
      imageURL: "otherPart.jpg",
      geometrySrc: "pommel-oak-type-t.obj"
    },
    {
      swordType: "armingSword",
      name: "Late Viking Guard",
      description: "Extremely wide pommels such as this one originate in migration era swords and would only allow for a hammer grip on the sword.",
      keyWords: [],
      imageURL: "otherPart.jpg",
      geometrySrc: "pommel-valkyrja-viking.obj"
    },
    {
      swordType: "armingSword",
      name: "Elongated octohedron",
      description: "Narrow pommel facilitates extended grip. Engraved motifs on the facets.",
      keyWords: [],
      imageURL: "otherPart.jpg",
      geometrySrc: "pommel-cervenka-german-cavalry-sidesword.obj"
    }
  ]

  constructor(
    private _db: HttpClient
  ) { }


  newPremade(data) {

  }
  makeNewPart(partType, data) {
    console.log("Sending out to DB");
    console.log('/api/sword/'+partType);
    
    
    return this._db.post('/api/sword/'+partType, data);
  }
  //The MongoDB connect
  getAllParts(partType) {
    console.log("Making a database call");

    return this._db.get('api/sword/'+partType);
  }
  getPartDetails(id) {

  }
  
  /* To be depricated - old data retreival */
  getAllBlades() {
    return { blades: this.bladeDB };
  }
  getAllGuards() {
    return { guards: this.guardDB };
  }
  getAllGrips() {
    return { grips: this.gripDB };
  }
  getAllPommels() {
    return { pommels: this.pommelDB };
  }
  /* *************************** */


  /* **** USER CONTROL **** */
  userRegister(data) {

  }

  userLogin(data) {

  }

  userLogOut() {

  }

  /* **** E-commerce control */
  makeOrder(data) {

  }

}
