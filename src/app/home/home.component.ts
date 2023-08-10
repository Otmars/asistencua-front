import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
cerrarSesion() {
localStorage.removeItem('token')
this.router.navigate(['login'])
}
  saludo!: string;
  nombreusuario!: string;
  iduser: string;
constructor(private jwtHelper:JwtHelperService, private dataService:DataService,private router:Router){}
  ngOnInit(): void {
    this.mostrarSaludo()
    this.iduser = this.getdatostoken().id
  }
  mostrarSaludo() {
    var texto = '';
    var ahora = new Date();
    var hora = ahora.getHours();
    if (hora >= 6 && hora < 12) {
      texto = 'Buenos días, ';
    } else if (hora >= 12 && hora < 18) {
      texto = 'Buenas tardes, ';
    } else {
      texto = 'Buenas noches, ';
    }
    this.nombreusuario = this.getdatostoken().nombres.split(' ');
    this.nombreusuario = this.nombreusuario[0]
    this.saludo = texto ; 
  }
  getdatostoken() {
    const token: any = localStorage.getItem('token');
    const tokendecode: any = this.jwtHelper.decodeToken(token); 
    return tokendecode;
  }
}
