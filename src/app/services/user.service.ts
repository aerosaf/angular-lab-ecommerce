import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private httpClient:HttpClient;
  private APIENDPOINT:string = "http://localhost:3000/users";

  constructor(httpClient:HttpClient) { 
    this.httpClient = httpClient;
  }

  findAll():Observable<User[]> {
    return this.httpClient.get<User[]>(this.APIENDPOINT);
  }

  save(user:User):Observable<User> {
    return this.httpClient.post<User>(this.APIENDPOINT, user);
  }

  update(user:User):Observable<User> {
    return this.httpClient.put<User>(this.APIENDPOINT + "/" + user.id, user);
  }

  delete(id:number):Observable<User> {
    return this.httpClient.delete<User>(this.APIENDPOINT + "/" + id);
  }

}