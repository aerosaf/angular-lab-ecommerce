import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { User } from '../models/user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public user:User;

  constructor() { 
    this.user = new User(0, "", "", "", "");
  }

  ngOnInit(): void {
  }

}