import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public user:User;
  public isRegistration:boolean;
  
  private userService:UserService;

  constructor(userService:UserService) { 
    this.user = new User(0, "", "", "", "");
    this.isRegistration = true;
    this.userService = userService;
  }

  ngOnInit(): void {
  }

  doRegister() {
    this.userService.save(this.user).subscribe(() => {
      this.isRegistration = false;
    })    
  }

  doHome() {
    this.user = new User(0, "", "", "", "");
    this.isRegistration = true;
  }

}
