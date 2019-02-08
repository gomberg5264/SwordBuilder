import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  logingIn=true;

  constructor() { }

  ngOnInit() {
  }

  flip(){
    if (this.logingIn) {
      this.logingIn=false;
    }
    else{
      this.logingIn=true;
    }
  }

}
