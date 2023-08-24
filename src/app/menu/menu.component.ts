import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { LoginResponse } from '../models/login-response';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public loginResponse?:LoginResponse;
  private loginService:LoginService

  constructor(loginService:LoginService) { 
    this.loginService = loginService;
  }

  ngOnInit(): void {
    this.loginService.loggedInSource.subscribe((loginResponse:LoginResponse) => {
      this.loginResponse = loginResponse;
    })
  }

}