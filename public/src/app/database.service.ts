import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(
    private _db: HttpClient
  ) { }


  newPremade(data) {

  }
  makeNewPart(partType, data) {
    return this._db.post('/api/sword/'+partType, data);
  }

  //The MongoDB connect
  getAllParts(partType) {
    return this._db.get('api/sword/'+partType);
  }
  getPartDetails(id) {

  }

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
