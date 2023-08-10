import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(private authService:AuthService, private router:Router ,private jwtHelper:JwtHelperService) {}
  canActivate(): boolean {
    const token: any = localStorage.getItem('token');
    const tokendecode: any = this.jwtHelper.decodeToken(token); 
    if(!this.authService.isAuth() || tokendecode.rol != 'admin'){
      console.log('Token no es válido o ya expiró');
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}