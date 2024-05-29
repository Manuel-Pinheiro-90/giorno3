import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iproduct } from '../modules/iproduct';
import { Ijeson } from '../modules/ijeson';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


apiUrl: string = 'https://dummyjson.com/products'


  constructor(private http:HttpClient) { }

getAll():Observable<Ijeson>{
  return this.http.get<Ijeson>(this.apiUrl);
}


getById(id:number):Observable<Iproduct>{
  return this.http.get<Iproduct>(this.apiUrl + '/' + id);
}





}
