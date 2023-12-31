import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url = environment.backend;
  constructor(private http: HttpClient, private jwthelper: JwtHelperService) {}

  singIn(user: any) {
    return this.http.post(this.url + 'user/login', user);
  }
  isAuth(): boolean {
    const token = localStorage.getItem('token');
   
    if (this.jwthelper.isTokenExpired(token) || !token) {
      return false;
    }
    return true;
  }
}
