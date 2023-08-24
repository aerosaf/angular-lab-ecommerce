import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { CartItem } from '../models/cart-item';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  private httpClient:HttpClient;
  private APIENDPOINT:string = "http://localhost:3000/shoppingcart";

  // you can ask angular to create httpClient Object and inject it
  // as long as the class is injectable class you can always do this
  constructor(httpClient:HttpClient) { 
    this.httpClient = httpClient;
  }

  findAll():Observable<CartItem[]> {
    return this.httpClient.get<CartItem[]>(this.APIENDPOINT);
  }

  save(cartItem:CartItem):Observable<CartItem> {
    return this.httpClient.post<CartItem>(this.APIENDPOINT, cartItem);
  }

  update(user:CartItem):Observable<CartItem> {
    return this.httpClient.put<CartItem>(this.APIENDPOINT + "/" + user.id, user);
  }

  delete(id:number):Observable<CartItem> {
    return this.httpClient.delete<CartItem>(this.APIENDPOINT + "/" + id);
  }

}