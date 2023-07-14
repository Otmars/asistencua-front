import { DatePipe } from '@angular/common';
import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import {
  ConfirmationService,
  MessageService,
  ConfirmEventType,
} from 'primeng/api';
import { PlacesService } from '../maps/services';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-boton-principal',
  templateUrl: './boton-principal.component.html',
  styleUrls: ['./boton-principal.component.css'],
  providers: [MessageService, DatePipe, ConfirmationService],
})
export class BotonPrincipalComponent implements OnInit {
  @ViewChild('Bton') Bton: ElementRef;
  texto: string = 'MARCAR';
  hospital: any;
  validado: boolean;
  estadoBoton: boolean = true;
  ultima_Marca: any;
  checked: any;
  materia_Actual: any;
  constructor(
    private render: Renderer2,
    private messageService: MessageService,
    private datePipe: DatePipe,
    private placesService: PlacesService,
    private dataService: DataService,
    private confirmationService: ConfirmationService
  ) {
    this.dataService.datosDropdown.subscribe((res: any) => {
      this.hospital = res.data;

      this.estadoBoton = false;
    });
  }
  ngOnInit(): void {
    this.cargarUltimoMarca();

    // this.estadoBoton = true;
  }

  cargarUltimoMarca() {
    this.dataService.ultimoRegistro().subscribe((res: any) => {
      this.ultima_Marca = res[0].estado;
      this.materia_Actual = res[0].asignatura.nombre
    });
  }
  loading: boolean = false;

  load() {
    this.loading = true;

    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }
  location: any;

  // clickdisabled() {
  //   this.messageService.add({
  //     severity: 'warn',
  //     summary: 'Selecione su hospital o aula',
  //     detail: 'selecione una  de las opciones',
  //   });
  // }
  click() {
    let objectDate = new Date();
    if (this.ultima_Marca == 'Entrada') {
      this.ultima_Marca = 'Salida';
    }else{
      this.ultima_Marca = 'Entrada';
    }

    this.confirmationService.confirm({
      message: '¿Desea proceder con el registro '+this.ultima_Marca+" a "+this.materia_Actual+" a " +objectDate.toLocaleDateString("es-MX",{ weekday:'long', day:'numeric', month:'long', year:'numeric' }) +"?",
      header: 'Confirmacion',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.load();
        if (this.estadoBoton == true) {
          this.messageService.add({
            severity: 'warn',
            summary: 'Selecione su hospital o aula',
            detail: 'selecione una  de las opciones',
            sticky: true,
          });
        } else {
          navigator.geolocation.getCurrentPosition((position) => {
            console.log(position);
            this.location = position.coords;
            this.validado = this.enUbicacion(
              this.location.latitude,
              this.location.longitude,
              this.hospital.hospital.latitud,
              this.hospital.hospital.longitud
            );
            if (this.validado == false) {
              this.messageService.add({
                severity: 'error',
                summary: 'No se encuentra Cerca al Destino',
                detail: 'Acerquese al destion e intente de nuevo',
                sticky: true,
              });
            } else {
              const data = {
                estado: this.ultima_Marca,
                ubicacion_registro: this.placesService.useLocation,
                asignatura: { id: this.hospital.id },
              };
              this.dataService.marcar(data).subscribe((res) => {
                console.log(res);
              });
              this.messageService.add({
                severity: 'success',
                summary: 'Registro Exitoso',
                detail: 'La hora de registro es: ' + Date.now(),
                sticky: true,
              });
            }
          });
          console.log(this.validado);
          this.cargarUltimoMarca;
        }
      },
      reject: () => {
        console.log('rechazado');
      },
    });
    console.log(this.estadoBoton);
  }

  enUbicacion(lat: number, long: number, lat2: number, long2: number) {
    console.log(lat, '-----', long);
    console.log(lat2, '-----', long2);
    const d: number = Math.sqrt(
      Math.pow(lat2 - lat, 2) + Math.pow(long2 - long, 2)
    );
    if (d <= 0.00020745697925245176) {
      this.validado = true;
      return true;
    }
    this.validado = false;
    return false;
  }
}
