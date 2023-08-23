import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public user:User;
  public isRegistration:boolean;

  constructor() { 
    this.user = new User(0, "", "", "", "");
    this.isRegistration = true;
  }

  ngOnInit(): void {
  }

  doRegistration() {
    this.isRegistration = false;
  }

  doHome() {
    this.isRegistration = true;
  }

}