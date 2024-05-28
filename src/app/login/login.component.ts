import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { NgOptimizedImage } from '@angular/common'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
visible: boolean;
  constructor(private authservice: AuthService, private router:Router) {}
  onSubmit() {
    this.authservice
      .singIn({ username: this.username, password: this.password })
      .subscribe((res:any) => {

        localStorage.setItem('token', res.token);
        this.router.navigate(['home'])
      });
  }
  username: string //= 'Otmar_9991405';
  password: string //= '1998-02-10';
}
