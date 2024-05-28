import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, HashLocationStrategy, LocationStrategy, registerLocaleData } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { UsuarioComponent } from './usuario/usuario.component';
import { HospitalesComponent } from './hospitales/hospitales.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { MessageService, ConfirmationService } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import localeMX from '@angular/common/locales/es-BO'
registerLocaleData(localeMX)
import { InputMaskModule } from 'primeng/inputmask';
import { AsignaturasComponent } from './asignaturas/asignaturas.component';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { AsistenciasComponent } from './asistencias/asistencias.component';
@NgModule({
  declarations: [
    UsuarioComponent,
    HospitalesComponent,
    DashboardComponent,
    AsignaturasComponent,
    AsistenciasComponent,
    

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ToastModule,
    ConfirmDialogModule,
    TableModule,
    DialogModule,
    ReactiveFormsModule,
    InputNumberModule,
    InputTextModule,
    InputMaskModule,
    DropdownModule,
    CalendarModule
  ],
  providers:[MessageService,
    ConfirmationService,{provide:LOCALE_ID , useValue: 'es-BO'}, {provide:LocationStrategy,useClass:HashLocationStrategy},]
})
export class AdminModule { }
