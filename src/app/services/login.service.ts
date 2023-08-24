import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Credentials } from '../models/credentials';
import { LoginResponse } from '../models/login-response';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private httpClient:HttpClient;
  private APIENDPOINT:string = "http://localhost:3000/login";
  private _loggedInStore:BehaviorSubject<any> = new BehaviorSubject(undefined);
  public loggedInSource:Observable<LoginResponse> = this._loggedInStore.asObservable();

  constructor(httpClient:HttpClient) { 
    this.httpClient = httpClient;
  }

  set loggedInStore(loginResponse:LoginResponse) {
    this._loggedInStore.next(loginResponse);
  }

  doLogin(credentials:Credentials) {
    return this.httpClient.post<LoginResponse>(this.APIENDPOINT, credentials);
  }

  doLogout() {
    this._loggedInStore.next(undefined);
  }

}
