import { Injectable } from '@angular/core';
import {HttpClient,HttpParams,HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

import { tokenNotExpired } from 'angular2-jwt';
import { Observable } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private token=[];

  private baseUrl='http://server.simplestate.me/api';
  private loginUrl='/user/auth/login';
  constructor(private http:HttpClient) {
   
   }
   login(email: string, password: string): Observable<any> {
    const params = new HttpParams()
    .set('email',email)
    .set('password', password);
    return this.http.post<any>(this.baseUrl+this.loginUrl, params).pipe(map(user=>{
      console.log(user);
      if(user&&user.access_token)
        localStorage.setItem('currentUser', JSON.stringify(user));
      return user;      
    }));
  } 
  tryHttp(){
    const response= this.http.get(this.baseUrl+'property/details');
  console.log(response);
  }

logout() {
  // remove user from local storage to log user out
  localStorage.removeItem('currentUser');
}

}
