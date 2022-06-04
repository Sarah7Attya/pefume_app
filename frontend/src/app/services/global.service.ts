import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  public navFlag:boolean= false
  constructor(private http : HttpClient) { }



signup(obj:any) : Observable<any> {
  return this.http.post("http://localhost:3000/user/register" , obj )
}

login(obj:any) : Observable<any> {
  return this.http.post("http://localhost:3000/user/login" , obj )
}

loadprods(obj:any) : Observable<any> {
  return this.http.post("http://localhost:3000/product" , obj )
}


}
