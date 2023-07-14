import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  @Output() datosDropdown : EventEmitter<any> = new EventEmitter();
  private url = 'http://localhost:3000/';
  constructor(private http: HttpClient ,private jwtHelper:JwtHelperService,) {}

  lista_asignaturas(){
    return this.http.get(this.url+"asignatura/docasi/"+this.getdatostoken().id)
  }

  getdatostoken() {
    const token: any = localStorage.getItem('token');
    const tokendecode: any = this.jwtHelper.decodeToken(token); 
    return tokendecode;
  }
  marcar(data:any){
    return this.http.post(this.url+"asistencia",data)
  }

  ultimoRegistro(){
    return this.http.get(this.url+"asistencia/"+this.getdatostoken().id+"/last")
  }

  historial(){
    return this.http.get(this.url+"asistencia/"+this.getdatostoken().id+"")
  }
}
