import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url = 'http://localhost:3000/';
  constructor(private http: HttpClient) {}

  lista_asignaturas(id :string){
    return this.http.get(this.url+"asignatura/docasi/"+id)
  }
}
