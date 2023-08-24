import { Component, OnInit } from '@angular/core';
import { Credentials } from '../../models/credentials';
import { LoginService } from '../../services/login.service';
import { LoginResponse } from '../../models/login-response';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public credentials:Credentials;
  public loginResponse?:LoginResponse;
  private loginService:LoginService
  public message:string;
  
  constructor(loginService:LoginService) { 
    this.credentials = new Credentials("", "");
    this.loginService = loginService;
    this.message = "";
  }

  ngOnInit(): void {
    this.loginService.loggedInSource.subscribe((loginResponse:LoginResponse) => {
      this.loginResponse = loginResponse;
    })
  }

  doLogin() {
    this.loginService.doLogin(this.credentials).subscribe({
      next: (loginResponse:LoginResponse) => {
        this.loginService.loggedInStore = loginResponse;
      },
      error: (error:any) => {
        this.message = error.error;
      }
    })
  }

  doLogout() {
    this.loginService.doLogout();
    this.credentials = new Credentials("", "");
  }

}
