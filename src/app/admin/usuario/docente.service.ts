import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Docente, User } from './docente-inteface';

@Injectable({
  providedIn: 'root'
})
export class DocenteService {

  url = environment.backend;
  private _refresh$ = new Subject<void>()
  constructor(private http : HttpClient) { }
  get refresh$(){
    return this._refresh$
  }
  getDocentes():Observable<Docente[]>{
    return this.http.get<Docente[]>(this.url+"docente")
  }
  postDocente(body :any){
    return this.http.post(this.url+"user",body).pipe(
      tap(()=>{
        this._refresh$.next();
      })
    )
  }
  deleteDocente(id : number){
    return this.http.delete(this.url+"user/"+id).pipe(
      tap(()=>{
        this._refresh$.next();
      })
    )
  }
  patchDocente(id:string, body : User ){
    return this.http.patch(this.url+"user/"+id,body).pipe(
      tap(()=>{
        this._refresh$.next();
      })
    )
  }
}
