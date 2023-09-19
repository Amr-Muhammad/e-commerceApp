import { Injectable, Injector, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class UserService {

  baseURL: string = 'https://ecommerce.routemisr.com'

  constructor(private _HttpClient: HttpClient) {
  }


  getData(): Observable<any> {
    return this._HttpClient.get(`${this.baseURL}/api/v1/products`)
  }

}

