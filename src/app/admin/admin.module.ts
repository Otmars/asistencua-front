import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { UsuarioComponent } from './usuario/usuario.component';
import { HospitalesComponent } from './hospitales/hospitales.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    UsuarioComponent,
    HospitalesComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
