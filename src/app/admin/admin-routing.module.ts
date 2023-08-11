import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioComponent } from './usuario/usuario.component';
import { HospitalesComponent } from './hospitales/hospitales.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AsignaturasComponent } from './asignaturas/asignaturas.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'usuario',
    component: UsuarioComponent,
  },
  {
    path:'hospital',
    component:HospitalesComponent
  },
  {
    path:'asignatura',
    component:AsignaturasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
