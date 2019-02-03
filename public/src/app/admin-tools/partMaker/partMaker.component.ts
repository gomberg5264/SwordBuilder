import { Component, OnInit, Input } from '@angular/core';
import { DatabaseService } from '../../database.service';

@Component({
  selector: 'app-partMaker',
  templateUrl: './partMaker.component.html',
  styleUrls: ['./partMaker.component.css']
})
export class PartMakerComponent implements OnInit {
  @Input() partType:string;
  errors:any;
  currentPart:any;
  currentKeyword:string;
  constructor(
    private _db: DatabaseService,
  ) { }

  ngOnInit() {
    this.currentKeyword="";
    this.currentPart={
      swordType:"",
      name:"",
      description:"",
      cost:0,
      keyWords:[],
      imageURL:"",
      geometrySrc:"",
    }
    switch(this.partType){
      case "blade":
      this.currentPart.purpose="";

      this.currentPart.maxLength=40;
      
      this.currentPart.minLength=20;

      break;
      case "guard":
      break;
      case "grip":
      this.currentPart.gripLength=3;

      this.currentPart.material="";
      case "pommel":
      break;
    }
    this.errors={};
  }

  submitPart(){
    console.log("Submitting "+this.partType);
    
    if (this.validatePartInput()){
      console.log("Ready to submit "+this.partType);
      let observe = this._db.makeNewPart(this.partType, this.currentPart)
      observe.subscribe(data=>{
        console.log(data);
        if(data['error']){
          this.errors.database=data['error'];
        }
        else {
          console.log("Success!");
        }
      });
    };
  }

  addKeyWord(){
    if (this.currentKeyword.length>3){
        this.currentPart.keyWords.push(this.currentKeyword);
        this.currentKeyword="";
    }
  }

  validatePartInput(){
    //the more specialized input - i.e. image and geometry URLs will need to be expanded. For now - internal storage, later - google drive.
    this.errors={};
    if ((this.currentPart.name.length<=3)||((this.currentPart.name.length>=50))){
        this.errors.name="The name has to be be between 3 and 50 characters in length";
    }
    if (this.currentPart.description.length>300){
      this.errors.description="The description is too long. Keep it under 300 characters."
    }
    if (this.currentPart.keyWords.length<1){
      this.errors.keyWords="Please add some keywords before moving on";
    }
    if (this.currentPart.imageURL.length<4){
      this.errors.imageURL="Please add a valid path to an image";
    }
    if (this.currentPart.geometrySrc.length<4){
      this.errors.geometrySrc="Please add a valid path to an image"
    }
    switch(this.partType){
      case "blade":
      if (this.currentPart.minLength>this.currentPart.maxLength){
        this.errors.minLength="Minimum has to be lower than maximum";
      }
      else if (this.currentPart.minLength<20){
        this.errors.minLength="This is a dagger, not a sword";
      }
      if (this.currentPart.maxLength>50){
        this.errors.maxLength="A blade this long belongs in fantasy, not HEMA";
      }
      break;
      case "guard":
      break;
      case "grip":
      if (this.currentPart.gripLength<1.5){
        this.errors.gripLength="No one with hands that small should have access to sharp objects";
      }
      case "pommel":
      break;
    }
    console.log(this.errors);
    console.log(this.errors.length);
    console.log(this.errors.length<1);
    console.log(this.errors=={});
    console.log(this.errors==null);
    if (this.errors){
      console.log("Errors.");
      
    }
    
    
    
    
    return (this.errors.length==undefined);
  }

}
