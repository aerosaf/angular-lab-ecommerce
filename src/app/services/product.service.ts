import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private httpClient:HttpClient;
  private APIENDPOINT:string = "http://localhost:3000/products";

  // you can ask angular to create httpClient Object and inject it
  // as long as the class is injectable class you can always do this
  constructor(httpClient:HttpClient) { 
    this.httpClient = httpClient;
  }

  findAll():Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.APIENDPOINT)
  }

}