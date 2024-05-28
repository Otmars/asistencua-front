import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AsistenciaService {

  url = environment.backend;
  private _refresh$ = new Subject<void>()
  constructor(private http : HttpClient) { }


  getAsistencias(){
    return this.http.get(this.url+'asistencia')
  }

}
