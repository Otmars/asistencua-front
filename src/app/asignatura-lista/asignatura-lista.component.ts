import { ChangeDetectionStrategy, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DataService } from '../services/data.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { PlacesService } from '../maps/services';

@Component({
  selector: 'app-asignatura-lista',
  templateUrl: './asignatura-lista.component.html',
  styleUrls: ['./asignatura-lista.component.css'],

})
export class AsignaturaListaComponent implements OnInit{

  saludo!: string;
  nombreusuario!: string;
  asignaturas: any[] | undefined;

  selectedAsignatura: any;
  constructor(
    private jwtHelper: JwtHelperService,
    private dataService: DataService,
    private placesService:PlacesService
  ) {
    
  }

  ngOnInit(): void {
    this.dataService.lista_asignaturas().subscribe((res: any) => {
      this.asignaturas = res;
    });
  }
  click(){
    if (this.selectedAsignatura != undefined) {
      this.dataService.datosDropdown.emit({
        data : this.selectedAsignatura
      })
      this.placesService.getUserLocation()
    }
    
  }
}
