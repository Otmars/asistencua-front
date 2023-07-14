import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-asignatura-lista',
  templateUrl: './asignatura-lista.component.html',
  styleUrls: ['./asignatura-lista.component.css']
})
export class AsignaturaListaComponent implements OnInit {
  saludo!: string;
  nombreusuario!: string;
  iduser: string;
  asignaturas : any[] | undefined;

  selectedAsignatura:any;
constructor(private jwtHelper:JwtHelperService, private dataService:DataService){}
  ngOnInit(): void {
    this.iduser = this.getdatostoken().id
    this.dataService.lista_asignaturas(this.iduser).subscribe((res:any)=>{
      console.log(res);
      this.asignaturas=res
    })
  }
  
  asignaturadrodown(dato :any){
    return dato.nombre + " / "+ dato.paralelo + " / "+ dato.hospital.nombre
  }
  getdatostoken() {
    const token: any = localStorage.getItem('token');
    const tokendecode: any = this.jwtHelper.decodeToken(token); 
    return tokendecode;
  }
  // ngOnInit() {
  //     this.countries = [
  //         { name: 'Austaaaaaaaaaaaaaaaaaralia', code: 'AU' },
  //         { name: 'Brazil', code: 'BR' },
  //         { name: 'China', code: 'CN' },
  //         { name: 'Egypt', code: 'EG' },
  //         { name: 'France', code: 'FR' },
  //         { name: 'Germany', code: 'DE' },
  //         { name: 'India', code: 'IN' },
  //         { name: 'Japan', code: 'JP' },
  //         { name: 'Spain', code: 'ES' },
  //         { name: 'United States', code: 'US' }
  //     ];
  // }
}