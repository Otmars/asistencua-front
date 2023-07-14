import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url = 'http://localhost:3000/';
  constructor(private http: HttpClient, private jwthelper: JwtHelperService) {}

  singIn(user: any) {
    return this.http.post(this.url + 'user/login', user);
  }
  isAuth(): boolean {
    const token = localStorage.getItem('token');
    console.log(!!this.jwthelper.isTokenExpired(token));
    
    if (this.jwthelper.isTokenExpired(token) || !token) {
      return false;
    }
    return true;
  }
}
