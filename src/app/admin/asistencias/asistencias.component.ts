import { Component, OnInit } from '@angular/core';
import { AsistenciaService } from 'src/app/services/asistencia.service';

@Component({
  selector: 'app-asistencias',
  templateUrl: './asistencias.component.html',
  styleUrls: ['./asistencias.component.css'],
})
export class AsistenciasComponent implements OnInit {
  buttonfiltros: boolean = true;
  asistencias :any
  mostrarfiltros() {
    this.buttonfiltros = !this.buttonfiltros;
  }
  constructor(private asistenciaService:AsistenciaService){

  }

  ngOnInit() {
    this.asistenciaService.getAsistencias().subscribe(res=>{
      console.log(res);
      
      this.asistencias=res
    })
  }
}
